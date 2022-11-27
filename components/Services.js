import CTA from "../components/CTA";
import services from "../data/data";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col justify-center w z-50 md:flex-row text-gray-200  items-center w-full "
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
