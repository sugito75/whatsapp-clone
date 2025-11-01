import useAppToast from "@/components/common/toast/useAppToast";
import useAuthStore from "@/store/useAuthStore";
import { privateAPI, publicAPI } from "@/lib/axios";
import { AxiosError } from "axios";
import { router } from "expo-router";
import { useEffect } from "react";

const usePrivateApi = () => {
  const { logout, accessToken, refreshToken, setAuthState } = useAuthStore();
  const toast = useAppToast();

  useEffect(() => {
    const requestInterceptor = privateAPI.interceptors.request.use(
      (conf) => {
        if (!conf.headers.Authorization) {
          conf.headers.Authorization = `Bearer ${accessToken}`;
        }

        return conf;
      },
      (err) => err
    );

    const responseInterceptor = privateAPI.interceptors.response.use(
      (res) => res,
      async (err: AxiosError) => {
        const prevRequest = err.config as any;

        if (err.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const { data } = await publicAPI.post("/api/auth/tokens", {
            refreshToken,
          });

          const { accessToken } = data.data;

          if (prevRequest.headers) {
            prevRequest.headers.Authorization = `Bearer ${accessToken}`;
          }

          setAuthState({ accessToken });

          return privateAPI(prevRequest);
        }

        toast.show({
          severity: "error",
          message: "your session is over, please log in again",
        });
        logout();

        router.replace("/(auth)/login");
        return Promise.reject(err);
      }
    );

    return () => {
      privateAPI.interceptors.request.eject(requestInterceptor);
      privateAPI.interceptors.response.eject(responseInterceptor);
    };
  }, [refreshToken, accessToken, setAuthState, logout, toast]);

  return privateAPI;
};

export default usePrivateApi;
