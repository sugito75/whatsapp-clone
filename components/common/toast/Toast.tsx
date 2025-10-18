import { Icon } from "@/components/ui/icon";
import { Toast, ToastDescription } from "@/components/ui/toast";
import { BadgeCheck, CircleX } from "lucide-react-native";
import React from "react";
import { IAppToast } from "./type";

const AppToast = ({ severity, message }: IAppToast) => {
  const iconSeverity = {
    success: {
      icon: BadgeCheck,
      color: "text-success-500",
    },
    error: {
      icon: CircleX,
      color: "text-error-500",
    },
  };

  const badge = iconSeverity[severity];

  return (
    <Toast
      className="flex-row gap-3 items-center"
      style={{ backgroundColor: "#fff" }}
    >
      <Icon as={badge.icon} className={badge.color} />
      <ToastDescription style={{ color: "#444" }}>{message}</ToastDescription>
    </Toast>
  );
};

export default AppToast;
