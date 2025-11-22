import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { slides } from "../data";
import { theme } from "../../../infastructure/theme";

const { width } = Dimensions.get("window");

export const Indicator = ({ scrollx }) => {
	return (
		<Animated.View style={styles.container}>
			{slides.map((_, i) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

				const scale = scrollx.interpolate({
					inputRange,
					outputRange: [0.8, 1.4, 0.8],
					extrapolate: "clamp",
				});
				const opacity = scrollx.interpolate({
					inputRange,
					outputRange: [0.6, 0.9, 0.6],
					extrapolate: "clamp",
				});
				return (
					<Animated.View
						key={`INDICATOR-${i}`}
						style={[styles.circle, { transform: [{ scale }], opacity }]}
					/>
				);
			})}
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 100,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 6,
	},
	circle: {
		height: 10,
		width: 10,
		borderRadius: 1000,
		backgroundColor: theme.colors.text.primary,
	},
});
