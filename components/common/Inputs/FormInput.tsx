import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import React from "react";
import styles from "./style";
import { IRegisterInput } from "./type";

const FormInput = ({
  label,
  placeholder,
  type,
  ...inputFieldProps
}: IRegisterInput) => {
  return (
    <Box style={styles.inputBox}>
      <Text style={styles.inputLabel}>{label}</Text>
      <Input style={styles.inputContainer}>
        <InputField
          placeholder={placeholder}
          type={type}
          {...inputFieldProps}
        />
      </Input>
    </Box>
  );
};

export default FormInput;
