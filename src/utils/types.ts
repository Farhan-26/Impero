export type postDataType = {
	CategoryId: number;
	PageIndex: number;
};

export type subCategoryData = {
	Id: number;
	Name: string;
	Product: {
		Name: string;
		PriceCode: string;
		ImageName: string;
		Id: number;
	}[];
};
