import dynamic from "next/dynamic";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Project from "@/components/project";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { GoDash } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";

const ModeToggle = dynamic(() => import("@/components/toggle-theme"), {
  ssr: false,
});

const projects = {
  "git-go": {
    id: 0,
    title: "git-go",
    description:
      "A re-implementation of Git in Go to learn more about git internals and learn Go",
    tags: ["Go"],
    link: "https://github.com/wlmsrvty/git-go",
  },
  bittorrent: {
    id: 1,
    title: "wbittorrent",
    description: "A basic bittorrent client written in C++",
    tags: ["C++", "CMake"],
    link: "https://github.com/wlmsrvty/wbittorrent",
  },
};

const university_projects = {
  tiger: {
    title: "Tiger Compiler",
    description: (
      <span>
        A compiler for the{" "}
        <a
          href="https://assignments.lrde.epita.fr/reference_manual/tiger_language_reference_manual/tiger_language_reference_manual.html"
          target="_blank"
          className="font-semibold"
        >
          Tiger language
        </a>
        <GoArrowUpRight className="inline" /> written in C++
      </span>
    ),
    tags: ["C++", "Flex", "Bison"],
    date: "3rd year",
  },
  "42sh": {
    title: "42sh",
    description: (
      <span>
        A{" "}
        <a
          href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html"
          target="_blank"
          className="font-semibold"
        >
          POSIX
        </a>
        <GoArrowUpRight className="inline" /> compliant shell interpreter
        written in C, hand-written lexer and parser
      </span>
    ),
    tags: ["C", "Autotools"],
    date: "3rd year",
  },
  libc: {
    title: "UNIX",
    description:
      "Re-implementation of UNIX utility tools in C: find, make, malloc",
    tags: ["C"],
    date: "3rd year",
  },
  srs: {
    title: "Enterprise infrastructure",
    description:
      "Designed, maintained and documented an enterprise-like infrastructure.",
    tags: [
      "Windows Active Directory",
      "pfSense",
      "Ansible",
      "Virtualization",
      "OpenVPN",
      "Web Servers",
    ],
    date: "4-5th year",
  },
  srsviro: {
    title: "notmaverick",
    description:
      "Educational ransomware project, custom C2, multi-stage attack",
    tags: ["C#", "C", "C++", "Win32 API", "PowerShell", "JavaScript"],
    date: "5th year",
  },
};

const links = {
  github: "https://github.com/wlmsrvty",
  linkedin: "https://www.linkedin.com/in/williamservaty/",
};

function Title({ title }: { title: string }) {
  return <h2 className="text-xl font-semibold mb-4">{title}</h2>;
}

function Socials() {
  return (
    <div className="flex flex-row justify-center gap-2 text-sm md:text-base md:gap-10">
      <a href={links.linkedin}>
        <div className="flex items-center gap-1 font-normal py-0 px-1 underline">
          <FaLinkedin />
          <p>williamservaty</p>
        </div>
      </a>
      <a href={links.github}>
        <div className="flex items-center gap-1 font-normal py-0 px-1 underline">
          <FaGithub />
          <p>wlmsrvty</p>
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between dark:bg-neutral-950">
      <main className="antialiased flex flex-col items-center px-6 sm:px-20 pt-3 sm:pt-20">
        <div className="max-w-screen-sm">
          <div className="flex items-center">
            <div className="flex gap-1 md:gap-3 grow items-center justify-center dark:text-white text-black">
              <div>
                <Avatar>
                  <AvatarImage src="/william_servaty.jpg" />
                  <AvatarFallback>WS</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center flex-col justify-center gap-y-3">
                <h1 className="text-2xl sm:text-5xl font-bold text-center">
                  William Servaty
                </h1>
                <Socials />
              </div>
            </div>
          </div>

          <div>
            <p className="text-base mt-8">
              I am William Servaty, a graduate software engineer from France,
              deeply interested in{" "}
              <span className="font-semibold">programming</span> and{" "}
              <span className="font-semibold">algorithms</span>.
            </p>
          </div>

          {/*
          <div className="mt-8">
            <Title title="Education" />
            <ul className="list-disc ml-4">
                <li>MSc, Computer Science, EPITA Engineering School, Paris, France
                    <span className="float-right">2019<GoDash className="inline-block"/>2024</span>
                </li>
                <li>Exchange program semester, EWHA University, Seoul, South Korea
                    <span className="float-right">2021</span>
                </li>
            </ul>
          </div>
*/}

          <div className="grid grid-cols-1 divide-neutral-600">
            <div className="mt-8">
              <Title title="Some of my personal projects" />
              <div className="flex flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Project
                  title={projects["git-go"].title}
                  description={projects["git-go"].description}
                  tags={projects["git-go"].tags}
                  link={projects["git-go"].link}
                />
                <Project
                  title={projects.bittorrent.title}
                  description={projects.bittorrent.description}
                  tags={projects.bittorrent.tags}
                  link={projects.bittorrent.link}
                />
              </div>
            </div>

            <div className="mt-8">
              <Title title="University projects" />
              <p>
                The following showcases some of my school projects completed at{" "}
                <span className="font-semibold">EPITA</span>:
              </p>
              <div className="flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-4">
                <Project {...university_projects.tiger} />
                <Project {...university_projects["42sh"]} />
                <Project {...university_projects.libc} />
              </div>
              <div className="flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-4">
                {
                  // <Project {...university_projects.srs} /> }
                }
                <Project {...university_projects.srsviro} />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Title title="Hobbies" />
            <p>
              Beyond my interest for programming and computer science in
              general, I am an avid <span className="font-bold">aviation</span>{" "}
              enthusiast and have been playing the{" "}
              <span className="font-bold">piano</span> since little.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <div className="flex justify-end p-5 sm:p-10">
          <ModeToggle />
        </div>
      </footer>
    </div>
  );
}
