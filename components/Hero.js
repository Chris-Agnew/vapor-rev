const Hero = () => {
  return (
    <>
      <div className="relative  w-screen text-center md:w-full  ">
        <div className="flex items-center justify-center w-full bg-black">
          <p className=" p-2 text-sm bg-gray-200 border-8 border-black font-poppins font-semibold">
            WARNING: This product contains nicotine. Nicotine is an addictive
            chemical.
          </p>
        </div>

        <div className="relative bg-black ">
          <video
            autoPlay
            loop
            muted
            className="block h-[400px] md:h-[500px]  opacity-80"
          >
            <source src="/images/vape-background.mp4" type="video/mp4" />
          </video>
          <div className="flex justify-center items-center">
            <h1 className="z-10 mt-5 mb-4 text-xl text-center text-gray-300 md:text-3xl font-poppins absolute top-16">
              <span className="uppercase vrev-text md:text-4xl">Vapor Rev</span>{" "}
              is a vape shop in Willoughby.
            </h1>
            <p className="z-10 absolute top-36 w-4/5 text-md  xl:text-3xl text-center text-gray-200 md:text-2xl md:m-2 font-raleway">
              Welcome to VAPOR REV, your one stop shop for all things vaping.
              We're dedicated to giving you the very best products, with a focus
              on the best customer service, knowledge, and prices. If you would
              like to place a pickup order or have any questions, please click
              the button below to call us.
            </p>
            <div className="flex justify-center mb-10 align-center absolute top-[85%] sm:top-64 md:top-96 lg:top-72 xl:top-80 ">
              <a
                href="tel:4405714341"
                className="relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">440.571.4341</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
