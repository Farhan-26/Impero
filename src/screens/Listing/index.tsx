import { useEffect, useState } from "react";
import {
	FlatList,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CardFlatList from "../../components/CardFlatList";
import Loader from "../../components/Loader";

import ListingController from "../../controller/ListingController";

import { subCategoryData } from "../../utils/types";

const Listing = () => {
	const insets = useSafeAreaInsets();
	const [data, setData] = useState<any[]>([]);
	const [selectedCat, setSelectedCat] = useState<number>();
	const [selectedCatsData, setSelectedCatsData] = useState<subCategoryData[]>(
		[]
	);
	const [page, setPage] = useState(1);

	const getSubCats = async (paramPage = null) => {
		try {
			const payload = {
				CategoryId: selectedCat,
				PageIndex: paramPage ? paramPage : page,
			};
			const response = await ListingController.fetchDashboardData(payload);

			if (response?.Result && response?.Result?.Category) {
				const data = response?.Result?.Category;
				const subCategoryData = [];

				data.forEach((elem: any) => {
					if (elem.SubCategories && elem.SubCategories.length > 0) {
						subCategoryData.push(...elem.SubCategories);
					}
				});

				if (subCategoryData.length > 0) {
					if (paramPage || payload.PageIndex == 1) {
						setSelectedCatsData([...subCategoryData]);
					} else {
						setSelectedCatsData((prevData) => [
							...prevData,
							...subCategoryData,
						]);
					}
				}
			}
		} catch (error) {
			console.log("error in fetching listing data :>> ", error);
		}
	};

	const fetchInitialData = async () => {
		try {
			const data = {
				CategoryId: 0,
				DeviceManufacturer: "Google",
				DeviceModel: "Android SDK built for x86",
				DeviceToken: " ",
				PageIndex: 1,
			};
			const response = await ListingController.fetchDashboardData(data);
			if (response?.Result && response?.Result?.Category) {
				console.log("response :>> ", response);
				const data = response?.Result?.Category;
				setData(data);
				setSelectedCat(data[0].Id);
			}
		} catch (error) {
			console.log("error in fetching initial data :>> ", error);
		}
	};

	useEffect(() => {
		fetchInitialData();
	}, []);

	useEffect(() => {
		getSubCats(1);
	}, [selectedCat]);

	useEffect(() => {
		if (selectedCat) {
			getSubCats();
		}
	}, [page]);

	return (
		<SafeAreaView style={styles.flex1}>
			<View
				style={[
					styles.container,
					{
						paddingTop: insets.top + 25,
					},
				]}
			>
				<ScrollView horizontal>
					<View style={styles.headerContainer}>
						{data?.map((item) => {
							return (
								<Pressable
									onPress={() => {
										setSelectedCatsData([]);
										setSelectedCat(item.Id);
										setPage(1);
									}}
									key={item.Id}
								>
									<Text
										style={[
											styles.categoryTxt,
											{
												color: item.Id == selectedCat ? "white" : "gray",
												fontSize: item.Id == selectedCat ? 20 : 15,
											},
										]}
									>
										{item?.Name}
									</Text>
								</Pressable>
							);
						})}
					</View>
				</ScrollView>
			</View>

			{selectedCatsData.length == 0 ? (
				<Loader />
			) : (
				<FlatList
					data={selectedCatsData}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						padding: 15,
					}}
					onEndReached={() => {
						setPage((prevPage) => prevPage + 1);
					}}
					renderItem={({ item }) => {
						return (
							<View key={item.Id} style={styles.py15}>
								<Text style={styles.subCategoryTxt}>{item?.Name}</Text>
								<CardFlatList item={item} />
							</View>
						);
					}}
				/>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	flex1: {
		flex: 1,
	},
	container: {
		backgroundColor: "black",
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	categoryTxt: {
		paddingVertical: 10,
		paddingHorizontal: 15,
	},
	subCategoryTxt: {
		color: "black",
		fontSize: 16,
		fontWeight: "600",
	},
	py15: {
		paddingVertical: 15,
	},
});

export default Listing;
