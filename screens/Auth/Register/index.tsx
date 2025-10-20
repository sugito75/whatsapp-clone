import PrimaryButton from "@/components/common/Buttons/PrimaryButton";
import FormInput from "@/components/common/Inputs/FormInput";
import IconInput from "@/components/common/Inputs/IconInput";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import RegisterFooter from "./RegisterFooter";
import RegisterHeader from "./RegisterHeader";
import useRegister from "./useRegister";

const RegisterScreen = () => {
  const {
    data,
    submit,
    setDisplayName,
    setIcon,
    setPassword,
    setPhone,
    error,
  } = useRegister();

  return (
    <Center className="flex-1 bg-white">
      <KeyboardAvoidingView style={styles.form} behavior="position">
        <RegisterHeader />
        <Center>
          <IconInput onImagePick={setIcon} />
        </Center>
        <FormInput
          label="Display Name"
          placeholder="e.g John Doe"
          value={data.displayName}
          onChangeText={setDisplayName}
        />
        <FormInput
          label="Phone"
          placeholder="e.g 0812121212"
          onChangeText={setPhone}
          value={data.phone}
          keyboardType="number-pad"
        />
        <FormInput
          label="Password"
          type="password"
          onChangeText={setPassword}
          value={data.password}
        />
        {error && (
          <Text
            size={"sm"}
            className="text-error-500"
            style={styles.errMessage}
          >
            {error}
          </Text>
        )}
        <PrimaryButton text="Register" onPress={submit} />
      </KeyboardAvoidingView>
      <RegisterFooter />
    </Center>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "80%",
  },
  errMessage: {
    marginBottom: 10,
  },
});

export default RegisterScreen;
