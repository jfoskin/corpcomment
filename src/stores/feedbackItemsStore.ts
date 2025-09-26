import { create } from 'zustand';



export const useFeedbackItemsStore = create((set,get)=>({
    feedbackItems: [],
    isLoading: false,
    errorMessage: '',
    selectedCompany: '',
    getCompanyList: ()=>{
        return get().feedbackItems
				.map((item) => item.company)
				.filter((company, index, array) => array.indexOf(company) === index)
    },
    getFilteredFeedbackItems: ()=>{
        const state = get();
        
        return state.selectedCompany
				? state.feedbackItems.filter((item) => item.company === selectedCompany)
				: state.feedbackItems,
    },
    addItemToList: async (text: string) => {
            const companyName = text
                .split(" ")
                .find((word) => word.includes("#"))!
                .substring(1);
    
            const newComment: TFeedbackItem = {
                id: new Date().getTime(),
                upvoteCount: 0,
                text: text,
                company: companyName,
                badgeLetter: companyName.charAt(0).toUpperCase(),
                daysAgo: 0,
            };
            // setFeedbackItems([...feedbackItems, newComment]);
            //state is also referenced as prev 
            set((state) => ({ feedbackItems: [...state.feedbackItems, newComment] }))
    
            await fetch(
                "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
                {
                    method: "POST",
                    body: JSON.stringify(newComment),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
    },
    selectCompany: (company: string) => {
		// setSelectedCompany(company);
        set(() => ({selectedCompany: company}))

	},
    fetchFeedbackItems: async () => {
			try {
				// setIsLoading(true);
                set(()=> ({isLoading: true}))
				const response = await fetch(
					"https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
				);

				if (!response.ok) {
					throw new Error();
				}
				const data = await response.json();
				console.log(data);
				// setFeedbackItems(data.feedbacks);
                set(()=> ({feedbackItems: data.feedbacks}))
				
			} catch (error) {
				// setErrorMessage("There was a problem fetching the feedback data.");
                set(()=>({errorMessage: "There was a problem fetching the feedback data."}))
			}
			// setIsLoading(false);
            set(()=> ({isLoading: false}))
	},
}))