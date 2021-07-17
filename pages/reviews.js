import Review from "../components/Review";

const reviews = () => {
  //   console.log(data);
  return (
    <div className="flex flex-col items-center justify-center text-center bg-gray-800 md:flex-row">
		<h2 className="text-center text-gray-200">See Vapor Rev Reviews from Google Reviews below</h2>    
      <Review />
    </div>
	
  );
};

export default reviews;
