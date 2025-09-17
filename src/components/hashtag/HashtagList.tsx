import HashtagItem from "./HashtagItem";

type HashtagListProps = {
	companyList: string[];
};

export default function HashtagList({ companyList }: HashtagListProps) {
	return (
		<ul className="hashtags">
			{companyList.map((company) => {
				return <HashtagItem company={company} />;
			})}
		</ul>
	);
}
