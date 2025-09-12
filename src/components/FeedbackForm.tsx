import { useState } from "react";
import { MAXCHAR } from "../lib/constants";

import Button from "./Button";
import Count from "./Count";

export default function FeedbackForm() {
	const [text, setText] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = event.target.value;

		if (newText.length > MAXCHAR) {
			return;
		}

		setText(newText);
	};
	return (
		<form className="form">
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
