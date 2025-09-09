import Logo from "./Logo";

export default function Header() {
	return (
		<header>
			<Logo />
			<h2 style={{ color: "white" }}>
				Give Feedback. <span className="u-bold u-italic">Publicly </span>
			</h2>
			<form>
				<textarea placeholder="What's happening?"></textarea>
				<button>Post</button>
			</form>
		</header>
	);
}
