import Map from "./Map";
import ContactForm from "./ContactForm";

const Info = () => {
  return (
    <div className="flex flex-col bg-gray-900 justify-evenly lg:flex-row ">
      <div className="flex items-center justify-center lg:w-1/2">
        <Map />
      </div>
      {/* <div className="lg:w-1/3">
        <ContactForm />
      </div> */}
      <div className="flex flex-col items-center justify-center p-10 text-gray-200 lg:w-1/2">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center lg:text-3xl">Hours of Operation:</h1>
          <ul className="text-center lg:text-2xl">
            <li>Monday - Saturday: 11am - 8pm</li>
            <li>Sunday: 12pm - 6pm</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="text-center md:text-2xl">440-571-4341</h2>
          <h3 className="pt-2 text-center lg:text-2xl">
            38669 MENTOR AVE UNIT B. WILLOUGHBY, OH, 44094
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Info;
