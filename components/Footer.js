import { FaFacebookSquare, FaInstagramSquare, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex ">
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
      <div className="flex flex-col items-center justify-center w-1/2 p-10 text-gray-200 bg-black ">
        <h1 className="text-lg text-center">Vapor Rev LLC &copy; 2021</h1>
        <h2 className="text-xs text-center">Vape shop in Willoughby, Ohio</h2>
      </div>
    </div>
  );
};

export default Footer;
