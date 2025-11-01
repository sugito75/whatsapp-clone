import { privateAPI } from "@/lib/axios";
import useAuthStore from "@/store/useAuthStore";
import { router } from "expo-router";

const useChatsMenu = (): Record<string, () => void> => {
  const { logout } = useAuthStore();

  return {
    Profile: () => {},
    Settings: () => {},
    Logout: async () => {
      await privateAPI.delete("/api/auth/logout");
      logout();
      router.replace("/(auth)/login");
    },
  };
};

export default useChatsMenu;
