import { Image } from "expo-image";
import { Platform, View, Text } from "react-native";
import Abstract from "@/components/icons/Abstract";
import tw from "@/utils/tailwind";

export default function HomeScreen() {
  return (
    <View style={tw`bg-red-500`}>
      <Text>Home Screen🎲</Text>
    </View>
  );
}
