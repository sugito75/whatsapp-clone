import { publicAPI } from "@/lib/axios";
import { LoginDTO, LoginResponse } from "./dto";

export function login(dto: LoginDTO) {
  return publicAPI.post<LoginResponse>("/users/login", dto);
}
