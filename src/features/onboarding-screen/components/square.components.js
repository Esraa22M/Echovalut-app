import { Animated, Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../infastructure/theme";
const { width , height} = Dimensions.get("window");
export const Square = ({ scrollX }) => {
const Yolo= Animated.modulo(Animated.divide(Animated.modulo()))    
	return <Animated.View style={styles.container}></Animated.View>;
};
const styles = StyleSheet.create({
	container: {
		width: height,
		height: height,
		backgroundColor: theme.colors.bg.secondary,
        borderRadius:86,
        position:"absolute",
        top:-height*0.6,
        left:-height*0.3,
        transform:[{rotate:'35deg'}]
	},
});
