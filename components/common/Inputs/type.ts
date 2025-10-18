import * as ImagePicker from "expo-image-picker";
import { TextInputProps } from "react-native";


export type IRegisterInput = {
  label: string;
  placeholder?: string;
  type?: "text" | "password";
} & TextInputProps;

export type IIconInput = {
    onImagePick?(img: ImagePicker.ImagePickerAsset): void
}