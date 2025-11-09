import { useEffect, useState, useRef } from "react";
import { Text, StyleSheet, View } from "react-native";
import { theme } from "../../../infastructure/theme";

export default function AnimatedTyping({ text = "ECHOVALUT", speed = 200 }) {
	const [displayed, setDisplayed] = useState("");
	const indexRef = useRef(0);
	useEffect(() => {
		setDisplayed("");
		const interval = setInterval(() => {
			if (indexRef.current < text.length) {
				const nextChar = text.charAt(indexRef.current);
				setDisplayed((prev) => prev + nextChar);
				indexRef.current += 1;
			} else {
				clearInterval(interval);
			}
		}, speed);

		return () => clearInterval(interval);
	}, [text]);

	return (
		<View style={{ flexDirection: "row" }}>
			{displayed.split("").map((char, index) => {
				const textStyle = [styles.text];
				if (char === "E" || char === "V") {
					textStyle.push({
						color: theme.colors.text.active,
						fontSize: theme.typography.fontSizes.h3,
					});
				}
				return (
					<Text style={textStyle} key={index}>
						{char}
					</Text>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: theme.colors.text.primary,
		letterSpacing: 4,

		marginBottom: theme.layout.space[3],
		fontSize: theme.typography.fontSizes.h4,
		lineHeight: theme.layout.lineHeights.title,
		fontFamily: theme.typography.fonts.app_name,
	},
});
