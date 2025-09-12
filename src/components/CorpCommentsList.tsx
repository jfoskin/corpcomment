import Comment from "./Comment";

const feedbackItems = [
	{
		upvote: 2,
		badgeLetter: "B",
		companyName: "ByteGrad",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae suscipit dolor sequi aperiam aliquid error.",
		daysAgo: 9,
	},
	{
		upvote: 7,
		badgeLetter: "S",
		companyName: "starbuck",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae suscipit dolor sequi aperiam aliquid error.",
		daysAgo: 2,
	},
	{
		upvote: 4,
		badgeLetter: "N",
		companyName: "Nickelodeon",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae suscipit dolor sequi aperiam aliquid error.",
		daysAgo: 3,
	},
];

export default function CorpCommentsList() {
	return (
		<ol className="feedback-list">
			{/* // when returning a list you don't always have to open the function with
		{} you can use () instead of needing to write return */}

			{feedbackItems.map((feedbackItem) => (
				<Comment feedbackItem={feedbackItem} key={feedbackItem.companyName} />
			))}

			{/* the only difference in the way the function is written about is the retuen 
			key and Brackets 
			
			{feedbackItems.map((feedbackItem) => {
			 return (
				<Comment feedbackItem={feedbackItem} key={feedbackItem.companyName} />
			)})}

			*/}
		</ol>
	);
}
