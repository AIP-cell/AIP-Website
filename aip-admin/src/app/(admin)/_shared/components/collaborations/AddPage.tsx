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

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";

import { useRouter } from "next-nprogress-bar";

import FileUpload from "../custom-fields/CustomizedFileUploader";

import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { Chip, MenuItem, TextField } from "@mui/material";
import CollaborationApi from "@/axios/CollaborationApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import toast from "react-hot-toast";
import {
  categoryCollaboration,
  TypeOfContentCollaboration,
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
  date: z.date(),
  tags: z.any(),
  file: z.any(),
  category: z.string().nonempty({ message: "Required" }),
  typeOfContent: z.string().nonempty({ message: "Required" }),
  description: z.string().nonempty({ message: "Required" }),
  image: z.any().refine(
    (value) => {
      const acceptedTypes = ACCEPTED_IMAGE_TYPES;

      const isTypeAccepted = acceptedTypes.includes(value?.type) || !value;

      return isTypeAccepted;
    },
    {
      message: "Invalid image format",
    }
  ),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddCollaborationPage = (
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
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
  });

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await CollaborationApi.add(values);

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/collaborations");
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
        <Link href={`/admin/collaborations`}>
          <Typography>Collaborations</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Collaborations Informations" />
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
                <CustomizedTextField
                  label="Title"
                  name="title"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedDropDown
                  label="Category"
                  name="category"
                  register={register}
                  errors={errors}
                  options={[
                    "Reports",
                    "Book",
                    "Convening",
                    "Presentation",
                    "Other",
                  ]}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedDropDown
                  label="Type of content"
                  name="typeOfContent"
                  register={register}
                  errors={errors}
                  options={[
                    "Thematic Workshop",
                    "Panel Discussions",
                    "Fireside Chats",
                    "Roundtable Discussions",
                    "Reports",
                  ]}
                />
              </Grid>

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
                  label="Image (400px x 565px)"
                  name="image"
                  aspectRatio={400 / 565}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <DropzoneWrapper>
                  <Typography variant="h6" sx={{ mb: 2.5 }}>
                    Video :
                    {!!errors.video && (
                      <span style={{ color: "red", fontSize: "14px" }}>
                        Invalid video format {!!errors.video}
                      </span>
                    )}
                  </Typography>
                  <Controller
                    name="video"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <div>
                        <VideoUploaderSingle
                          file={field.value}
                          setFile={field.onChange}
                          error={errors.video}
                        />
                        <Button
                          sx={{ mt: 2, color: "red" }}
                          size="small"
                          color="error"
                          variant="outlined"
                          type="button"
                          onClick={() => handleReset(field)}
                        >
                          Reset Video
                        </Button>
                      </div>
                    )}
                  />
                </DropzoneWrapper>
              </Grid> */}
              {/* 
              <Grid item xs={12}>
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

export default AddCollaborationPage;
