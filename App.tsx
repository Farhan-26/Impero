import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
	CardStyleInterpolators,
	createStackNavigator,
} from "@react-navigation/stack";
import Listing from "./src/screens/Listing";
import Home from "./src/screens/Home";
import ColorsScreen from "./src/screens/ColorScreen/ColorsScreen";

const Stack = createStackNavigator();

const App = (): JSX.Element => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Listing" component={Listing} />
				<Stack.Screen name="ColorsScreen" component={ColorsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
