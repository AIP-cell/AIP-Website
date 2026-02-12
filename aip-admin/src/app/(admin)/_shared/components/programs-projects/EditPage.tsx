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
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import type { DatePickerProps } from "react-datepicker";

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";
import { CustomizedDatePicker } from "../custom-fields/CustomizedDatePicker";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";

import { useParams, useRouter } from "next/navigation";

import FileUpload from "../custom-fields/CustomizedFileUploader";

import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { Chip, MenuItem, TextField } from "@mui/material";
import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import ProjectAndProgramsApi from "@/axios/ProjectAndProgramsApi";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import {
  domain,
  Organization,
  reportOrBook,
  TypeOfContent,
} from "@/utils/Enums";
import { CustomizedDropDown } from "../custom-fields/CustomizedAipDropdown";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ACCEPTED_VIDEO_TYPES = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "image/gif",
];

const yearSchema = z.object({
  title: z.string().nonempty({ message: "Required" }),
  domain: z.string().nonempty({ message: "Required" }),
  typeOfContent: z.string().nonempty({ message: "Required" }),
  organisation: z.string(),
  tags: z.any(),
  date: z.date(),
  report: z.any(),
  partners: z.any(),
  category: z.string().nonempty({ message: "Required" }),
  description: z.string().nonempty({ message: "Required" }),
  image: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditProgramsPage = (
  { values, data }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const router = useRouter();

  const { id } = useParams<{ id: string }>();

  const {
    handleSubmit,
    register,
    control,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      title: values.title,
      domain: values.domain,
      typeOfContent: values.typeOfContent,
      organisation: values.organisation,
      tags: values.searchKeywords,
      date: dayjs(values.date).toDate(),
      report: values.report,
      partners: values.partners,
      category: values.category,
      description: values.description,
      image: values.image,
    },
  });

  const onSubmit = async (values: TyearSchema) => {
    console.log("hhihih", values);
    try {
      const response = await ProjectAndProgramsApi.updateCasestudies(
        id,
        values
      );

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/projects-programs");
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

  const domains = Object.entries(domain).map(([key, value]) => ({
    label: value,
    value: key,
  }));
  const typeOfContents = Object.entries(TypeOfContent).map(([key, value]) => ({
    label: value,
    value: key,
  }));
  const organisation = Object.entries(Organization).map(([key, value]) => ({
    label: value,
    value: key,
  }));
  const category = Object.entries(reportOrBook).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/projects-programs`}>
          <Typography>Programs & Projects</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Project & Program Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={12} style={{ marginTop: "-15px" }}>
                <label htmlFor="name">Search Keyword</label>
                <Controller
                  name="tags"
                  control={control}
                  render={({ field }) => (
                    <>
                      <CustomAutocomplete
                        fullWidth
                        freeSolo
                        multiple
                        id="autocomplete-multiple-filled"
                        options={[]}
                        value={field.value}
                        onChange={(event, newValue) => {
                          field.onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <CustomTextField {...params} variant="filled" />
                        )}
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="outlined"
                              label={option}
                              size="small"
                              {...getTagProps({ index })}
                              key={index}
                            />
                          ))
                        }
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <label>Date</label>
                <CustomizedDatePickers
                  control={control}
                  name="date"
                  label="Date"
                  errors={errors}
                  popperPlacement={popperPlacement}
                />
              </Grid>

              <Grid item xs={6} md={6} sx={{ marginTop: "20px" }}>
                <CustomizedDropDown
                  label="Category"
                  name="category"
                  value={values.category}
                  register={register}
                  errors={errors}
                  options={["Report", "Book", "Initiative"]}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Title"
                  name="title"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedDropDown
                  label="Field"
                  name="domain"
                  value={values.field}
                  register={register}
                  errors={errors}
                  options={[
                    "Art and Culture",
                    "Education",
                    "Environment",
                    "Health and Nutrition",
                    "Legal and Judiciary",
                    "Livelihood",
                    "Disability",
                    "Rural Development",
                    "Sports",
                    "WASH",
                    "Philanthropy",
                    "Women & Child",
                  ]}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedDropDown
                  label="Type of content"
                  name="typeOfContent"
                  value={values.typeOfContent}
                  register={register}
                  errors={errors}
                  options={[
                    "Sector primers",
                    "Giving Journey",
                    "Research Study",
                    "Philanthropist Speak",
                    "Next Gen",
                    "Books",
                    "Articles",
                    "PoV",
                    "White paper",
                    "Newsletter",
                  ]}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedDropDown
                  label="Organsiation Type"
                  name="organisation"
                  value={values.organisation}
                  register={register}
                  errors={errors}
                  options={[
                    "Think Tanks",
                    "Academia",
                    "Foundations and other Philanthropy Orgs",
                    "Development and Multilateral Orgs",
                    "Governmental and Semi",
                    "Impact Consultancies",
                    "M&E Orgs",
                  ]}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  size="small"
                  fullWidth
                  label="Partners"
                  defaultValue={values.partners || []}
                  placeholder=""
                  {...register("partners", {
                    required: `Type is required`,
                  })}
                  error={!!errors.partners}
                  select
                  SelectProps={{
                    multiple: true,
                  }}
                >
                  {data.map((partner: any, index: any) => (
                    <MenuItem key={index} value={partner._id}>
                      {partner.name}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.partners && (
                  <p
                    style={{ color: "red", fontSize: "small" }}
                  >{`${errors.partners.message}`}</p>
                )}{" "}
              </Grid>

              <Grid item xs={12} md={12}>
                <CustomizedMultilineTextField
                  placeholder="Description"
                  name="description"
                  register={register}
                  errors={errors}
                />
              </Grid>
              {/* 
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Twitter"
                  name="twitter"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Youtube"
                  name="youtube"
                  register={register}
                  errors={errors}
                />
              </Grid> */}
              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label=" Image (400px x 565px)"
                  name="image"
                  aspectRatio={400 / 565}
                />
              </Grid>
              <Grid item xs={12}>
                <FileUpload
                  register={register}
                  watch={watch}
                  setValue={setValue}
                  name="report"
                  label="Upload Downloadable Event Report"
                  previewWidth={1040}
                  previewHeight={375}
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

export default EditProgramsPage;
