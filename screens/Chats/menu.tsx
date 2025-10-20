import { router } from "expo-router";

const menus = [
  {
    key: "profile",
    displayName: "Profile",
    action: () => {},
  },
  {
    key: "settings",
    displayName: "Settings",
    action: () => {},
  },
  {
    key: "logout",
    displayName: "Logout",
    action: () => {
      router.replace("/(auth)/login");
    },
  },
];

export default menus;
