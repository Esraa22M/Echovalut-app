import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { theme } from "../../../infastructure/theme";
const { width, height } = Dimensions.get("screen");
export const Slide = ({ item }) => {
	const LogoComponent = item.Logo;
	console.log(LogoComponent);
	return (
		<View style={styles.itemContainer}>
			<View style={styles.slideWrapper}>
				<View style={styles.logoWrapper}>
					<LogoComponent
						width={width * 0.5}
						height={undefined}
						style={{
							aspectRatio: 1,
							shadowColor: "#000", // Shadow color
							shadowOffset: { width: 0, height: 2 }, // X and Y offset
							shadowOpacity: 0.25, // Opacity (0 to 1)
							shadowRadius: 3.84,
							elevation: 5,
						}}
					/>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.description}>{item.description}</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	itemContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
	infoContainer: { marginVertical: theme.layout.space[3] , marginHorizontal: theme.layout.space[4] },
	title: {
		color: theme.colors.text.primary,
		fontFamily: theme.typography.fonts.heading,
		fontSize: theme.typography.fontSizes.h5,
		textAlign: "center",
		lineHeight: theme.layout.lineHeights.title,
		fontWeight: theme.typography.fontWeights.bolder,
		marginBottom: theme.layout.space[3],
	},
	description: {
		color: theme.colors.text.primary,
		textAlign: "center",
		fontFamily: theme.typography.fonts.heading,
		fontSize: theme.typography.fontSizes.button,
		lineHeight: theme.layout.lineHeights.copy,
	},
	slideWrapper: {
		width: width,
		height: 0.8 * height,
		justifyContent: "center",
		alignItems: "center",
	},
	logoWrapper: {
		backgroundColor: theme.colors.bg.secondary,

		width: width * 0.7,
		height: width * 0.7,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 1000,
	},
});
