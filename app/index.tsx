import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text style={{ color: "red", fontWeight: "bold" }}>Bol</Text>
      <Image source={require("@/assets/images/cat.jpeg")} />
    </View>
  );
}
