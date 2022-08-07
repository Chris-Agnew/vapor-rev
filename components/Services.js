import CTA from "../components/CTA";
import Vaper from "../public/images/vaper.jpg";
import Square from "../public/images/square.jpg";
import Store from "../public/images/store.jpg";
import services from "../data/data";

const Services = () => {
  console.log(services);
  return (
    <section
      id="services"
      className="flex flex-col justify-center md:flex-row z-50 text-gray-200"
    >
      {services.map((service) => (
        <CTA
          key={service.id}
          text={service.title}
          textHover={service.text}
          image={service.image}
        />
      ))}
    </section>
  );
};

export default Services;
