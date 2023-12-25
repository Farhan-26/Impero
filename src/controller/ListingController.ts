import ApiService from "../service/ApiService";
import { END_POINTS } from "../utils/ApiEndpoints";
import { postDataType } from "../utils/types";

class ListingController {
	constructor() {}

	async fetchDashboardData(data: postDataType) {
		return await ApiService.callPostApi(END_POINTS.DASHBOARD, data);
	}

	async fetchProductListingData(data: postDataType) {
		return await ApiService.callPostApi(END_POINTS.PRODUCT_LIST, data);
	}
}

export default new ListingController();
