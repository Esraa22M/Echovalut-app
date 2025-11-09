import { View, Image, StyleSheet, Text, Button } from "react-native";
import { useState } from "react";
import { theme } from "../../../infastructure/theme";
import AnimatedTyping from "../components/animated-typing.components";
import { AnimatingCircle } from "../components/animating-circle";
export const SplashScreen = () => {
	const [showText , setShowText]=useState(false);
	return (
		
		<View style={styles.container}>
			  { showText&&<AnimatedTyping text="ECHOVALUT"/>}
			{!showText&&<AnimatingCircle  setShowText={setShowText} />}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.bg.primary,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	
});
