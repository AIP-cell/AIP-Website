"use client";

import { useState } from "react";

// ** MUI Components
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";

// ** Custom Component Import

// ** Icon Imports

// ** Third Party Imports
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-hot-toast";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProfileApi from "@/axios/ProfileApi";
import CustomTextField from "@/@core/components/mui/TextField";

// import { useSettings } from 'src/@core/hooks/useSettings'

// ** Layout Import
// import BlankLayout from 'src/@core/layouts/BlankLayout'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  oldPassword: yup.string().required("Please enter your old password"),
  newPassword: yup.string().required("Please enter your new password"),
  confirmedPassword: yup
    .string()
    .required("Please enter your new password for confirmation"),
});

const ProfilePage = (emails: any, id: any) => {
  const ids = emails || "";

  const email = emails?.email || "";
  const defaultValues = {
    email: email,
    oldPassword: "",
    newPassword: "",
    confirmedPassword: "",
  };

  // const authEmail = authDetails.email
  // const authId = authDetails._id
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // const onSubmit = async () => {
  const onSubmit = async (values: any) => {
    try {
      console.log("valiee", values);
      console.log(ids);
      const response = await ProfileApi.resetPassword(ids.id, values);
      if (response.data.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error updating password");
    }
  };

  return (
    <Box
      sx={{
        p: [6, 12],
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <Box sx={{ my: 6 }}>
          <Typography align="center" variant="h3" sx={{ mb: 1.5 }}>
            {"Reset Password "}
          </Typography>
        </Box>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 4 }}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <CustomTextField
                  fullWidth
                  value={value}
                  defaultValue={""}
                  disabled
                  autoFocus
                  label="Email"
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.email)}
                  {...(errors.email && {
                    helperText: `${errors.email.message}`,
                  })}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 1.5 }}>
            <Controller
              name="oldPassword"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <CustomTextField
                  fullWidth
                  value={value}
                  onBlur={onBlur}
                  label="Old Password"
                  onChange={onChange}
                  id="auth-login-v2-password"
                  error={Boolean(errors.oldPassword)}
                  {...(errors.oldPassword && {
                    helperText: errors.oldPassword.message,
                  })}
                  type={showPassword ? "text" : "passwoold_password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon
                            fontSize="1.25rem"
                            icon={
                              showPassword ? "tabler:eye" : "tabler:eye-off"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 1.5 }}>
            <Controller
              name="newPassword"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <CustomTextField
                  fullWidth
                  value={value}
                  onBlur={onBlur}
                  label="New Password"
                  onChange={onChange}
                  id="auth-login-v2-password"
                  error={Boolean(errors.newPassword)}
                  {...(errors.newPassword && {
                    helperText: errors.newPassword.message,
                  })}
                  type={showPassword ? "text" : "new_password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon
                            fontSize="1.25rem"
                            icon={
                              showPassword ? "tabler:eye" : "tabler:eye-off"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 1.5 }}>
            <Controller
              name="confirmedPassword"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <CustomTextField
                  fullWidth
                  value={value}
                  onBlur={onBlur}
                  label="Confirm Password"
                  onChange={onChange}
                  id="auth-login-v2-password"
                  error={Boolean(errors.confirmedPassword)}
                  {...(errors.confirmedPassword && {
                    helperText: errors.confirmedPassword.message,
                  })}
                  type={showPassword ? "text" : "confirmed_password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon
                            fontSize="1.25rem"
                            icon={
                              showPassword ? "tabler:eye" : "tabler:eye-off"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>
          <Box
            sx={{
              mb: 1.75,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></Box>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mb: 4, color: "white" }}
          >
            Reset
          </Button>
        </form>
      </Box>
    </Box>
  );
};

// ProfilePage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

// ProfilePage.guestGuard = true

export default ProfilePage;
