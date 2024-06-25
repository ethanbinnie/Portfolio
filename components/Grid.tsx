function Grid() {
  return (
    <div
      className="grid grid-cols2 md:grid-cols-3 xl:grid-cols-3 gap-8 mt-10 
    h-[420px] md:h-[288px] xl:h-[288px] w-[300px] md:w-[554px] xl:w-[454px]"
    >
      <div
        className="flex justify-center items-center col-span-2 shadow-lg rounded-lg
          h-32 bg-white"
      >
        <a href="https://github.com/ethanbinnie" className="w-28">
          <img src="/GitHub.png" />
        </a>
      </div>
      <div
        className="flex justify-center items-center col-span-1 shadow-lg rounded-lg
          h-32 w-[134px] md:w-auto xl:w-auto bg-white"
      >
        <div className="flex justify-center items-center">
          <img src="logoname.png" className="w-28" />
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center col-span-1 shadow-lg rounded-lg 
          h-32 w-[134px] md:w-auto xl:w-auto bg-white"
      >
        <img src="/logo.png" alt="logo" className="h-12 mt-2" />
        <a
          href="https://www.dropbox.com/scl/fi/gcgfsezbgih88z16ab72k/Ethan-Binnie.pdf?rlkey=3qs1edevhf19xu4xobqa5yr1f&st=q6xuav7y&dl=0"
          target="_blank"
          className="text-sm text-white font-light mt-4 py-1 px-3 rounded-2xl
             bg-gray-800 transition-all hover:bg-gray-700"
        >
          Resume
        </a>
      </div>
      <div
        className="flex justify-center items-center col-span-2 shadow-lg rounded-lg
          h-32 bg-white"
      >
        <a
          href="https://www.linkedin.com/in/ethan-binnie-900719220/"
          className="flex justify-center"
        >
          <img src="/Linkedin.webp" className="w-20" />
        </a>
      </div>
    </div>
  );
}

export default Grid;
