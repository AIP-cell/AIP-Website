"use client";
// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Next Import

import authConfig from "../configs/auth";

// ** Config

// ** Types
import {
  AuthValuesType,
  LoginParams,
  ErrCallbackType,
  UserDataType,
} from "./types";

import Cookies from "js-cookie";
import axiosClient from "@/axios/config/axiosConfigs";
import { usePathname, useRouter } from "next/navigation";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(
        authConfig.storageTokenKeyName
      )!;

      if (storedToken) {
        setLoading(true);
        await axiosClient
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: "bearer " + storedToken,
            },
          })
          .then(async (response) => {
            setLoading(false);
            setUser({ ...response.data.userData });
          })
          .catch(() => {
            localStorage.removeItem("userData");
            Cookies.remove("userData");
            localStorage.removeItem("accessToken");
            setUser(null);
            setLoading(false);
            if (
              authConfig.onTokenExpiration === "logout" &&
              !pathname.includes("login")
            ) {
              router.replace("/login");
            }
          });
      } else {
        setLoading(false);
      }
    };

    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (
    params: LoginParams,
    errorCallback?: ErrCallbackType
  ) => {
    axiosClient
      .post(authConfig.loginEndpoint, params)
      .then(async (response: any) => {
        window.localStorage.setItem(
          authConfig.storageTokenKeyName,
          response.data.accessToken
        );
        Cookies.set("accessToken", response.data.accessToken);

        // Set up Axios interceptor to include the accessToken in the request headers
        axiosClient.interceptors.request.use((config: any) => {
          const accessToken = Cookies.get("accessToken");
          if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
          }
          return config;
        });

        axiosClient.interceptors.response.use(
          (response) => {
            return response;
          },
          (error) => {
            if (error.response && error.response.status === 401) {
              Cookies.remove("accessToken");
              window.location.href = "/login";
            }
            return Promise.reject(error);
          }
        );

        setUser({ ...response.data.userData });
        window.localStorage.setItem(
          "userData",
          JSON.stringify(response.data.userData)
        );
        Cookies.set("userData", response.data.userData);

        router.push("/admin/home/count");
      })

      .catch((err: any) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    Cookies.remove("userData");
    window.localStorage.removeItem(authConfig.storageTokenKeyName);
    router.replace("/login");
    setUser(null);
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
