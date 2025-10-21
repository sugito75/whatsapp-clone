import { privateAPI } from "@/lib/axios";

const checkIfNumberRegistered = (phone: string) => {
  return privateAPI.get(`/users/check/${phone}`);
};

export default checkIfNumberRegistered;
