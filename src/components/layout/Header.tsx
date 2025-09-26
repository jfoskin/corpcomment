import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import Logo from "../Logo";
import PageHeader from "../PageHeader";
import Pattern from "../Pattern";
import FeedbackForm from "../feedback/FeedbackForm";

export default function Header() {
	const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);
	return (
		<header>
			<Pattern />
			<Logo />
			<PageHeader />
			<FeedbackForm onAddComment={addItemToList} />
		</header>
	);
}
