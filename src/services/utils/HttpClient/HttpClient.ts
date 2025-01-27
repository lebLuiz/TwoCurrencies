import delay from '../../../utils/delay';
import APIError from '../../../errors/APIError';
import { HttpClientInterface, MakeRequestOptions, RequestOptions } from './HttpClientInterface';

class HttpClient implements HttpClientInterface {
	baseURL: string;
	constructor(baseUrl: string) {
		this.baseURL = baseUrl;
	}

	get<T>(path: string, options?: RequestOptions): Promise<T> {
		return this.makeRequest(path, {
			method: 'GET',
			headers: options?.headers,
		});
	}
	post<T>(path: string, options?: RequestOptions): Promise<T> {
		return this.makeRequest(path, {
			method: 'POST',
			body: options?.body,
			headers: options?.headers,
		});
	}
	put<T>(path: string, options?: RequestOptions): Promise<T> {
		return this.makeRequest(path, {
			method: 'PUT',
			body: options?.body,
			headers: options?.headers,
		});
	}
	delete<T>(path: string, options?: RequestOptions): Promise<T> {
		return this.makeRequest(path, {
			method: 'DELETE',
			headers: options?.headers,
		});
	}

	async makeRequest<T>(path: string, options: MakeRequestOptions): Promise<T> {
		await delay(500);

		const headers = new Headers();
		if (options.body) {
			headers.append('Content-Type', 'application/json');
		}

		if (options.headers) {
			Object.entries(options.headers).forEach(([name, value]) => {
				headers.append(name, value);
			});
		}

		const response = await fetch(`${this.baseURL}${path}`, {
			method: options.method,
			body: JSON.stringify(options.body),
			headers,
		});

		let responseBody = null;
		const contentType = response.headers.get('Content-Type');
		if (contentType?.includes('application/json')) {
			responseBody = await response.json();
		}

		if (response.ok) return responseBody;

		throw new APIError(response, responseBody);
	}
}

export default HttpClient;
