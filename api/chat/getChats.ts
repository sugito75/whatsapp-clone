import { privateAPI } from "@/lib/axios";
import { Chat } from "./dto";

const getChats = () => {
  return privateAPI.get<Chat[]>("/api/chats");
};

export default getChats;
