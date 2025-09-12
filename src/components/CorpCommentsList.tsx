import { useEffect, useState } from "react";
import Comment from "./Comment";
import Spinner from "./Spinner";

export default function CorpCommentsList() {
	const [feedbackItems, setFeedbackItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		// How I tried to fetch data from the API using async/await
		const fetchFeedbackData = async () => {
			try {
				const response = await fetch(
					"https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
				);
				const data = await response.json();
				console.log(data);
				setFeedbackItems(data.feedbacks);
				setIsLoading(false);
			} catch (error) {
				console.log("Error fetching feedback data:", error);
			}
		};
		fetchFeedbackData();

		// How the course did it using .then()
		// fetch(
		// 	"https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 		setFeedbackItems(data.feedbacks);
		// 	})
		// 	.catch((error) => {
		// 		console.log("Error fetching feedback data:", error);
		// 	});
	}, []);

	return (
		<ol className="feedback-list">
			{isLoading && <Spinner />}

			{/* // when returning a list you don't always have to open the function with
		{} you can use () instead of needing to write return */}

			{feedbackItems.map((feedbackItem) => (
				<Comment feedbackItem={feedbackItem} key={feedbackItem.id} />
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
