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
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import type { DatePickerProps } from "react-datepicker";

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";
import { CustomizedDatePicker } from "../custom-fields/CustomizedDatePicker";
import { CustomizedAipDropDown } from "../custom-fields/CustomizedDropDown";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";

import { useParams, useRouter } from "next/navigation";

import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { Box, Chip, IconButton, styled } from "@mui/material";
import { GalleryImageFormRepeater } from "../custom-fields/GalleryFormRepeater";
import { GalleryVideoFormRepeater } from "../custom-fields/GalleryVideoFormRepeater";
import AipResourceApi from "@/axios/AipResourceApi";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import { Category, domain, fileOrLink, TypeOfContent } from "@/utils/Enums";
import FileUpload from "../custom-fields/CustomizedFileUploader";
import { useState } from "react";
import GalleryVideoTemplateFormRepeater from "../custom-fields/GalleryVideoTemplateFormRepeater";
import { StorageUrl } from "@/utils/BaseUrl";
import { Close as CloseIcon } from "@mui/icons-material";
import GalleryImageTemplateFormRepeater from "../custom-fields/GalleryImageFormRepeater";
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
  tags: z.any(),
  category: z.string().nonempty({ message: "Required" }),
  domain: z.string().nonempty({ message: "Required" }),
  typeOfContent: z.string().nonempty({ message: "Required" }),
  description: z.string().optional(),
  date: z.date(),
  linkOrFile: z.string().nonempty({ message: "Required" }),
  fileLink: z.string().optional(),
  file: z.any(),

  image: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditAipResourcesPage = (
  { values }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    control,
    reset,
    getValues,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      category: values.category,
      tags: values.searchKeywords,
      typeOfContent: values.typeOfContent,
      title: values.title,
      description: values.description,
      linkOrFile: values?.linkOrFile,
      fileLink: values?.fileLink,
      file: values?.file,
      image: values.image,
      date: dayjs(values.date).toDate(),
    },
  });
  const { id } = useParams<{ id: string }>();

  const file = watch("linkOrFile");

  const defaultFile = values?.file;

  const onSubmit = async (values: TyearSchema) => {
    try {
      if (values.linkOrFile === "pdf") {
        if (!(values.file instanceof FileList) || values.file.length === 0) {
          if (values.file != null) {
            values.file = defaultFile;
          }
        }
      }
      const response = await AipResourceApi.update(id, values, reqAuthHeader());

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/aip-resources");
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
  const categoryOptions = Object.entries(Category).map(([key, value]) => ({
    label: value,
    value: key,
  }));
  // const domainOptions = Object.entries(domain).map(([key, value]) => ({
  //   label: value,
  //   value: key,
  // }));
  // const typeOfContentOptions = Object.entries(TypeOfContent).map(
  //   ([key, value]) => ({
  //     label: value,
  //     value: key,
  //   })
  // );
  const fileorlink = Object.entries(fileOrLink).map(([key, value]) => ({
    label: value,
    value: key,
  }));
  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/aip-resources`}>
          <Typography>AIP Resources</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="AIP Resources Informations" />
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
                <CustomizedAipDropDown
                  label="Category"
                  name="category"
                  value={values.category}
                  register={register}
                  errors={errors}
                  watch={watch}
                  options={categoryOptions}
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
                  value={values.domain}
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
                    "Books",
                    "Articles",
                    "PoV",
                    "White paper",
                    "Newsletter",
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedAipDropDown
                  label="Link or Pdf"
                  name="linkOrFile"
                  register={register}
                  value={values.linkOrFile}
                  errors={errors}
                  watch={watch}
                  options={fileorlink}
                />
              </Grid>
              {file == "pdf" ? (
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
              ) : file === "link" ? (
                <Grid item xs={12} md={12}>
                  <CustomizedTextField
                    label="Link"
                    name="fileLink"
                    placeholder="https://test.com"
                    register={register}
                    errors={errors}
                  />
                </Grid>
              ) : null}
              <Grid item xs={12} md={12}>
                <CustomizedMultilineTextField
                  placeholder="Description"
                  name="description"
                  register={register}
                  errors={errors}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label=" Image (400px x 565px)"
                  name="image"
                  aspectRatio={295 / 266}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <FileUpload
                  register={register}
                  watch={watch}
                  name="file"
                  label="Upload Downloadable Event Report"
                  previewWidth={1040}
                  previewHeight={375}
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
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default EditAipResourcesPage;
