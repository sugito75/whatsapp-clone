import { deleteItemAsync, getItem, setItem } from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthStore = {
  isAuthenticated: boolean;
  socketId: string;
  setAuthState(data: Pick<AuthStore, "isAuthenticated" | "socketId">): void;
};

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isAuthenticated: false,
      socketId: "",
      setAuthState: (data: Pick<AuthStore, "isAuthenticated" | "socketId">) =>
        set((state) => ({ ...state, ...data })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
);

export default useAuthStore;
