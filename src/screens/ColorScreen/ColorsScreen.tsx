import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	TextInput,
} from "react-native";
import React, { useState } from "react";

const colorsData = [
	{
		name: "Total Hardness",
		colors: [
			{
				colorCode: "#FF0000",
				colorPoint: "0",
			},
			{
				colorCode: "#FFA500",
				colorPoint: "50",
			},
			{
				colorCode: "#FFFF00",
				colorPoint: "100",
			},
			{
				colorCode: "#008000",
				colorPoint: "150",
			},
			{
				colorCode: "#0000FF",
				colorPoint: "200",
			},
		],
	},
	{
		name: "Total Chlorine",
		colors: [
			{
				colorCode: "#b96565",
				colorPoint: "0",
			},
			{
				colorCode: "#9f7f42",
				colorPoint: "1",
			},
			{
				colorCode: "#939339",
				colorPoint: "3",
			},
			{
				colorCode: "#648964",
				colorPoint: "5",
			},
			{
				colorCode: "#7171a3",
				colorPoint: "10",
			},
		],
	},
	{
		name: "Free Chlorine",
		colors: [
			{
				colorCode: "#8fb965",
				colorPoint: "0",
			},
			{
				colorCode: "#426f9f",
				colorPoint: "1",
			},
			{
				colorCode: "#933993",
				colorPoint: "3",
			},
			{
				colorCode: "#0ffa0f",
				colorPoint: "5",
			},
			{
				colorCode: "#3a3a94",
				colorPoint: "10",
			},
		],
	},
	{
		name: "pH",
		colors: [
			{
				colorCode: "#a44a4a",
				colorPoint: "6.2",
			},
			{
				colorCode: "#ffa6008a",
				colorPoint: "6.8",
			},
			{
				colorCode: "#00ff91",
				colorPoint: "7.2",
			},
			{
				colorCode: "#008053",
				colorPoint: "7.8",
			},
			{
				colorCode: "#44ff00",
				colorPoint: "8.4",
			},
		],
	},
	{
		name: "Total Alkalinity",
		colors: [
			{
				colorCode: "#9db965",
				colorPoint: "0",
			},
			{
				colorCode: "#429f5c",
				colorPoint: "40",
			},
			{
				colorCode: "#937339",
				colorPoint: "120",
			},
			{
				colorCode: "#3e9b3e",
				colorPoint: "180",
			},
			{
				colorCode: "#1313c2",
				colorPoint: "240",
			},
		],
	},
	{
		name: "Cyanuric Acid",
		colors: [
			{
				colorCode: "#51970c",
				colorPoint: "0",
			},
			{
				colorCode: "#429f82",
				colorPoint: "50",
			},
			{
				colorCode: "#ec16ec",
				colorPoint: "100",
			},
			{
				colorCode: "#5fbd5f",
				colorPoint: "150",
			},
			{
				colorCode: "#94743a",
				colorPoint: "300",
			},
		],
	},
];

const ColorsScreen = () => {
	const [leftColorsData, setLeftColorsData] = useState([
		"#FF0000",
		"#b96565",
		"#8fb965",
		"#a44a4a",
		"#9db965",
		"#51970c",
	]);

	const onColorPress = (index: number, colorCode: string) => {
		const tempData = [...leftColorsData];
		tempData[index] = colorCode;
		setLeftColorsData(tempData);
	};

	const onInputChange = (index: number, value: string) => {
		const tempData = [...leftColorsData];
		const selectedData = colorsData[index];
		const selectedColor = selectedData.colors.find(
			(item) => item.colorPoint === value
		);
		if (selectedColor) {
			tempData[index] = selectedColor.colorCode;
			setLeftColorsData(tempData);
		}
	};

	return (
		<SafeAreaView style={styles.flex1}>
			<Text style={styles.mainHeader}>ColorsScreen</Text>
			<View
				style={{
					flexDirection: "row",
					paddingHorizontal: 20,
				}}
			>
				<View
					style={{
						flex: 0.5,
						borderWidth: 1,
						borderColor: "black",
						borderRadius: 10,
					}}
				>
					<FlatList
						data={leftColorsData}
						renderItem={({ item }) => {
							return (
								<View
									style={{
										width: 70,
										height: 20,
										backgroundColor: item,
										marginTop: 55,
										marginBottom: 20,
									}}
								/>
							);
						}}
					/>
				</View>
				<View
					style={{
						flex: 5,
						marginLeft: 10,
					}}
				>
					<FlatList
						data={colorsData}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							padding: 15,
						}}
						renderItem={({ item, index }) => {
							return (
								<View
									style={{
										marginBottom: 20,
									}}
								>
									<View
										style={{
											marginBottom: 10,
											flexDirection: "row",
											justifyContent: "space-between",
										}}
									>
										<Text
											style={{
												marginLeft: 5,
												fontSize: 18,
												fontWeight: "bold",
												color: "black",
											}}
										>
											{item.name}
										</Text>
										<TextInput
											style={{
												borderRadius: 5,
												borderWidth: 1,
												borderColor: "black",
												marginRight: 5,
												height: 30,
												width: 50,
												paddingVertical: 0,
												textAlign: "center",
											}}
											maxLength={3}
											placeholder="0"
											keyboardType="number-pad"
											onChangeText={(value) => onInputChange(index, value)}
										/>
									</View>
									<FlatList
										data={item.colors}
										horizontal
										showsHorizontalScrollIndicator={false}
										renderItem={({ item }) => {
											return (
												<View>
													<TouchableOpacity
														style={{
															width: 50,
															height: 20,
															borderRadius: 5,
															backgroundColor: item.colorCode,
															marginLeft: 5,
														}}
														onPress={() => onColorPress(index, item.colorCode)}
													/>
													<Text
														style={{
															marginLeft: 5,
															fontSize: 12,
															fontWeight: "bold",
															color: "gray",
															textAlign: "center",
														}}
													>
														{item.colorPoint}
													</Text>
												</View>
											);
										}}
									/>
								</View>
							);
						}}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default ColorsScreen;

const styles = StyleSheet.create({
	flex1: {
		flex: 1,
	},

	mainHeader: {
		fontSize: 20,
		fontWeight: "bold",
		color: "navy",
		margin: 30,
	},
	leftColors: {
		width: 50,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "black",
		marginLeft: 30,
	},
});
