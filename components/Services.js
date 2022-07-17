import CTA from "../components/CTA";
import Vaper from "../public/images/vaper.jpg";
import Square from "../public/images/square.jpg";
import Store from "../public/images/store.jpg";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col justify-center md:flex-row z-50 text-gray-200"
    >
      <CTA
        text="About VAPOR REV"
        textHover=" We strive for perfection at bringing you the best customer service in town. With over 10 years experience, our passion is to pass along every bit of knowledge we have to offer. Whether you are a veteran vaper or just starting out, we have just what you are looking for!
If you have any questions or comments, please don't hesitate to contact us."
        image={Vaper}
      />
      <CTA
        text="Our Vision
"
        textHover="We are continuously evolving with the market to provide our customers with the latest and greatest products available. Our standard for only the highest quality is a never-ending process that we take pride in. Your journey for the perfect vape ends here!"
        image={Square}
      />
      <CTA
        text="Our Products
"
        textHover="We provide disposables, starter kits, coils, top shelf E-Liquid, pod systems and more..."
        image={Store}
      />
    </div>
  );
};

export default Services;
