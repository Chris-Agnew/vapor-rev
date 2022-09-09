import CTA from "../components/CTA";
import services from "../data/data";

const Services = () => {
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
