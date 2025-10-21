import React, { useEffect, useState } from "react";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Phone, User } from "lucide-react-native";
import FormInput from "@/components/common/Inputs/FormInput";
import PrimaryButton from "@/components/common/Buttons/PrimaryButton";
import { Text } from "@/components/ui/text";
import checkIfNumberRegistered from "@/api/user/checkIfNumberRegistered";
import { clsx } from "clsx";
import useContactStore from "@/store/useContactStore";
import getUserInfo from "@/api/user/getUserInfo";
import { UserInfoDTO } from "@/api/user/dto";
import useAppToast from "@/components/common/toast/useAppToast";
import { router } from "expo-router";

const NewContactScreen = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isNumberAvailable, setIsNumberAvailable] = useState(false);

  const { addContact, setSelectedContact } = useContactStore();
  const toast = useAppToast();

  useEffect(() => {
    const checkAvailable = async () => {
      const { data } = await checkIfNumberRegistered(phone);
      setIsNumberAvailable(data.data.isRegistered);
    };

    if (phone.length > 11) {
      checkAvailable();
    }
  }, [phone]);

  const saveContact = async () => {
    const { data } = await getUserInfo(phone);
    const dto = data.data as UserInfoDTO;
    dto.id = `${+new Date()}`;

    addContact(dto);
    setSelectedContact(dto.id);
    toast.show({ severity: "success", message: "Contact is saved" });
    router.replace("/chat");
  };

  return (
    <Box
      className="flex-1 p-3"
      style={{ backgroundColor: "white", justifyContent: "space-between" }}
    >
      <Box>
        <Box className="flex-row items-center gap-5">
          <Icon as={User} />
          <FormInput
            label="Name"
            containerStyle={{ width: "90%" }}
            value={name}
            onChangeText={setName}
          />
        </Box>
        <Box className="flex-row items-center gap-5">
          <Icon as={Phone} />
          <FormInput
            label="Number"
            value={phone}
            containerStyle={{ width: "90%" }}
            onChangeText={setPhone}
            keyboardType="numeric"
          />
        </Box>
        {phone.length > 11 && (
          <Text
            style={{ marginStart: 40 }}
            className={clsx({
              "text-success-400": isNumberAvailable,
              "text-error-400": !isNumberAvailable,
            })}
          >
            {isNumberAvailable
              ? "Number is available on WhatIsup"
              : "Number is not available on WhatIsup"}
          </Text>
        )}
      </Box>
      <Box style={{ height: 100, padding: 10 }}>
        <PrimaryButton text="Save" onPress={saveContact} />
      </Box>
    </Box>
  );
};

export default NewContactScreen;
