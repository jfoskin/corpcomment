import { TriangleUpIcon } from "@radix-ui/react-icons";

type CommentProps = {
	upvoteCount?: number;
};

export default function Comment({ feedbackItem }) {
	return (
		<li className="feedback">
			<button>
				<TriangleUpIcon />
				<span>{feedbackItem.upvoteCount}</span>
			</button>
			<div>
				<p>{feedbackItem.badgeLetter}</p>
			</div>
			<div>
				<p>{feedbackItem.companyName}</p>
				<p>{feedbackItem.text}</p>
			</div>
			<p>{feedbackItem.daysAgo}</p>
		</li>
	);
}
