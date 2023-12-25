import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { subCategoryData } from "../utils/types";
import { width } from "../globalStyles";

const CardFlatList = ({ item }: { item: subCategoryData }) => {
	return (
		<FlatList
			showsHorizontalScrollIndicator={false}
			ListEmptyComponent={() => {
				return (
					<View>
						<Text>No data found</Text>
					</View>
				);
			}}
			data={item?.Product ?? []}
			horizontal
			renderItem={({ item: { Name, ImageName, PriceCode } }) => {
				return (
					<View style={{ marginHorizontal: 10 }}>
						<View>
							<Image
								source={{ uri: ImageName }}
								resizeMode="cover"
								style={styles.img}
							/>
							<Text style={styles.priceTxt}>{PriceCode}</Text>
						</View>
						<Text numberOfLines={1} style={styles.productNameTxt}>
							{Name}
						</Text>
					</View>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	img: {
		width: width / 4,
		aspectRatio: 1,
		borderRadius: 10,
		marginVertical: 10,
	},
	priceTxt: {
		position: "absolute",
		top: 15,
		left: 10,
		backgroundColor: "skyblue",
		paddingHorizontal: 7,
		paddingVertical: 2,
		borderRadius: 4,
		fontSize: 12,
		color: "white",
		fontWeight: "500",
	},
	productNameTxt: {
		fontSize: 11,
		color: "gray",
		fontWeight: "500",
	},
});

export default CardFlatList;
