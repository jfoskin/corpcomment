import Logo from "../Logo";
import PageHeader from "../PageHeader";
import Pattern from "../Pattern";
import FeedbackForm from "../feedback/FeedbackForm";

type THeaderProps = {
	handleAddComment: (text: string) => void;
};

export default function Header({ handleAddComment }: THeaderProps) {
	return (
		<header>
			<Pattern />
			<Logo />
			<PageHeader />
			<FeedbackForm onAddComment={handleAddComment} />
		</header>
	);
}
