import { StatusBar } from "expo-status-bar";
import { useEffect, useCallback, useState } from "react";
import { setupFonts } from "./src/infastructure/config/setup-fonts";
import * as Splash from "expo-splash-screen";
import { View } from "react-native";
import {SplashScreen} from "./src/features/splash-screen/screens/Splash.screens";
import { OnboardingScreen } from "./src/features/onboarding-screen/screens/onboarding.screens";
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
		<OnboardingScreen />
			<StatusBar style="auto" />
		</View>
	);
}
