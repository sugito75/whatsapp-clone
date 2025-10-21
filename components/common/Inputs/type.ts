import * as ImagePicker from "expo-image-picker";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type IRegisterInput = {
  label: string;
  placeholder?: string;
  type?: "text" | "password";
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export type IIconInput = {
  onImagePick?(img: ImagePicker.ImagePickerAsset): void;
};
