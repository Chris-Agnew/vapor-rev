import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
   <div className="flex justify-center bg-black space-between">
   <div className="md:flex md:justify-center md:align-center">
      <Image
        src="https://www.chris-agnew.com/logo.webp"
        height={150}
        width={200}
        alt="Vapor Rev Logo"
      />
    </div>
    <div className='justify-center hidden m-12 md:flex text-primary align-center md:w-full md:justify-end '>
      <Link href='#Services'>
      <a className='m-3 hover:text-white hover:border-b-2'>Services</a>
      </Link>
      <Link href='#about'>
      <a className='m-3 hover:text-white hover:border-b-2'>About Us</a>         
      </Link>
      <Link href='/contact'>
      <a className='m-3 hover:text-white hover:border-b-2'>Contact</a>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
