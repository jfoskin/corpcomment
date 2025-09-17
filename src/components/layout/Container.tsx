import Header from "./Header";
import CorpCommentsList from "../../components/feedback/CorpCommentsList";
import { TFeedbackItem } from "../../lib/types";

type ContainerProps = {
	feedbackItems: TFeedbackItem[];
	isLoading: boolean;
	errorMessage: string;
	handleAddComment: (text: string) => void;
};

export default function Container({
	feedbackItems,
	isLoading,
	errorMessage,
	handleAddComment,
}: ContainerProps) {
	return (
		<main className="container">
			<Header handleAddComment={handleAddComment} />
			<CorpCommentsList
				feedbackItems={feedbackItems}
				isLoading={isLoading}
				errorMessage={errorMessage}
			/>
		</main>
	);
}
