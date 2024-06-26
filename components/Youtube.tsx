import React from "react";
import { Content, ContentType } from "./Main";

function Youtube({
  handleContentChange,
  content,
}: {
  handleContentChange: (contentType: ContentType) => void;
  content: Content;
}) {
  return (
    <div
      className="flex justify-center items-center overflow-hidden md:w-[270px] xl:w-[320px]
    h-[192px] rounded-lg relative border-2 border-white bg-white"
    >
      <div className="group h-[194px] w-[322px] [perspective:1000px]">
        <div
          className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500
      [transform-style:preserve-3d]
      group-hover:[transform:rotateY(180deg)] xl:group-hover:[transform:rotateY(0deg)]"
        >
          <div className="flex justify-center">
            <img
              src="youtubeSS.png"
              className="rounded-lg h-[194px] w-[322px] xl:blur-md"
            />
            <button
              onClick={() => handleContentChange(content.title)}
              className="hidden xl:flex absolute text-lg text-white mt-[72.5px] py-2 px-5 rounded-3xl
     bg-blue-400 border-2 border-white transition-all hover:bg-blue-500"
            >
              YouTube
            </button>
          </div>

          <div
            className="flex items-center justify-center absolute inset-0 h-full w-full rounded-xl 
            bg-black/40  text-slate-200 [transform:rotateY(180deg)] 
            [backface-visibility:hidden]"
          >
            <div
              className="flex justify-center items-center relative md:w-[244px] md:h-[168px]
            w-[284px] h-[140px]"
            >
              <ul
                className="text-[11px] md:text-[10px] leading-3 text-black rounded-xl list-disc
              p-4 md:px-4 md:py-1.5 bg-white 
              md:w-[244px] md:h-[172px] w-[290px] h-[176px]"
              >
                <li className="ml-4 mb-1">
                  Created a static, frontend-only replica of YouTube to improve
                  technical skills.
                </li>
                <li className="ml-4 mb-1">
                  Used HTML and CSS to closely mirror YouTube&apos;s home and
                  video interface.
                </li>
                <li className="ml-4 mb-1">
                  Strengthened proficiency in building intuitive and
                  aesthetically pleasing web designs.
                </li>
                <li className="ml-4 mb-1">
                  Aimed for solid replication of visual design and layout.
                </li>
                <li className="ml-4">
                  Focused on recreating a <br></br> simple design that <br></br>{" "}
                  resonates with users.
                </li>
              </ul>
              <h1
                className="flex justify-center items-center absolute inset-0 text-white
              text-sm rounded-lg w-20 h-8 mt-[119px] ml-[194px] md:mt-[130px] md:ml-[155px]
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {content.date}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
