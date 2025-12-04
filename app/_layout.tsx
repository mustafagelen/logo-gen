import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("rgba(5,5,7,0.9)");
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LinearGradient
          colors={["#050507", "#0C0D18", "#1A0D2E"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
        >
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
            </Stack>
        </LinearGradient>
      </GestureHandlerRootView>
      <Toast />
    </>
  );
}
