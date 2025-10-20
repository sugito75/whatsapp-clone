import { publicAPI } from "@/lib/axios";
import { RegisterDTO } from "./dto";

export function register(dto: RegisterDTO) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(dto)) {
    formData.append(key, value as any);
  }

  return publicAPI.post(`/users/new`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
