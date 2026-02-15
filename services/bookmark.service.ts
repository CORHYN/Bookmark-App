import { fetchAPI } from "@/utils/fetch-api";


export async function subscribeNewsletterService(email: string) {
	try {
		const res = await fetchAPI(
			"",
			{
				method: 'POST',
				body: {
					data: {
						email,
					},
				},
			},
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
}
