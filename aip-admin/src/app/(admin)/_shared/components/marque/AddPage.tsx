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
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import MarqueApi from "@/axios/MarqueApi";

const yearSchema = z.object({
  marque: z.any(),
  link: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddMarquePage = (values: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      marque: values.values?.marque,
      link: values.values?.link,
    },
  });

  const router = useRouter();
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await MarqueApi.update(values, reqAuthHeader());
      console.log(values);
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/marque");
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
        <Link href={`/admin/marque`}>
          <Typography>Marque</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader
          title={
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-medium">Marque Information</span>
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
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Marque"
                  name="marque"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Link"
                  name="link"
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

export default AddMarquePage;
