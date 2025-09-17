import Comment from "./Comment";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { TFeedbackItem } from "../../lib/types";

type CorpCommentsListProps = {
	feedbackItems: TFeedbackItem[];
	isLoading: boolean;
	errorMessage: string;
};

export default function CorpCommentsList({
	feedbackItems,
	isLoading,
	errorMessage,
}: CorpCommentsListProps) {
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
