type HashtagItemProps = {
	company: string;
	onSelectCompany: (comapny: string) => void;
};

export default function HashtagItem({
	onSelectCompany,
	company,
}: HashtagItemProps) {
	return (
		<li key={company}>
			<button onClick={() => onSelectCompany(company)}>#{company}</button>
		</li>
	);
}
