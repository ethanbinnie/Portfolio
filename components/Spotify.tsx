import React from 'react'
import { Content, ContentType } from './Main';

function Spotify({
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
            src="spotifySS.png"
            className="rounded-lg h-[194px] w-[322px] xl:blur-md"
          />
          <button
            onClick={() => handleContentChange(content.title)}
            className="hidden xl:flex absolute text-lg text-white mt-[72.5px] py-2 px-5 rounded-3xl
   bg-blue-400 border-2 border-white hover:bg-blue-500"
          >
            Spotify
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
                <li className="ml-4 mb-1">Aimed to replicate the visual design and layout of Spotify.</li>
                <li className="ml-4 mb-1">Focused on creating a frontend interface closely resembling the original application.</li>
                <li className="ml-4 mb-1">Provided hands-on experience in mimicking real-world application UI's.</li>
                <li className="ml-4 mb-1">Applied principles specific to Spotify to achieve an authentic replication.</li>
                <li className="ml-4">Enhanced skills in <br className="hidden md:inline"></br> creating <br className="md:hidden"></br> visually 
                <br className="hidden md:inline"></br> appealing <br className="md:hidden"></br>web designs.</li>
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
  )
}

export default Spotify