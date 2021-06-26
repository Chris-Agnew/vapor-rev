import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
   <div className="flex justify-center w-screen h-full bg-black space-between">
   <div className="md:flex md:justify-center md:align-center">
      <Link href='/'>
      <a><Image
        src="https://www.chris-agnew.com/logo.webp"
        height={150}
        width={200}
        alt="Vapor Rev Logo"
      />
      </a>
      </Link>
    </div>
    <div className='justify-center hidden m-12 text-light-blue md:flex align-center md:w-full md:justify-end '>
      <Link href='#Services'>
      <a className='m-3 border-blue-200 hover:text-blue-200 hover:border-b-2'>Services</a>
      </Link>
      <Link href='#about'>
      <a className='m-3 border-blue-200 hover:text-blue-200 hover:border-b-2'>About Us</a>         
      </Link>
      <Link href='/contact'>
      <a className='m-3 border-blue-200 hover:text-blue-200 hover:border-b-2'>Contact</a>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
