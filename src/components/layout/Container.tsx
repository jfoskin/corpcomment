import Header from "./Header";
import CorpCommentsList from "../../components/feedback/CorpCommentsList";

export default function Container() {
	return (
		<main className="container">
			<Header />
			<CorpCommentsList />
		</main>
	);
}
