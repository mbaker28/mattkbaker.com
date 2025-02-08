'use client';

import Image from "next/image";
import styles from "@/app/styles/about.module.css";

type Skills = {
  header: string,
  entries: string[]
}

const skills: Skills[] = [
  {
    header: 'Languages',
    entries: [
      'PHP',
      'JavaScript',
      'TypeScript',
      'NodeJS',
      'SQL'
    ]
  },
  {
    header: 'Frameworks',
    entries: [
      'React',
      'NextJS',
      'Symfony'
    ]
  },
  {
    header: 'Software',
    entries: [
      'VSCode',
      'WordPress',
      'WinSCP',
      'Docker'
    ]
  },
  {
    header: 'Tools',
    entries: [
      'Git',
      'GitHub',
      'Composer',
      'NPM',
      'WebPack',
      'Linux'
    ]
  },
  {
    header: 'Knowledge',
    entries: [
      'Object Oriented Programming (OOP)',
      'Unit Testing',
      'APIs'
    ]
  }
];

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
            I am a software developer with 8 years of PHP development experience in creating applications and frameworks such as <a href="https://symfony.com" target="_blank">Symfony</a> and developing plugins and themes for <a href="https://wordpress.org" target="_blank">WordPress</a>. I am experienced in developing user interfaces with HTML, CSS, and JavaScript and have a solid understanding of SQL.
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
