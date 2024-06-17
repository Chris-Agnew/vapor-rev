import { FaFacebookSquare, FaInstagramSquare, FaSpotify } from "react-icons/fa";
import Map from "./Map";

const Info = () => {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col bg-gray-900 justify-evenly lg:flex-row font-poppins "
      >
        <div className="flex items-center justify-center lg:w-1/2">
          <Map />
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-gray-200 lg:w-1/2">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-center lg:text-3xl">Hours of Operation:</h2>
            <ul className="text-center lg:text-2xl">
              <li>Monday - Saturday: 10am - 8pm</li>
              <li>Sunday: 11am - 7pm</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="text-center lg:text-2xl">440-571-4341</h2>
            <h3 className="pt-2 text-center lg:text-2xl">
              38669 MENTOR AVE UNIT B. WILLOUGHBY, OH, 44094
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
