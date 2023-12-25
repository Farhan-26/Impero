import axios from "axios";
import ENV from "../env/env.config";

const BASE_API_URL = ENV.BASE_API_URL;

export class ApiService {
	async callPostApi(endPoints: string, data: any, headers: any = {}) {
		try {
			const URL = BASE_API_URL + endPoints;
			headers = {
				...headers,
				"Content-Type": "application/json",
			};
			const response = await axios.post(URL, data, { headers: headers });
			return response.data;
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async callGetApi(endPoints: string, headers: any = {}) {
		try {
			const URL = BASE_API_URL + endPoints;
			headers = {
				...headers,
				"Content-Type": "application/json",
			};

			const response = await axios.get(URL, { headers: headers });
			return response.data;
		} catch (error: any) {
			console.log("Error:", error.response.status);
			console.log("error: ", error);
			throw new Error(error);
		}
	}
}

export default new ApiService();
