import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="relative z-0 w-screen h-full md:w-full md:h-full">
        {/* <div>
          <Image
            src={Background}
            height={300}
            width={300}
            layout="responsive"
          />
        </div> */}

        {/* <div className="absolute top-0 z-10 w-screen h-full md:h-full md:w-full md:flex md:flex-col md:justify-center align-center md:mx-auto">
          <Image
            className="z-10"
            src="https://www.chris-agnew.com/nicotine.jpeg"
            layout="responsive"
            height={150}
            width={300}
          />
        </div> */}
     
          <Image 
          src="https://www.chris-agnew.com/vape-shop-dark.jpg"
          layout="responsive"
          height={400}
          width={500}
          alt="Vapor Rev Willoughby Ohio Shop"
        />
    
        
        <div className="absolute top-0 z-50 flex flex-col justify-center w-3/4 h-full p-6 left-10 md:left-20 md:p-3 align-center">
          <h1 className="z-10 mt-5 mb-4 text-lg text-center text-gray-100 md:text-3xl">
            Vapor Rev is a vape shop in Willoughby.
          </h1>
          <p className="z-10 text-xs text-center text-white ">
            We are open and have returned to our normal scheduled store hours.
            If you would like to place a pickup order, please fill out the form
            below or click the button to call us.
          </p>
          <div className="flex justify-center align-center">
            <button
              type="button"
              className="p-2 mt-5 rounded-lg bg-rose-red hover:bg-blue-700"
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
