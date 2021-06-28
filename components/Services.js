const Services = () => {
  return (
    <div id="services" className="flex flex-col h-full md:flex-row">
      <div className="flex flex-col items-center justify-center h-full p-5 text-white bg-black md:p-20 md:w-1/3">
        <h1 className="text-2xl text-left">Services:</h1>
        <hr />
        <ul className="text-left list-disc ">
          <li>Starter Kits</li>
          <li>Coils</li>
          <li>Top Shelf E-Liquid</li>
          <li>Accessories</li>
          <li>CBD</li>
          <li>RDAs</li>
          <li>Batteries</li>
        </ul>
      </div>
      <div id="about" className="flex flex-col justify-center md:w-1/3 ">
        <h1 className="pt-3 m-2 text-2xl text-center"> About Vapor Rev</h1>
        <p className="m-5 text-sm ">
          Welcome to VAPOR REV! We are your one stop shop in Willoughby, Ohio
          for every thing electronic cigarettes! We strive for perfection at
          bringing you the best customer service in town. With over 10 years
          experience, our passion is to pass along every bit of knowledge we
          have to offer. Whether you are a veteran vaper or just starting out,
          we have just what you are looking for!
        </p>
      </div>
      <div className="flex flex-col justify-center text-white bg-black md:w-1/3">
        <h1 className="p-3 mt-2 text-2xl text-center">Our Vision</h1>
        <p className="pt-3 m-5 text-sm">
          We are continuously evolving with the market to provide our customers
          with the latest and greatest products available. Our standard for only
          the highest quality is a never-ending process that we take pride in.
          Featuring name brands like Joyetech, Sigelei, Innokin, Aspire, Lotus,
          Kangertech, SMOK and many more! Your journey for the perfect vape ends
          here!
        </p>
      </div>
    </div>
  );
};

export default Services;
