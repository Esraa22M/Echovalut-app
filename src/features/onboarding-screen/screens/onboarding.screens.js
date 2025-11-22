import { Dimensions, StyleSheet, View, FlatList, Animated } from "react-native";
import { slides } from "../data";
import { theme } from "../../../infastructure/theme";
import React, { useRef } from "react";
// import { Slide } from "../components/slide.components";
import { Indicator } from "../components/indicator.components";
const { width, height } = Dimensions.get("screen");
import { Slide } from "../components/slide.components";
import { Square } from "../components/square.components";
import { Backdrop } from "../components/backdrop.components";
export const OnboardingScreen = () => {
	const scrollX = useRef(new Animated.Value(0)).current;
	return (
		<View style={styles.container}>
			<Backdrop scrollx={scrollX} />
			<Square scrollX={scrollX}/>
			<Animated.FlatList
				scrollEventThrottle={32}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false }
				)}
				data={slides}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				horizontal
				pagingEnabled
				contentContainerStyle={{ height: height, justifyContent: "center" }}
				renderItem={({ item }) => <Slide item={item} />}
			/>
			<Indicator scrollx={scrollX} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: theme.colors.bg.primary },
});
