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

import { useRouter } from "next-nprogress-bar";

import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
} from "@mui/material";
import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import FileUpload from "../custom-fields/CustomizedFileUploader";
import GivingRoadmapApi from "@/axios/GivingRoadmapApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import toast from "react-hot-toast";

const yearSchema = z.object({
  isLink: z.boolean(),
  isFile: z.boolean(),
  file: z.any(),
  link: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const GivingRoadmapPage = (values: any) => {
  console.log(values);
  const {
    register,
    reset,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      isLink: values?.values?.isLink,
      isFile: values?.values?.isFile,
      file: values?.values?.file,
      link: values?.values?.link,
      // description2: values?.values?.description2,
    },
  });

  const router = useRouter();
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await GivingRoadmapApi.update(values);
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/giving-roadmap");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setValue(name as keyof TyearSchema, checked);
  };

  const link = watch("isLink");
  const file = watch("isFile");

  const handleResetClick = () => {
    reset();
    setValue("file", null, { shouldValidate: false });
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/giving-roadmap`}>
          <Typography>Giving Roadmap</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        {/* <CardHeader title="Giving Roadmap Informations" />
        <div
          style={{
            marginTop: "-15px",
            marginLeft: "25px",
            marginRight: "10px",
            marginBottom: "8px",
            textAlign: "right", // Align text to the right
            color: "grey", // Set text color to grey
          }}
        >
          {`Last Updated By : ${values.values?.updatedBy || "-"}`}{" "}
        </div> */}
        <CardHeader
          title={
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-medium">
                Giving Roadmap Informations
              </span>
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
              <Grid item xs={12} md={12}>
                <FormGroup row style={{ width: "100%" }}>
                  <FormControlLabel
                    label="Link"
                    control={
                      <Checkbox
                        name="isLink"
                        onChange={handleCheckboxChange}
                        checked={getValues("isLink")}
                      />
                    }
                  />
                  <FormControlLabel
                    label="File"
                    control={
                      <Checkbox
                        name="isFile"
                        onChange={handleCheckboxChange}
                        checked={getValues("isFile")}
                      />
                    }
                  />
                </FormGroup>
              </Grid>
              {link == true && (
                <Grid item xs={12} md={12}>
                  <CustomizedTextField
                    label="Link"
                    name="link"
                    register={register}
                    errors={errors}
                  />
                </Grid>
              )}
              {file == true && (
                <Grid item xs={12}>
                  <FileUpload
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    name="file"
                    label="Upload File"
                    previewWidth={1040}
                    previewHeight={375}
                  />
                </Grid>
              )}
              {/* <FormControlLabel
                    label="Experts"
                    control={
                      <Checkbox
                        name="experts"
                        onChange={handleCheckboxChange}
                        checked={getValues("experts")}
                      />
                    }
                  /> */}

              {/* <Grid item xs={12} md={12}>
                <CustomizedMultilineTextField
                  placeholder="Description 2"
                  name="description2"
                  register={register}
                  errors={errors}
                />
              </Grid> */}
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
            <Button
              disabled={isSubmitting}
              type="reset" //doint
              size="large"
              color="secondary"
              variant="outlined"
              onClick={handleResetClick}
            >
              Reset
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default GivingRoadmapPage;
