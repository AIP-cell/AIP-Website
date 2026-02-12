"use client";

import Link from "next/link";

// import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/navigation'

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

// import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";

import { useRouter } from "next-nprogress-bar";
import toast from "react-hot-toast";
import FaqApi from "@/axios/FaqApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import UserApi from "@/axios/UserApi";

const yearSchema = z.object({
  name: z.string().nonempty({ message: "Required" }),
  phoneNumber: z.string().nonempty({ message: "Required" }),
  email: z.string().nonempty({ message: "Required" }),
  confirmPassword: z.string().nonempty({ message: "Required" }),
  password: z.string().nonempty({ message: "Required" }),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddUserPage = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
  });
  console.log(errors);
  const onSubmit = async (values: TyearSchema) => {
    try {
      console.log(values);
      const response = await UserApi.create(values, reqAuthHeader());

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/users");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };

  const handleResetClick = () => {
    reset();
  };

  const handleReset = (field: any) => {
    field.onChange("");
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/users`}>
          <Typography>User</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="User Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Name"
                  name="name"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Phone Number"
                  name="phoneNumber"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Email"
                  name="email"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Password"
                  name="password"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Confirm Password"
                  name="confirmPassword"
                  register={register}
                  errors={errors}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: "0 !important" }} />
          <CardActions>
            <Button
              size="large"
              type="submit"
              sx={{ mr: 2 }}
              variant="contained"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default AddUserPage;
