import { FlatList } from "react-native";
import React from "react";

import ChatsBox from "./ChatsBox";

import useChats from "./useChats";

const ChatsContainer = () => {
  const { chats } = useChats();

  return (
    <FlatList
      scrollEnabled
      keyExtractor={(item) => item.id.toString()}
      data={chats}
      renderItem={({ item }) => <ChatsBox key={item.id} {...item} />}
    />
  );
};

export default ChatsContainer;
