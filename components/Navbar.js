import Image from "next/image";
import Link from "next/link";
import {FaFacebookSquare, FaInstagramSquare, FaSpotify} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-black md:flex-row">
      <div className="flex items-center justify-center h-full md:w-1/3 ">
        <Link href="/">
          <a>
            <Image
              src="https://www.chris-agnew.com/logo.webp"
              height={100}
              width={200}
              alt="Vapor Rev Logo"
            
            />
          </a>
        </Link>
    
      </div>
     
      <div className="flex items-center justify-center w-1/3 mt-5 mb-5 text-4xl text-center bg-black space-around text-light-blue">
        <h3 className="mr-3 hover:text-dark-blue"><a href="https://www.facebook.com/vaporrevohio" target="_blank"><FaFacebookSquare /> </a></h3>
        <h3 className="mr-3 hover:text-dark-blue"><a href="https://www.instagram.com/vapor_rev/" target="_blank"><FaInstagramSquare/> </a> </h3>
        <h3 className=" hover:text-dark-blue"><a href="https://open.spotify.com/playlist/1dyH8tgajIVj9KF2wv8U2l" target="_blank"><FaSpotify/> </a></h3>
      </div>
    
      <div className="items-center hidden md:justify-center text-light-blue md:flex lg:justify-start md:w-1/3">
        <Link href="#services">
          <a className="m-3 border-dark-blue hover:border-dark-blue hover:border-b-2">
            Services
          </a>
        </Link>
        <Link href="#about">
          <a className="m-3 border-dark-blue hover:border-dark-blue hover:border-b-2">
            About Us
          </a>
        </Link>
        <Link href="#contact">
          <a className="m-3 border-dark-blue hover:border-dark-blue hover:border-b-2">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
