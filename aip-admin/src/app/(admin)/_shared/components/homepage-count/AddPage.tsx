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
import HomePageApi from "@/axios/HomePageApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

const yearSchema = z.object({
  coreFoundersCount: z.any(),
  foundersCount: z.any(),
  membersCount: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddHomePageCountPage = (values: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      coreFoundersCount: Number(values.values?.coreFoundersCount),
      foundersCount: values.values?.foundersCount,
      membersCount: values.values?.membersCount,
    },
  });

  const router = useRouter();
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await HomePageApi.update(values, reqAuthHeader());
      console.log(values);
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/home/count/add");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "Error submitting form");
    }
  };

  const handleResetClick = () => {
    reset();
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/home/count/add`}>
          <Typography>Home</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader
          title={
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-medium">Count Information</span>
              <span className="text-gray-500 text-sm">
                {`Last Updated By : ${values.values?.updatedBy || "-"}`}
              </span>
            </div>
          }
        />
        {/* <div
          style={{
            marginTop: "-15px",
            marginLeft: "25px",
            marginRight: "10px",
            marginBottom: "8px",
            textAlign: "right", // Align text to the right
            color: "grey", // Set text color to grey
          }}
        >
          {`Last Updated By : ${values.values?.updatedBy || "-"}`}
        </div> */}

        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Core Founders Count"
                  name="coreFoundersCount"
                  register={register}
                  errors={errors}
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Founders Count"
                  name="foundersCount"
                  type="number"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Members Count"
                  name="membersCount"
                  type="number"
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

export default AddHomePageCountPage;
