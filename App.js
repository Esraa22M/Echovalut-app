import { StatusBar } from "expo-status-bar";

import { useEffect, useCallback, useState } from "react";
import { setupFonts } from "./src/infastructure/config/setup-fonts";
import * as SplashScreen from "expo-splash-screen";

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
			await SplashScreen.hideAsync();
		}
	}, [ready]);

	if (!ready) return null;

	return (
		<View onLayout={onLayoutRootView}>
			<StatusBar style="auto" />{" "}
		</View>
	);
}
