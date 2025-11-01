import { deleteItemAsync, getItem, setItem } from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthStore = {
  isAuthenticated: boolean;
  userId: number | null;
  socketId: string;
  accessToken: string;
  refreshToken: string;
  setAuthState(data: Partial<AuthStore>): void;
  logout(): void;
};

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isAuthenticated: false,
      userId: null,
      socketId: "",
      accessToken: "",
      refreshToken: "",
      setAuthState: (data: Pick<AuthStore, "isAuthenticated" | "socketId">) =>
        set((state) => ({ ...state, ...data })),
      logout: () =>
        set(() => ({
          isAuthenticated: false,
          socketId: "",
          accessToken: "",
          refreshToken: "",
        })),
    }),
    {
      name: "auth-store",
      // partialize: (state) => (),
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
);

export default useAuthStore;
