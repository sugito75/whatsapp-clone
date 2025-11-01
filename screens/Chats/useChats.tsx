import { Chat } from "@/api/chat/dto";
import usePrivateApi from "@/hooks/useAxiosPrivate";
import { useFocusEffect } from "expo-router";
import { useState } from "react";
import { IChatsBox } from "./ChatsBox";

const useChats = () => {
  const [chats, setChats] = useState<IChatsBox[]>([]);
  const api = usePrivateApi();

  const retrieveChats = async (controller: AbortController) => {
    const { data } = await api.get<Chat[]>("/api/chats", {
      signal: controller.signal,
    });

    setChats(() => data.map((c) => ({ ...c, newMessagesCount: 0 })));
  };

  useFocusEffect(() => {
    const controller = new AbortController();

    retrieveChats(controller);

    return () => controller.abort();
  });

  return { chats };
};

export default useChats;
