import React, { useEffect } from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { theme } from "../../../infastructure/theme";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");
const CIRCLE_LENGTH = 700;
const RADIUS = CIRCLE_LENGTH / (3 * Math.PI);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const AnimatingCircle = ({ setShowText }) => {
  const circlePrograss = useSharedValue(1);
  const scale = useSharedValue(0);

  useEffect(() => {
    let timeoutId;

    const triggerShowText = () => {
      timeoutId = setTimeout(() => {
        setShowText(true);
      }, 2000);
    };

    circlePrograss.value = withTiming(0, { duration: 2000 });
    scale.value = withDelay(
      2000,
      withSpring(52, {}, () => {
        runOnJS(triggerShowText)(); 
      })
    );


    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const animatedCircleProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * circlePrograss.value,
  }));

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Svg width={width} height={height} style={{ position: "absolute" }}>
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={RADIUS}
          stroke={theme.colors.text.active}
          strokeWidth={5}
          fill="none"
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedCircleProps}
          strokeLinecap="round"
        />
      </Svg>

      <Animated.View style={[styles.logo, reanimatedStyle]}>
        <Image
          style={[styles.logo]}
          source={require("../assets/app-logo.jpeg")}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 3,
    height: 3,
    borderRadius: 1000,
    position: "absolute",
  },
});


