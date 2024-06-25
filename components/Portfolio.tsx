import React from "react";
import { Content, ContentType } from "./Main";

function Portfolio({
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
            src="portfolioSS.png"
            className="rounded-lg h-[194px] w-[322px] xl:blur-md"
          />
          <button
            onClick={() => handleContentChange(content.title)}
            className="hidden xl:flex absolute text-lg text-white mt-[72.5px] py-2 px-5 rounded-3xl
   bg-blue-400 border-2 border-white transition-all hover:bg-blue-500"
          >
            This Portfolio
          </button>
        </div>

        <div
            className="flex items-center justify-center absolute inset-0 h-full w-full rounded-xl 
            bg-black/40  text-slate-200 [transform:rotateY(180deg)] 
            [backface-visibility:hidden]"
        >
            <div className="flex justify-center items-center relative md:w-[244px] md:h-[168px]
            w-[284px] h-[140px]">
              <ul className="text-[11px] md:text-[10px] leading-3 text-black rounded-xl list-disc
              p-4 md:px-4 md:py-1.5 bg-white 
              md:w-[244px] md:h-[172px] w-[290px] h-[176px]">
                <li className="ml-4 mb-1">Built using Next.js, HTML, Tailwind, and JavaScript.</li>
                <li className="ml-4 mb-1">Features a clean and modern design to showcase my work effectively.</li>
                <li className="ml-4 mb-1">Utilises responsive layouts to ensure optimal viewing on various devices.</li>
                <li className="ml-4 mb-1">Enhanced understanding of responsive design principles through portfolio development.</li>
                <li className="ml-4">Includes interactive <br className="hidden md:inline"></br>
                elements <br className="md:hidden"></br> to <br className="hidden md:inline"></br>
                engage visitors.</li>
              </ul>
              <h1 className="flex justify-center items-center absolute inset-0 text-white
              text-sm rounded-lg w-20 h-8 mt-[119px] ml-[194px] md:mt-[130px] md:ml-[155px]
              bg-gradient-to-r from-green-400 to-blue-500">
                {content.date}
              </h1>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Portfolio;
