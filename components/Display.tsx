import { Content } from "./Main";

function Display({ content }: { content: Content | undefined }) {
  return (
    <>
      {content && (
        <div className="flex space-x-14">
          <div
            className="flex flex-col justify-center items-center w-[450px] h-[250px]
          rounded-lg border-2 border-white bg-gradient-to-r from-gray-300 to-gray-500"
          >
            <div
              className="grid grid-cols-4 grid-rows-4 relative gap-x-2 w-[360px] h-[200px]
            items-center justify-center"
            >
              {content?.techStack.map((tech, key) => {
                return (
                  <h1
                    key={key}
                    className="flex justify-center items-center text-sm font-bold col-span-1
                  rounded-xl px-2 mb-7 text-white bg-gradient-to-r from-red-400 to-yellow-500"
                  >
                    {tech}
                  </h1>
                );
              })}
              <p className="text-xs col-span-4 row-span-2 rounded-xl p-2 bg-white">
                {content.description}
              </p>
              <h1
                className="flex justify-center items-center absolute inset-0 text-white
              text-sm rounded-lg w-20 h-8 mt-[180px] ml-[310px] 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {content.date}
              </h1>
            </div>
          </div>
          <div
            className="flex relative justify-center w-[450px] h-[250px] rounded-lg
          overflow-hidden border-2 border-white bg-white"
          >
            <img
              src={content?.image}
              className="absolute inset-0 object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Display;
