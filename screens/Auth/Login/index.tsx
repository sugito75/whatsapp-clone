import { login } from "@/api/auth/login";
import PrimaryButton from "@/components/common/Buttons/PrimaryButton";
import FormInput from "@/components/common/Inputs/FormInput";
import { Center } from "@/components/ui/center";
import useAuthStore from "@/store/useAuth";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import LoginFooter from "./LoginFooter";
import LoginHeader from "./LoginHeader";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useAuthStore();

  const submit = async () => {
    try {
      const { data } = await login({ phone, password });
      setAuthState({ isAuthenticated: true, socketId: data.data.sessionId });
      router.replace("/(tabs)/chats");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center className="flex-1">
      <KeyboardAvoidingView behavior="position" style={{ width: "80%" }}>
        <LoginHeader />
        <FormInput
          label="Phone"
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="number-pad"
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <PrimaryButton text="Login" onPress={submit} />
        <LoginFooter />
      </KeyboardAvoidingView>
    </Center>
  );
};

export default LoginScreen;
