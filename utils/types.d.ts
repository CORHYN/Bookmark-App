interface FetchAPIOptions {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	authToken?: string;
	body?: Record<string, unknown>;
	next?: NextFetchRequestConfig;
}
