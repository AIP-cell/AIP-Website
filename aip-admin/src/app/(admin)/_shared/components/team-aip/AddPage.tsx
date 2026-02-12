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

import { EditorState, convertToRaw } from "draft-js";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";

import { useRouter } from "next-nprogress-bar";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import VideoUploaderSingle from "@/views/forms/form-elements/file-uploader/videoUploader";
import { FormRepeater } from "../custom-fields/CustomizedFormRepeater";
import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  IconButton,
  styled,
  TextField,
} from "@mui/material";
import ReactDraftWysiwyg from "../react-draft-wysiwyg";
import toast from "react-hot-toast";
import draftToHtml from "draftjs-to-html";
import AipTeamApi from "@/axios/AipTeamApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { videoOrLink } from "@/utils/Enums";
import { CustomizedAipDropDown } from "../custom-fields/CustomizedDropDown";
import { useState } from "react";
import TemplateFormRepeater from "../custom-fields/FormRepeaterComponent";
import { Close as CloseIcon } from "@mui/icons-material";
import GalleryVideoTemplateFormRepeater from "../custom-fields/GalleryVideoTemplateFormRepeater";
import { StorageUrl } from "@/utils/BaseUrl";
import VideoTemplateFormRepeater from "../custom-fields/VideoTemplateFormRepeater";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ACCEPTED_VIDEO_TYPES = [
  "video/mp4",
  "video/mov",
  "video/webm",
  "video/ogg",
  "image/gif",
];

