'use client';

import Image from "next/image";
import { skills } from "@/app/lib/data";
import styles from "@/app/styles/about.module.css";

export default function Home() {
  return (
    <section
      className="container flex items-center justify-center"
    >
      <div className={styles.about}>
        <div className="box-shadow">
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

        <div className="box-shadow p-[5px] text-left">
          <h1>Skills</h1>

          <div>
            {skills.map((item) => {
              return (
                <div key={item.header} className="grid mb-12 md:grid-cols-8 md:gap-4">
                  <div className="md:col-span-2">
                    <strong>{item.header}</strong>
                  </div>
                  <div className="md:col-span-6">
                    <ul>
                      {item.entries.map((entry) => {
                        return (
                          <li key={entry}>{entry}</li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
