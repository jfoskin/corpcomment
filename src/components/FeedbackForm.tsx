import Button from "./Button";
import Count from "./Count";

export default function FeedbackForm() {
	return (
		<form className="form">
			<textarea
				id="feedback-textarea"
				placeholder="What's happening?"
			></textarea>
			<label htmlFor="feedback-textarea">
				Enter your feedback here, remeber to add a hashtag!
			</label>
			<div>
				<Count />
				<Button />
			</div>
		</form>
	);
}
