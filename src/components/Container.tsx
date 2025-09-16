import Header from "./Header";
import CorpCommentsList from "./CorpCommentsList";
import { TFeedbackItem } from "../lib/types";

type ContainerProps = {
	feedbackItems: TFeedbackItem[];
	isLoading: boolean;
	errorMessage: string;
};

export default function Container({
	feedbackItems,
	isLoading,
	errorMessage,
}: ContainerProps) {
	return (
		<main className="container">
			<Header />
			<CorpCommentsList
				feedbackItems={feedbackItems}
				isLoading={isLoading}
				errorMessage={errorMessage}
			/>
		</main>
	);
}
