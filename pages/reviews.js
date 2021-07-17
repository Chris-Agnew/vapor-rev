import Review from "../components/Review";

const reviews = () => {
  //   console.log(data);
  return (
    <div className="flex flex-col items-center justify-center text-center bg-gray-800 ">
		<h2 className="p-3 text-center text-gray-200">See Vapor Rev Google Reviews below </h2>      
    <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
	<Review />
		</div> 
	</div>
  );
};

export default reviews;
