FROM node:lts-alpine AS node_upstream

# Base stage for dev and build
FROM node_upstream AS base

RUN apk add --no-cache libc6-compat

WORKDIR /srv/app

# RUN npm install -g corepack@latest && \
# 	corepack enable && \
# 	corepack prepare --activate pnpm@latest && \
# 	pnpm config -g set store-dir /.pnpm-store

RUN npm install -g npm@latest

ENV NEXT_TELEMETRY_DISABLED 1

# Development image
FROM base AS dev

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["sh", "-c", "npm install --save-dev; npm run dev"]

FROM base AS builder

COPY --link package-lock.json ./

COPY --link . .

RUN npm install && \
	npm run build

# Production image, copy all the files and run next
FROM node_upstream AS prod

WORKDIR /srv/app

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system gid 1001 nodejs; \
	adduser --system uid 1001 nextjs

COPY --from=builder --link /src/app/public ./public

RUN mkdir .next; \
	chown nextjs:nodejs .next

COPY --from=builder --link --chown=1001:1001 /srv/app/.next/standalone ./
COPY --from=builder --link --chown=1001:1001 /srv/app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]