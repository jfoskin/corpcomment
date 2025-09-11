import Logo from "./Logo";
import PageHeader from "./PageHeader";
import Pattern from "./Pattern";
import FeedbackForm from "./FeedbackForm";

export default function Header() {
	return (
		<header>
			<Pattern />
			<Logo />
			<PageHeader />
			<FeedbackForm />
		</header>
	);
}
