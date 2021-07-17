import reviews from '../reviewInfo'

const Review = () => {
	return (
		reviews.map((review) => 
	<div key={review.id} className="flex flex-col items-center justify-center w-3/4 p-2 m-2 bg-gray-200 border-gray-300 rounded-md md:w-1/3 ">
		<h3 className="p-2 text-sm">{review.starRating} Stars</h3>
		<h1 className="p-2 text-lg">{review.name}</h1>
		<p className="p-2 text-xs">{review.message}</p>
	</div>
	))
	

}	

export default Review;
