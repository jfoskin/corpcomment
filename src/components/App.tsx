import { useEffect, useState } from "react";

import Footer from "./layout/Footer";
import Container from "./layout/Container";
import HashtagList from "./hashtag/HashtagList";
import { TFeedbackItem } from "../lib/types";

function App() {
	const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const companyList = feedbackItems
		.map((item) => item.company)
		.filter((company, index, array) => array.indexOf(company) === index);

	const handleAddComment = async (text: string) => {
		const companyName = text
			.split(" ")
			.find((word) => word.includes("#"))!
			.substring(1);

		const newComment: TFeedbackItem = {
			upvoteCount: 0,
			text: text,
			company: companyName,
			badgeLetter: companyName.charAt(0).toUpperCase(),
		};
		setFeedbackItems([...feedbackItems, newComment]);

		await fetch(
			"https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
			{
				method: "POST",
				body: JSON.stringify(newComment),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
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
		<div className="app">
			<Footer />
			<Container
				feedbackItems={feedbackItems}
				isLoading={isLoading}
				errorMessage={errorMessage}
				handleAddComment={handleAddComment}
			/>
			<HashtagList companyList={companyList} />
		</div>
	);
}

export default App;
