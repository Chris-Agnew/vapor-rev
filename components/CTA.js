import Image from "next/image";
import { motion } from "framer-motion";

const Cta = ({ text, icon, image, textHover, href }) => {
  return (
    <a className="relative group flex justify-center" href={href}>
      <Image
        className="absolute transition-opacity opacity-80 group-hover:opacity-50 object-center object-cover duration-500 "
        src={image}
        alt="CTA Image"
        layout="intrinsic"
        width={550}
        height={700}
      />

      <section className=" absolute  xl:top-[60%] top-[45%] my-3 ">
        <p className="text-2xl lg:text-4xl font-semibold text-gray-200 flex text-center justify-center items-center uppercase font-poppins ">
          {text}
          {icon}
        </p>
        <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 duration-500 flex justify-center">
          <p className="text-sm w-4/5 md:text-md md:p-2 lxl:text-lg text-center font-raleway text-gray-200 m-3 ">
            {textHover}
          </p>
        </div>
      </section>
    </a>
  );
};

export default Cta;
