"use client";

// React Imports
import { useEffect, useRef, useState } from "react";

// MUI Imports
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: Record<string, any>
      ) => string | null;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | null;
    };
  }
}

// Third-party Imports
import classnames from "classnames";

import { Controller, useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";

import { Box, TextField } from "@mui/material";

import { Icon } from "@iconify/react/dist/iconify.js";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { useSettings } from "@core/hooks/useSettings";

// Type Imports
import type { SystemMode } from "@core/types";

// Component Imports
import Link from "@/app/(admin)/_shared/components/Link";
import Logo from "@/app/(admin)/_shared/components/layout/shared/Logo";
import CustomTextField from "@core/components/mui/TextField";

// Config Imports
import themeConfig from "@configs/themeConfig";

// Hook Imports

import { useImageVariant } from "@core/hooks/useImageVariant";
import { useAuth } from "@/hooks/useAuth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Styled Custom Components
const LoginIllustration = styled("img")(({ theme }) => ({
  zIndex: 2,
  blockSize: "auto",
  maxBlockSize: 680,
  maxInlineSize: "100%",
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550,
  },
  [theme.breakpoints.down("lg")]: {
    maxBlockSize: 450,
  },
}));

const MaskImg = styled("img")({
  blockSize: "auto",
  maxBlockSize: 355,
  inlineSize: "100%",
  position: "absolute",
  insetBlockEnd: 0,
  zIndex: -1,
});

const LoginV2 = ({ mode }: { mode: SystemMode }) => {
  // States
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const turnstileRef = useRef<any>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const [turnstileLoaded, setTurnstileLoaded] = useState<boolean>(false);
  // Vars
  const darkImg = "/images/pages/auth-mask-dark.png";
  const lightImg = "/images/pages/auth-mask-light.png";
  const darkIllustration = "/images/illustrations/auth/v2-login-dark.png";
  const lightIllustration = "/images/illustrations/auth/v2-login-light.png";

  const borderedDarkIllustration =
    "/images/illustrations/auth/v2-login-dark-border.png";

  const borderedLightIllustration =
    "/images/illustrations/auth/v2-login-light-border.png";

  // Hooks
  const { settings } = useSettings();
  const theme = useTheme();

  const hidden = useMediaQuery(theme.breakpoints.down("md"));
  const authBackground = useImageVariant(mode, lightImg, darkImg);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  });

  interface FormData {
    email: any;
    password: any;
  }
  const auth = useAuth();

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  );

  const {
    setError,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (!window.turnstile) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => setTurnstileLoaded(true);
      document.body.appendChild(script);
    } else {
      setTurnstileLoaded(true);
    }

    return () => {
      if (turnstileWidgetId.current) {
        window.turnstile?.remove(turnstileWidgetId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (turnstileLoaded && turnstileRef.current) {
      const widgetId = window.turnstile?.render(turnstileRef.current, {
        sitekey:
          process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY ||
          "0x4AAAAAABfxnn3acb9_jlcJ",
        callback: (token: string) => {
          console.log("Turnstile token:", token);
        },
        "error-callback": () => {
          console.log("Turnstile error");
        },
        "expired-callback": () => {
          console.log("Turnstile expired");
        },
      });

      if (widgetId) {
        turnstileWidgetId.current = widgetId;
      } else {
        console.error("Failed to initialize Turnstile widget.");
      }
    }
  }, [turnstileLoaded]);

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    const rawToken = window.turnstile?.getResponse(
      turnstileWidgetId.current || ""
    );
    const token: string | undefined = rawToken === null ? undefined : rawToken;

    auth.login({ email, password, recaptcha_token: token }, () => {
      setError("email", {
        type: "manual",
        message: "Email or Password is invalid",
      });

      if (turnstileWidgetId.current) {
        window.turnstile?.reset(turnstileWidgetId.current);
      }
    });

    // if (result?.error) {
    //   setError('email', {
    //     type: 'manual',
    //     message: 'Email or Password is invalid'
    //   })
    // } else if (session?.user) {
    //   window.location.href = '/admin/home'
    // }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <div className="mb-5">
          <Logo />
        </div>

        <Typography variant="h5" fontWeight="bold">
          Welcome to AIP! 👋
        </Typography>
        <Typography variant="body2" color="textSecondary" className="mb-6">
          Please sign in to your account
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Email or Username"
                  variant="outlined"
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  {...field}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  {...field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <div ref={turnstileRef} />
          </Box>

          <Button fullWidth variant="contained" color="primary" type="submit">
            Login
          </Button>

          <div className="flex justify-center mt-7 space-x-3"></div>
        </form>
      </div>
    </div>
  );
};

export default LoginV2;
