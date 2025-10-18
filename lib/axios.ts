import { config } from "@/constants/config"
import axios, { CreateAxiosDefaults } from "axios"

const sharedConfig: CreateAxiosDefaults = {
    baseURL: config.API.BASE_URL,

}

export const publicAPI = axios.create(sharedConfig)

export const privateAPI = axios.create({
    ...sharedConfig
})