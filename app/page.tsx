'use client';

import Image from "next/image";
import SkillsBlock from "@/app/ui/skills-block";
import { skills } from "@/app/lib/data";
import styles from "@/app/styles/about.module.css";

export default function Home() {
  return (
    <section
      className="container flex items-center justify-center"
    >
      <div className={styles.about}>
        <div className="box-shadow bg-white dark:bg-zinc-800">
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
          <p>
            I am a software developer with {new Date().getUTCFullYear() - new Date('2017').getUTCFullYear()} years of PHP development experience in creating applications and frameworks such as <a href="https://symfony.com" target="_blank">Symfony</a> and developing plugins and themes for <a href="https://wordpress.org" target="_blank">WordPress</a>. I am experienced in developing user interfaces with HTML, CSS, and JavaScript and have a solid understanding of SQL.
          </p>
        </div>

        <SkillsBlock className="box-shadow bg-white dark:bg-zinc-800" />
      </div>
    </section>
  );
}
