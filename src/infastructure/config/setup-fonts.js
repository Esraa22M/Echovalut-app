import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Orbitron_400Regular } from "@expo-google-fonts/orbitron";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
SplashScreen.preventAutoHideAsync();
export async function setupFonts() {
	try {
		await Font.loadAsync({
			Orbitron_400Regular,
			Oswald_400Regular,
			Lato_400Regular,
		});
	} catch (err) {
		console.warn("error loading fonts ,", err);
	}
}
