'use client';

import Image from "next/image";
import SkillsBlock from "@/components/skills-block";
import styles from "@/app/styles/about.module.css";

export default function Home() {
  return (
    <section
      className="container flex items-center justify-center"
    >
      <div className={styles.about}>
        <div className="box-shadow bg-white dark:bg-zinc-700">
          <div className="inline-block">
            <Image
              src="/avatar.png"
              alt="avatar"
              width={1933}
              height={1290}
              className="w-40 md:w-80 h-auto rounded-[45%]"
            />
          </div>
          <h1>Matthew Baker</h1>
          <p className="text-justify hyphens-auto">
            I am a full stack software engineer with {new Date().getUTCFullYear() - new Date('2017').getUTCFullYear()} years of experience in designing and maintaining scalable web applications using front-end and back-end technologies. Proficient in HTML, CSS, JavaScript/TypeScript (React, Next.js), Node.js, and PHP with expertise in database management (MySQL, SQL Server).
          </p>
        </div>

        <SkillsBlock className="box-shadow bg-white dark:bg-zinc-700" />
      </div>
    </section>
  );
}
