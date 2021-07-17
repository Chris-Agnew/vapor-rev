const Services = () => {
  return (
    <div id="services" className="flex flex-col h-full md:flex-row">
      <div className="flex flex-col items-center justify-center p-5 text-gray-200 bg-black md:p-20 lg:w-1/3">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-5 text-2xl">Services:</h2>
          <ul className="text-lg list-disc ">
            <li>Starter Kits</li>
            <li>Coils</li>
            <li>Top Shelf E-Liquid</li>
            <li>Disposables</li>
            <li>Pod Systems</li>
            <li>and more...</li>
          </ul>
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col justify-center pt-10 bg-gray-200 lg:w-1/3 "
      >
        <h2 className="text-2xl text-center "> About Vapor Rev</h2>
        <div className="p-5 text-sm ">
          <div className="p-7">
            <div>
              Welcome to Vapor Rev, your one stop shop for all things vaping and
              CBD. We're dedicated to giving you the very best products, with a
              focus on the best customer service, knowledge, and prices. We
              strive for perfection at bringing you the best customer service in
              town. With over 10 years experience, our passion is to pass along
              every bit of knowledge we have to offer. Whether you are a veteran
              vaper or just starting out, we have just what you are looking for!
            </div>

           

            <div className="mt-5">
              We now serve customers all over the Willoughby/Mentor/Eastlake and
              surrounding area. We hope you enjoy our products as much as we
              enjoy offering them to you. If you have any questions or comments,
              please don't hesitate to contact us.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-2 text-gray-200 bg-black lg:w-1/3">
        <h2 className="p-1 mt-2 text-2xl text-center lg:mt-0">Our Vision</h2>
        <p className="p-4 text-sm lg:m-0">
          We are continuously evolving with the market to provide our customers
          with the latest and greatest products available. Our standard for only
          the highest quality is a never-ending process that we take pride in.
          Your journey for the perfect vape ends here!
        </p>
      </div>
    </div>
  );
};

export default Services;
