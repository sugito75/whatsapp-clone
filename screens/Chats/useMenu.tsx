import useAuthStore from "@/store/useAuthStore";
import { router } from "expo-router";

const useChatsMenu = (): Record<string, () => void> => {
  const { setAuthState } = useAuthStore();

  return {
    Profile: () => {},
    Settings: () => {},
    Logout: () => {
      setAuthState({ isAuthenticated: false, socketId: "" });
      router.replace("/(auth)/login");
    },
  };
};

export default useChatsMenu;
