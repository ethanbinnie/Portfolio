"use client";

import Aboutme from "./Aboutme";
import Booking from "./Booking";
import Grid from "./Grid";
import Display from "./Display";
import Portfolio from "./Portfolio";
import Spotify from "./Spotify";
import Walmart from "./Walmart";
import Wordle from "./Wordle";
import Youtube from "./Youtube";
import { useEffect, useState } from "react";

export type ContentType =
  | "Booking.com"
  | "Wordle"
  | "Walmart"
  | "Spotify"
  | "Portfolio"
  | "YouTube";

export type Content = {
  title: ContentType;
  techStack: string[];
  description: string;
  image: string;
  date: string;
};

const allContent: { [key: string]: Content } = {
  "Booking.com": {
    title: "Booking.com",
    techStack: ["Next.js", "Oxylabs", "Tailwind", "Javascript"],
    description:
      "Building Booking.com I gained valuable insights into creating a seamless experience for users. This clone efficiently connects users with diverse accommodations worldwide through the use of Oxylabs Web Scraper API. This project taught me the importance of intuitive design and seamless intergration, ensuring a user-friendly experience.",
    image: "bookingSS.png",
    date: "Feb 2024",
  },
  Wordle: {
    title: "Wordle",
    techStack: ["Javascript", "Html", "Css", "React"],
    description:
      "This build replicates the simplicity of the popular game Wordle. Using fundamental JavaScript and HTML/CSS, the game features a minimalistic design, intuitive user interface and responsive gameplay. This build taught me foundational skills in Javascript for handling user interactions. I also gained experience in game logic implementation, such as generating random words and validating user inputs.",
    image: "wordleSS.png",
    date: "Nov 2023",
  },
  Walmart: {
    title: "Walmart",
    techStack: ["Next.js", "Oxylabs", "Tailwind", "Javascript"],
    description:
      "Creating a Walmart clone taught me how to build a scalable e-commerce platform. With a focus on intuitive navigation, easy search functionalities, and streamlined checkout processes, it aims to deliver a user-friendly interface that prioritizes efficiency and convenience. Through building this clone I gained insights into the importance of UX design and it enhanced my proficiency in frontend development.",
    image: "walmartSS.png",
    date: "Apr 2024",
  },
  Spotify: {
    title: "Spotify",
    techStack: ["Html", "Css", "React"],
    description:
      "This project aimed to replicate the visual design and layout of Spotify, focusing on creating a frontend interface that closely resembles the original application. This endeavor will provide hands-on experience in mimicking real-world applications' user interfaces, enhancing my ability to create visually appealing web designs.",
    image: "spotifySS.png",
    date: "Sep 2023",
  },
  Portfolio: {
    title: "Portfolio",
    techStack: ["Next.js", "React", "Tailwind", "Javascript"],
    description:
      "Utilising Next.js, Html, Tailwind, and JavaScript, this Portfolio features a clean and modern design that highlights my work, including interactive elements and responsive layouts. Building this Portfolio enhanced my understanding of responsive design principles, ensuring the layout adapts well across different screen sizes.",
    image: "portfolioSS.png",
    date: "Jun 2024",
  },
  YouTube: {
    title: "YouTube",
    techStack: ["Html", "Css", "React"],
    description:
      "This project focuses on creating a static, frontend-only replica of YouTube to enhance my technical skills. Using HTML and CSS, I aimed to closely mirror the visual design and layout of YouTube's homepage and video player interface. My goal was to strengthen my proficiency in building intuitive and aesthetically pleasing web designs that resonate with users.",
    image: "youtubeSS.png",
    date: "Jul 2023",
  },
};

export default function Main() {
  const [content, setContent] = useState<Content>();
  const handleContentChange = (contentType: ContentType) => {
    setContent(allContent[contentType]);
  };

  return (
    <main
      className="flex flex-col items-center font-sans rounded-xl w-[400px] md:w-[700px]
      xl:w-[1200px] bg-sky-50 transition-all"
    >
      <div className="flex xl:flex-row flex-col items-center xl:space-x-16">
        <Aboutme />
        <Grid />
      </div>

      <div
        className="flex flex-col justify-center items-center h-20 mt-20 md:mt-14 xl:mt-14
      mb-5 md:mb-0 xl:mb-0"
      >
        <h1 className="text-xl font-bold">My Recent Work</h1>
        <h3 className="text-md mt-5">
          Here are some projects I&apos;ve been working on...
        </h3>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-5 md:p-6 xl:p-10 mt-10 mb-8 
      w-[350px] md:w-[627px] xl:w-[1136px] h-auto gap-5 md:gap-10 xl:gap-x-14 rounded-xl
      bg-gray-600"
      >
        <div className="col-span-1">
          <Booking
            handleContentChange={handleContentChange}
            content={allContent["Booking.com"]}
          />
        </div>
        <div className="col-span-1">
          <Wordle
            handleContentChange={handleContentChange}
            content={allContent["Wordle"]}
          />
        </div>
        <div className="col-span-1">
          <Walmart
            handleContentChange={handleContentChange}
            content={allContent["Walmart"]}
          />
        </div>
        <div className="hidden xl:flex justify-center col-span-3">
          <Display content={content} />
        </div>
        <div className="col-span-1">
          <Spotify
            handleContentChange={handleContentChange}
            content={allContent["Spotify"]}
          />
        </div>
        <div className="col-span-1">
          <Portfolio
            handleContentChange={handleContentChange}
            content={allContent["Portfolio"]}
          />
        </div>
        <div className="col-span-1">
          <Youtube
            handleContentChange={handleContentChange}
            content={allContent["YouTube"]}
          />
        </div>
      </div>
    </main>
  );
}
