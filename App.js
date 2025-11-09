import { StatusBar } from "expo-status-bar";
import { useEffect, useCallback, useState } from "react";
import { setupFonts } from "./src/infastructure/config/setup-fonts";
import * as Splash from "expo-splash-screen";
import { View } from "react-native";
import {SplashScreen} from "./src/features/splash-screen/screens/SplashScreen";
export default function App() {
	const [ready, setReady] = useState(false);
	useEffect(() => {
		async function prepare() {
			await setupFonts();
			setReady(true);
		}
		prepare();
	}, []);
	const onLayoutRootView = useCallback(async () => {
		if (ready) {
			await Splash.hideAsync();
		}
	}, [ready]);

	if (!ready) return null;

	return (
		<View onLayout={onLayoutRootView} style={{ flex:1, backgroundColor:"red"}}>
		<SplashScreen />
			<StatusBar style="auto" />
		</View>
	);
}
