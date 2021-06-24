import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-black">
      <Image
        src="https://www.chris-agnew.com/logo.webp"
        height={200}
        width={200}
        alt="Vapor Rev Logo"
      />
    </div>
  );
};

export default Navbar;
