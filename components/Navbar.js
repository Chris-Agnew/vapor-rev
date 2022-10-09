import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaSpotify } from "react-icons/fa";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-center w-full h-full p-5 bg-black md:flex-row">
      <div className="flex flex-col items-center justify-center h-full md:w-1/3 ">
        <Link href="/">
          <a>
            <img
              src="./images/vapor-rev-logo.webp"
              alt="Vapor Rev Logo"
              className="lg:w-72"
            />
          </a>
        </Link>
        <div className="m-4 text-xs text-center text-gray-200 w-30 font-poppins">
          <p>38669 MENTOR AVE UNIT B. WILLOUGHBY, OH</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-1/2 mt-5 mb-5 text-4xl text-center bg-black space-around text-light-blue">
        <ul className="flex ">
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
    </nav>
  );
};

export default Navbar;
