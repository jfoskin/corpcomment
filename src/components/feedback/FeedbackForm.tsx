import { useState } from "react";
// import { MAXCHAR } from "../../lib/constants";

import Button from "../Button";
import Count from "../Count";

type FeedbackFormProps = {
	onAddComment: (text: string) => void;
};

export default function FeedbackForm({ onAddComment }: FeedbackFormProps) {
	const [text, setText] = useState("");
	const [showValidationIndicator, setShowValidationIndicator] = useState(false);
	const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = event.target.value;

		if (newText.length > 150) {
			return;
		}

		setText(newText);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (text.includes("#") && text.length >= 5) {
			setShowValidationIndicator(true);
			setTimeout(() => setShowValidationIndicator(false), 2000);
		} else {
			setShowInvalidIndicator(true);
			setTimeout(() => setShowInvalidIndicator(false), 2000);
		}

		onAddComment(text);
		setText("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`form ${showValidationIndicator ? "form--valid" : ""} ${
				showInvalidIndicator ? "form--invalid" : ""
			}`}
		>
			<textarea
				id="feedback-textarea"
				placeholder="What's happening?"
				value={text}
				onChange={handleChange}
				spellCheck={false}
			></textarea>
			<label htmlFor="feedback-textarea">
				Enter your feedback here, remeber to add a hashtag!
			</label>
			<div>
				<Count length={text.length} />
				<Button />
			</div>
		</form>
	);
}
