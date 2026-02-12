"use client";

import Link from "next/link";

// import { useRouter } from 'next/navigation'

import { useMutation } from "@tanstack/react-query";

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
import GeneralInformationApi from "@/axios/GeneralInformationApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

const yearSchema = z.object({
  email: z.string().nonempty({ message: "Required" }),
  phoneNumber: z.string().nonempty({ message: "Required" }),
  networkTeamName: z.string().nonempty({ message: "Required" }),
  networkTeamEmail: z.string().nonempty({ message: "Required" }),
  knowlwdgeTeamName: z.string().nonempty({ message: "Required" }),
  knowlwdgeTeamEmail: z.string().nonempty({ message: "Required" }),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddGeneralKnowledgePage = (values: any) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      email: values.values?.email,
      phoneNumber: values.values?.phoneNumber,
      networkTeamName: values.values?.networkTeamName,
      networkTeamEmail: values.values?.networkTeamEmail,
      knowlwdgeTeamName: values.values?.knowlwdgeTeamName,
      knowlwdgeTeamEmail: values.values?.knowlwdgeTeamEmail,
    },
  });

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await GeneralInformationApi.update(
        values,
        reqAuthHeader()
      );

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/general-information");
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
        <Link href={`/admin/general-information`}>
          <Typography>General Enquiry Information</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader
          title={
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-medium">General Information</span>
              <span className="text-gray-500 text-sm">
                {`Last Updated By : ${values.values?.updatedBy || "-"}`}
              </span>
            </div>
          }
        />

        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Email"
                  name="email"
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
              <span
                style={{
                  marginTop: "30px",
                  marginLeft: "20px",
                  marginBottom: "5px",
                }}
              >
                {" "}
                Communication Team
              </span>

              <Grid xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Name"
                  name="networkTeamName"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Email"
                  name="networkTeamEmail"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <span
                style={{
                  marginTop: "30px",
                  marginLeft: "20px",
                  marginBottom: "5px",
                }}
              >
                {" "}
                Knowledge Team
              </span>
              <Grid xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Name"
                  name="knowlwdgeTeamName"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Email"
                  name="knowlwdgeTeamEmail"
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

export default AddGeneralKnowledgePage;
