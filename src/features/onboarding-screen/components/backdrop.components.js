import { Animated, StyleSheet, Dimensions } from "react-native";
import { theme } from "../../../infastructure/theme";
const { width, height } = Dimensions.get("screen");
export const Backdrop = ({ scrollx }) => {
	const bgs = theme.colors.onBoardingbgs;
	const backgroundColor = scrollx.interpolate({ inputRange: bgs.map((_, i) => i * width), outputRange:bgs.map(bg=>bg) });
	return (
		<Animated.View
			style={[StyleSheet.absoluteFillObject, { backgroundColor}]}
		/>
	);
};
