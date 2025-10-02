import { View } from "react-native";
import ChatsBox from "./ChatsBox";
import ChatsHeader from "./ChatsHeader";
import ChatsSearch from "./ChatsSearch";

const ChatsScreen = () => {
  return (
    <View className="flex-1" style={{ backgroundColor: "white" }}>
      <ChatsHeader />
      <ChatsSearch />
      <ChatsBox />
      <ChatsBox />
      <ChatsBox />
      <ChatsBox />
    </View>
  );
};

export default ChatsScreen;