const yearSchema = z.object({
  name: z.string().nonempty({ message: "Required" }),
  organisation: z.string().nonempty({ message: "Required" }),
  coreFounder: z.boolean().optional(),
  founders: z.boolean().optional(),
  advisoryBoard: z.boolean().optional(),
  teamAIP: z.boolean().optional(),
  boardOfDirectors: z.boolean().optional(),
  experts: z.boolean().optional(),
  designation: z.string().nonempty({ message: "Required" }),
  description: z.any(),
  tags: z.array(z.string()).optional(),
  quote: z.string().optional(),
  linkedln: z.string().optional(),
  twitter: z.string().optional(),
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
  videos: z
    .array(
      z.object({
        title: z.string().optional(),
        linkOrVideo: z.string().optional(),
        link: z.string().optional(),

        video: z.any(),
        image: z.any(),
      })
    )
    .optional(),
  links: z
    .array(
      z.object({
        link: z.any(),
        name: z.any(),
      })
    )
    .optional(),

  // selectedWorks: z
  //   .array(
  //     z.object({
  //       title: z.any(),
  //       description: z.any(),
  //       image: z.any(),
  //       date: z.any(),
  //     })
  //   )
  //   .optional(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddTeamAipPage = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    control,
    reset,
    watch,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
  });
  console.log(errors);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setValue(name as keyof TyearSchema, checked);
  };

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await AipTeamApi.add(
        {
          ...values,
          description: draftToHtml(
            convertToRaw(values.description.getCurrentContent())
          ),
        },
        reqAuthHeader()
      );
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/team-aip/people");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };
  const { fields, append, remove, replace } = useFieldArray<TyearSchema>({
    control,
    name: "links",
  });
  const handleFormSubmit = (values: any, index: number | null) => {
    if (index !== null) {
      const updatedFields = [...fields];
      updatedFields[index] = { ...updatedFields[index], ...values };

      replace(updatedFields);
      setSelectedBox({ index: null, data: null });
    } else {
      append(values);
    }
  };
  type DataType = {
    name?: string;
    link?: string;
  };

  type DefaultValues = {
    index: number | null;
    data: DataType | null;
  };

  const [selectedBox, setSelectedBox] = useState<DefaultValues>({
    index: null,
    data: null,
  });
  const handleBoxClick = (index: number) => {
    const data = getValues(`links.${index}`);

    setSelectedBox({ index, data });
  };

  const handleResetClick = () => {
    reset();
  };

  const handleReset = (field: any) => {
    field.onChange("");
  };

  const videoOrLinks = Object.entries(videoOrLink).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  type VideoDataType = {
    title?: string;
    date?: Date;
    video?: File | null;
  };

  type VideoDefaultValues = {
    index: number | null;
    data: VideoDataType | null;
  };
  const {
    fields: videoFields,
    append: apendVideo,
    remove: removeVideo,
    replace: replaceVideo,
  } = useFieldArray<TyearSchema>({
    control,
    name: "videos",
  });
  const handleVideoFormSubmit = (values: any, index: number | null) => {
    if (index !== null) {
      const updatedFields = [...videoFields];
      updatedFields[index] = { ...updatedFields[index], ...values };

      replaceVideo(updatedFields);
      setSelectedVideoBox({ index: null, data: null });
    } else {
      apendVideo(values);
    }
  };

  const [selectedVideoBox, setSelectedVideoBox] = useState<VideoDefaultValues>({
    index: null,
    data: null,
  });
  const handleBoxVideoClick = (index: number) => {
    const data = getValues(`videos.${index}`);

    setSelectedVideoBox({ index, data });
  };

  const Video = styled("video")({
    width: "100%",
    height: "100%",
    objectFit: "contain",
  });

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/team-aip/people`}>
          <Typography>Team AIP</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Team AIP Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              {/* <Grid item xs={12} md={12}> */}
              {/* <CustomizedDropDown
                  label="Category"
                  name="category"
                  register={register}
                  errors={errors}
                  options={[
                    "Core Founders",
                    "Founders",
                    "Advisory Board",
                    "Team AIP",
                    "Experts",
                  ]}
                />
              </Grid> */}
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
                {/* {errors.tags && (
                  <p
                    style={{ color: "red", fontSize: "small" }}
                  >{`⁠ ${errors.tags.message}`}</p>
                )} */}
              </Grid>

              <Grid item xs={12} md={12}>
                <FormGroup
                  row
                  style={{ justifyContent: "space-between", width: "100%" }}
                >
                  <FormControlLabel
                    label="Core Founders"
                    control={
                      <Checkbox
                        size="small"
                        name="coreFounder"
                        onChange={handleCheckboxChange}
                        checked={getValues("coreFounder")}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Founders"
                    control={
                      <Checkbox
                        name="founders"
                        onChange={handleCheckboxChange}
                        checked={getValues("founders")}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Advisory Board"
                    control={
                      <Checkbox
                        name="advisoryBoard"
                        onChange={handleCheckboxChange}
                        checked={getValues("advisoryBoard")}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Team AIP"
                    control={
                      <Checkbox
                        name="teamAIP"
                        onChange={handleCheckboxChange}
                        checked={getValues("teamAIP")}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Board of Directors"
                    control={
                      <Checkbox
                        name="boardOfDirectors"
                        onChange={handleCheckboxChange}
                        checked={getValues("boardOfDirectors")}
                      />
                    }
                  />
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
                </FormGroup>
              </Grid>

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
                  label="Designation"
                  name="designation"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Organisation Name"
                  name="organisation"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                  name="description"
                  control={control}
                  defaultValue={EditorState.createEmpty()}
                  render={({ field }) => (
                    <ReactDraftWysiwyg
                      placeholder="Description"
                      editorStyle={{
                        border: "1px solid grey",
                        borderRadius: "5px",
                        padding: "15px",
                      }}
                      editorState={field.value}
                      onEditorStateChange={(data) => field.onChange(data)}
                      toolbar={{
                        options: ["inline", "link"],
                        inline: {
                          options: ["bold", "italic"],
                          bold: { className: "toolbar-button" },
                          italic: { className: "toolbar-button" },
                        },
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Quote"
                  name="quote"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Linkedln"
                  name="linkedln"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Twitter"
                  name="twitter"
                  register={register}
                  errors={errors}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label=" Image (400px x 470px)"
                  name="image"
                  aspectRatio={400 / 470}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <label>
                  Links &nbsp;(
                  <span style={{ color: "red" }}>
                    &nbsp;Changes will not be saved until you click 'Add'
                    button&nbsp;
                  </span>
                  )
                </label>
                <Box
                  sx={{
                    border: "2px dotted #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <TemplateFormRepeater
                    onSubmitCallback={handleFormSubmit}
                    defaultValues={selectedBox}
                  />
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    style={{
                      gap: "3px",
                      marginTop: "10px",
                    }}
                  >
                    {fields.map((field, index) => (
                      <Grid
                        item
                        key={field.id}
                        style={{
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            padding: "8px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "8px",
                            boxShadow: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "80px",
                            width: "150px",
                            textAlign: "center",
                            fontSize: "14px",
                            cursor: "pointer",
                            position: "relative",
                          }}
                          onClick={() => handleBoxClick(index)}
                        >
                          <Controller
                            name={`links.${index}.name`}
                            control={control}
                            render={({ field }) => <span>{field.value}</span>}
                          />
                          <Controller
                            name={`links.${index}.link`}
                            control={control}
                            render={({ field }) => <span></span>}
                          />
                          <IconButton
                            size="small"
                            sx={{
                              position: "absolute",
                              top: "4px",
                              right: "4px",
                            }}
                            onClick={() => remove(index)}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  {errors.links && (
                    <span style={{ color: "red", marginTop: "8px" }}>
                      {errors.links.message}
                    </span>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <label>
                  Videos &nbsp;(
                  <span style={{ color: "red" }}>
                    &nbsp;Changes will not be saved until you click 'Add'
                    button&nbsp;
                  </span>
                  )
                </label>
                <Box
                  sx={{
                    border: "2px dotted #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <VideoTemplateFormRepeater
                    onSubmitCallback={handleVideoFormSubmit}
                    defaultValues={selectedVideoBox}
                  />
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    style={{
                      gap: "3px",
                      marginTop: "10px",
                    }}
                  >
                    {videoFields.map((field, index) => (
                      <Grid
                        item
                        key={field.id}
                        style={{
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            padding: "8px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "8px",
                            boxShadow: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "120px",
                            width: "190px",
                            textAlign: "center",
                            fontSize: "14px",
                            cursor: "pointer",
                            position: "relative",
                          }}
                          onClick={() => handleBoxVideoClick(index)}
                        >
                          <Controller
                            name={`videos.${index}.image`}
                            control={control}
                            render={({ field }) => (
                              <span
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {field.value ? (
                                  typeof field.value === "string" ? (
                                    <Box
                                      sx={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      <img
                                        src={`${StorageUrl}/${field.value}`}
                                        alt="Video Thumbnail"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                          borderRadius: "8px",
                                        }}
                                      />
                                    </Box>
                                  ) : (
                                    <Box
                                      sx={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      <img
                                        src={URL.createObjectURL(field.value)}
                                        alt="Video Thumbnail"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                          borderRadius: "8px",
                                        }}
                                      />
                                    </Box>
                                  )
                                ) : (
                                  <span>No image available</span>
                                )}
                              </span>
                            )}
                          />
                          {/* <Controller
                            name={`catchupDetails.${index}.image`}
                            control={control}
                            render={({ field }) => <span></span>}
                          /> */}
                          <IconButton
                            size="small"
                            sx={{
                              position: "absolute",
                              top: "4px",
                              right: "4px",
                            }}
                            onClick={() => removeVideo(index)}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  {errors.videos && (
                    <span style={{ color: "red", marginTop: "8px" }}>
                      {errors.videos.message}
                    </span>
                  )}
                </Box>
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

export default AddTeamAipPage;
