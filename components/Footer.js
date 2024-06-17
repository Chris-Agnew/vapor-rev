import { FaFacebookSquare, FaInstagramSquare, FaSpotify } from "react-icons/fa";
import NavLink from "./NavLink";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="flex ">
      <div className="flex items-center justify-center w-2/5 pl-5 bg-black md:w-1/2 text-light-blue ">
        <ul className="flex lg:text-4xl">
          <NavLink
            href="https://www.facebook.com/vaporrevohio"
            icon={<FaFacebookSquare />}
          />
          <NavLink
            href="https://www.instagram.com/vapor_rev/"
            icon={<FaInstagramSquare />}
          />
          <NavLink
            href="https://open.spotify.com/playlist/1dyH8tgajIVj9KF2wv8U2l"
            icon={<FaSpotify />}
          />
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center w-3/5 p-5 text-gray-200 bg-black md:w-1/2 ">
        <h2 className="text-center text-md">VAPOR REV Inc &copy; {year}</h2>
      </div>
    </footer>
  );
};

export default Footer;
