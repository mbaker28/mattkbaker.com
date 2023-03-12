FROM node:19.7.0

# Install npm
RUN apt-get update && apt-get upgrade -y && \
	apt-get install -y npm