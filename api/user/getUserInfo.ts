import { privateAPI } from "@/lib/axios";

const getUserInfo = (phone: string) => {
  return privateAPI.get(`/users/info/${phone}`);
};

export default getUserInfo;
