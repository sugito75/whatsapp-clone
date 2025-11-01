import { config } from "@/constants/config";
import axios, { CreateAxiosDefaults } from "axios";

const sharedConfig: CreateAxiosDefaults = {
  baseURL: config.API.BASE_URL,
};
const publicAPI = axios.create(sharedConfig);

const privateAPI = axios.create({
  ...sharedConfig,
});

export { publicAPI, privateAPI };
