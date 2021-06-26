import Image from "next/image";
import Background from "../public/images/Speedline-100s-1720px.svg";
const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="z-0 ">
          <Image
            src={Background}
            height={300}
            width={300}
            layout="responsive"
          />
        </div>

        <div className="absolute z-50 w-screen h-full top-1/3 left-1/4 z-100 md:h-1/2 md:w-1/2 md:flex md:flex-col md:justify-center align-center md:mx-auto">
          <div>
            <Image
              src="https://www.chris-agnew.com/nicotine.jpeg"
              layout="responsive"
              height={150}
              width={300}
            />
            <Image
              className="z-10 "
              src="https://www.chris-agnew.com/vape-shop.jpg"
              height={285}
              width={300}
              layout="responsive"
              alt="Vapor Rev Willoughby Ohio Shop"
            />
          </div>
          <div className="w-1/2 bg-white h-1/2">
            <h1 className="z-10 mt-5 text-4xl text-center text-black ">
              Vapor Rev is a vape shop in Willoughby.
            </h1>
            <p className="z-10 text-center text-black ">
              We are open and have returned to our normal scheduled store hours.
              We are still offering curbside pickup as safer, more convenient
              option. If you would like to place a pickup order, please fill out
              the forum below or call us at: 440.571.4341. Thank you for your
              continued support and stay safe!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
