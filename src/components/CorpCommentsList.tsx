import { useEffect, useState } from "react";

import Comment from "./Comment";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackItem } from "../lib/types";

export default function CorpCommentsList() {
	const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleAddComment = (text: string) => {
		const companyName = text
			.split(" ")
			.find((word) => word.includes("#"))!
			.substring(1);

		const newComment: TFeedbackItem = {
			upvoteCount: 0,
			text: text,
			companyName: companyName,
			badgeLetter: companyName.charAt(0).toUpperCase(),
		};
		setFeedbackItems([...feedbackItems, newComment]);
	};

	useEffect(() => {
		// How I tried to fetch data from the API using async/await
		const fetchFeedbackData = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					"https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
				);

				if (!response.ok) {
					throw new Error();
				}
				const data = await response.json();
				console.log(data);
				setFeedbackItems(data.feedbacks);
				setIsLoading(false);
			} catch (error) {
				setErrorMessage("There was a problem fetching the feedback data.");
			}
			setIsLoading(false);
		};
		fetchFeedbackData();

		// How the course did it using .then()
		// fetch(
		// 	"https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
		// 	.then((response) => {
		// 		if(!response.ok){
		// 			throw new Error("Network response was not ok");}
		// 		response.json()
		// 	})
		// 	.then((data) => {
		// 		console.log(data);
		// 		setFeedbackItems(data.feedbacks);
		// 	})
		// 	.catch(() => {
		// 		setErrorMessage("There was a problem fetching the feedback data.");
		// 	});
	}, []);

	return (
		<ol className="feedback-list">
			{isLoading && <Spinner />}
			{errorMessage && <ErrorMessage message={errorMessage} />}{" "}
			{/* || errorMessage ? <ErrorMessage /> : null */}
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
