import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
   <div className="flex bg-black space-between">
   <div>
      <Image
        src="https://www.chris-agnew.com/logo.webp"
        height={150}
        width={200}
        alt="Vapor Rev Logo"
      />
    </div>
    <div className='flex m-12 text-blue-700 space-between'>
      <Link href='#Services'>
      <a className='pl-2'>Services</a>
      </Link>
      <Link href='#about'>
      <a className='pl-2'>About Us</a>         
      </Link>
      <Link href='/contact'>
      <a className='pl-2'>Contact</a>
      </Link>
    </div>
    </div>
  );
};

export default Navbar;
