import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.main}>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => {
					navigation.navigate("Listing");
				}}
			>
				<Text style={styles.text}>Category Listing</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => {
					navigation.navigate("ColorsScreen");
				}}
			>
				<Text style={styles.text}>Color screen</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		marginBottom: 20,
		height: 50,
		width: Dimensions.get("window").width / 2,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
