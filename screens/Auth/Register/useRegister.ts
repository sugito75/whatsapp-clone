import { RegisterDTO } from "@/api/auth/dto";
import { register } from "@/api/auth/register";
import useAppToast from "@/components/common/toast/useAppToast";
import { AxiosError } from "axios";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";

const useRegister = () => {
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState<ImagePicker.ImagePickerAsset>();
  const [error, setError] = useState<string>("");
  const toast = useAppToast();

  const data: RegisterDTO = {
    displayName,
    phone,
    password,
  };

  if (icon)
    data.profilePicture = {
      uri: icon.uri,
      name: icon.fileName as string,
      type: icon.mimeType as string,
    };

  const submit = async () => {
    try {
      await register(data);
      router.replace("/(auth)/login");
      toast.show({ severity: "success", message: "Account Registered" });
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(
          error.status === 400
            ? "all data is required!"
            : "something wrong in our server"
        );
      }
    }
  };

  return {
    data,
    setDisplayName,
    setIcon,
    setPassword,
    setPhone,
    error,
    submit,
  };
};

export default useRegister;
