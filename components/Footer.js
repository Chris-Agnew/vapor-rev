import { FaFacebookSquare, FaInstagramSquare, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center w-1/2 bg-black md:pl-5 text-light-blue ">
        <h3 className="mr-3 text-3xl md:text-5xl hover:text-dark-blue">
          <a href="https://www.facebook.com/vaporrevohio" target="_blank">
            <FaFacebookSquare />{" "}
          </a>
        </h3>
        <h3 className="mr-3 text-3xl md:text-5xl hover:text-dark-blue">
          <a href="https://www.instagram.com/vapor_rev/" target="_blank">
            <FaInstagramSquare />{" "}
          </a>{" "}
        </h3>
        <h3 className="text-3xl md:text-5xl hover:text-dark-blue">
          <a
            href="https://open.spotify.com/playlist/1dyH8tgajIVj9KF2wv8U2l"
            target="_blank"
          >
            <FaSpotify />{" "}
          </a>
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 p-5 text-white bg-black ">
        <h1 className="text-lg">
          {" "}
          Vapor Rev LLC <span>&copy; 2021</span>
        </h1>
        <p className="text-center text-s">
          {" "}
          38669 MENTOR AVE UNIT B. WILLOUGHBY, OH, 44094
        </p>
      </div>
    </div>
  );
};

export default Footer;
