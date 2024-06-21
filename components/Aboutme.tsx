import React from "react";

function Aboutme() {
  return (
    <div
      className="flex flex-col md:flex-row xl:flex-row justify-center items-center md:space-x-20 
      xl:space-x-20 space-y-8 md:space-y-0 xl:space-y-0 px-10 rounded-lg shadow-lg mt-10  bg-white
      w-[300px] md:w-[554px] xl:w-[554px] h-[500px] md:h-[288px] xl:h-[288px]"
    >
      <div className="pl-3 md:pl-0 xl:p-0">
        <h1 className="text-2xl">
          Hi,
          <br></br>
          I&apos;m Ethan,
        </h1>
        <p className="text-sm mt-8 tracking-wider">
          I am a Front End Developer living in Auckland, New Zealand. I love
          building interactive UI/UX and have a keen desire to engage in the
          field of Web Development.
        </p>
      </div>
      <img src="profile.jpg" alt="profile" className="w-44 h-44 rounded-lg" />
    </div>
  );
}

export default Aboutme;
