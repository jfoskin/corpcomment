import { useState } from "react";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

type CommentProps = {
	feedbackItem: TFeedbackItem;
	handleUpvoteCount: (id: string) => void;
};

export default function Comment({ feedbackItem }: CommentProps) {
	const [open, setOpen] = useState(false);
	const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

	const handleUpvoteCount = (event: React.MouseEvent<HTMLButtonElement>) => {
		setUpvoteCount((prev) => prev + 1);
		event.stopPropagation();
	};

	return (
		<li
			onClick={() => setOpen((prev) => !prev)}
			className={`feedback ${open ? "feedback--expand" : ""}`}
		>
			<button onClick={handleUpvoteCount} className="upvote-button">
				<TriangleUpIcon />
				<span>{upvoteCount}</span>
			</button>
			<div>
				<p>{feedbackItem.badgeLetter}</p>
			</div>
			<div>
				<p>{feedbackItem.company}</p>
				<p>{feedbackItem.text}</p>
			</div>
			<p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
			{/* <p>{`${feedbackItem.daysAgo}d`}</p> */}
		</li>
	);
}
