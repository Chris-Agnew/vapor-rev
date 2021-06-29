import Map from "./Map";
import ContactForm from "./ContactForm";

const Info = () => {
  return (
    <div className="flex flex-col bg-gray-900 justify-evenly lg:flex-row ">
      <div className="flex items-center justify-center lg:w-1/3">
        <Map />
      </div>
      <div className="lg:w-1/3">
        <ContactForm />
      </div>
      <div className="flex items-center justify-center text-gray-200 lg:w-1/3">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center">Hours of Operation:</h1>
          <ul className="text-center">
            <li>Monday - Friday: 11am - 8pm</li>
            <li>Saturday: 11am - 9pm</li>
            <li>Sunday: 12pm - 4pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
