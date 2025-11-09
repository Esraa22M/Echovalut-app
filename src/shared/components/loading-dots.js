import { Animated, StyleSheet } from "react-native";
import { theme } from "../../infastructure/theme";
export const LoadingDots = () => {
	return (
		<View style={styles.container}>
			<Animated.View style={styles.dot} />
			<Animated.View style={styles.dot} />
			<Animated.View style={styles.dot} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	dot: {width:10 , height:10, borderRadius:1000, },
});
