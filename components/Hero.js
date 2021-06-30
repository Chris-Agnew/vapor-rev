import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="relative items-center justify-center w-screen h-full text-center md:w-full md:h-1/2 ">
        <div className="flex items-center justify-center w-full font-bold ">
          <div className="flex items-center justify-center w-full bg-black">
            <p className="p-2 text-sm bg-gray-200 border-8 border-black">
              WARNING: This product contains nicotine. Nicotine is an addictive
              chemical.
            </p>
          </div>
        </div>

        <div className="absolute top-0 z-10 items-center w-screen h-full text-white md:h-full md:w-full md:flex md:flex-col md:justify-center md:mx-auto "></div>
        <div>
          <Image
            src="/images/dark-final.jpg"
            layout="responsive"
            alt="Vapor Rev Willoughby Ohio Shop"
            height={400}
            width={500}
          />
        </div>
        <div className="absolute z-50 flex flex-col items-center justify-center w-3/4 h-full p-6 top-10 left-10 md:left-32 md:p-3">
          <h1 className="z-10 mt-5 mb-4 text-xl text-center text-gray-300 md:text-3xl">
            Vapor Rev is a vape shop in Willoughby.
          </h1>
          <p className="z-10 text-sm text-center text-gray-200 md:text-2xl md:m-5">
            We are open and have returned to our normal scheduled store hours.
            If you would like to place a pickup order, please fill out the form
            below or click the button to call us.
          </p>
          <div className="flex justify-center mb-10 align-center">
            <button
              type="button"
              className="p-3 mt-2 text-sm text-gray-900 rounded-lg bg-light-blue hover:text-gray-200 hover:bg-dark-blue sm:text-base"
            >
              <a href="tel:4405714341">Call us at: 440.571.4341</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
