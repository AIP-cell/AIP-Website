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
import { GalleryCategory, videoOrLink } from "@/utils/Enums";
import { CustomizedAipDropDown } from "../custom-fields/CustomizedDropDown";
import { useState } from "react";
import TemplateFormRepeater from "../custom-fields/FormRepeaterComponent";
import { Close as CloseIcon } from "@mui/icons-material";
import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import BlogsApi from "@/axios/BlogsApi";
import CustomizedMultipleImageUploader from "../custom-fields/CustomizedMultipleImageUploader";
import { VideoLinkFormRepeater } from "../form-repeater/VideoLink";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";
import GalleryApi from "@/axios/GalleryApi";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import GalleryVideoTemplateFormRepeater from "../custom-fields/GalleryVideoTemplateFormRepeater";
import GalleryImageTemplateFormRepeater from "../custom-fields/GalleryImageFormRepeater";
import { StorageUrl } from "@/utils/BaseUrl";
import { CustomizedDropDown } from "../custom-fields/CustomizedAipDropdown";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const yearSchema = z.object({
  title: z.string().nonempty({ message: "Required" }),
  category: z.string().nonempty({ message: "Required" }),

  description: z.any(),
  domain: z.string().nonempty({ message: "Required" }),
  typeOfContent: z.string().nonempty({ message: "Required" }),
  tags: z.array(z.string()).optional(),
  date: z.date(),
  image: z.any(),

  galleryImage: z
    .array(
      z.object({
        title: z.string().optional(),
        date: z.date(),

        image: z.any(),
      })
    )
    .optional(),

  galleryVideo: z
    .array(
      z.object({
        title: z.string().optional(),
        linkOrVideo: z.string().optional(),
        link: z.string().optional(),
        date: z.date(),

        video: z.any(),
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

export const EditGalleryPage = (
  { values }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const router = useRouter();
  console.log(values);
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
    defaultValues: {
      galleryImage: values?.gallery?.galleryImages?.map((image: any) => ({
        date: dayjs(image.date).toDate(),
        title: image.title,
        image: image.image,
      })),
      galleryVideo: values?.gallery?.galleryVideos?.map((video: any) => ({
        date: dayjs(video.date).toDate(),
        title: video.title,
        link: video?.link,
        linkOrVideo: video?.linkOrVideo,
        video: video.video,
      })),
      title: values.title,
      category: values.category,
      description: values.description,
      domain: values.domain,
      typeOfContent: values.typeOfContent,
      image: values.image,
      tags: values.tags,
      date: dayjs(values.date).toDate(),
    },
  });

  const { id } = useParams<{ id: string }>();

  //   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, checked } = event.target;

  //     setValue(name as keyof TyearSchema, checked);
  //   };
  //   const video = watch("linkOrVideo");

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await GalleryApi.update(id, values, reqAuthHeader());
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/galleries");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };
  //   const { fields, append, remove, replace } = useFieldArray<TyearSchema>({
  //     control,
  //     name: "links",
  //   });
  //   const handleFormSubmit = (values: any, index: number | null) => {
  //     if (index !== null) {
  //       const updatedFields = [...fields];
  //       updatedFields[index] = { ...updatedFields[index], ...values };

  //       replace(updatedFields);
  //       setSelectedBox({ index: null, data: null });
  //     } else {
  //       append(values);
  //     }
  //   };
  //   type DataType = {
  //     name?: string;
  //     link?: string;
  //   };

  //   type DefaultValues = {
  //     index: number | null;
  //     data: DataType | null;
  //   };

  //   const [selectedBox, setSelectedBox] = useState<DefaultValues>({
  //     index: null,
  //     data: null,
  //   });
  //   const handleBoxClick = (index: number) => {
  //     const data = getValues(`links.${index}`);

  //     setSelectedBox({ index, data });
  //   };

  //image
  type DataType = {
    title?: string;
    link?: string;
    linkOrVideo?: string;
    date?: Date;
    image?: File | null;
  };

  type DefaultValues = {
    index: number | null;
    data: DataType | null;
  };

  const { fields, append, remove, replace } = useFieldArray<TyearSchema>({
    control,
    name: "galleryImage",
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

  const [selectedBox, setSelectedBox] = useState<DefaultValues>({
    index: null,
    data: null,
  });

  const handleBoxClick = (index: number) => {
    const data = getValues(`galleryImage.${index}`);

    setSelectedBox({ index, data });
  };
  //video
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
    name: "galleryVideo",
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
    const data = getValues(`galleryVideo.${index}`);

    setSelectedVideoBox({ index, data });
  };

  const Video = styled("video")({
    width: "100%",
    height: "100%",
    objectFit: "contain",
  });

  const handleResetClick = () => {
    reset();
  };
  const galleryOptions = Object.entries(GalleryCategory).map(
    ([key, value]) => ({
      label: value,
      value: key,
    })
  );
  //   const handleReset = (field: any) => {
  //     field.onChange("");
  //   };

  //   const videoOrLinks = Object.entries(videoOrLink).map(([key, value]) => ({
  //     label: value,
  //     value: key,
  //   }));

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/galleries`}>
          <Typography>Gallery</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Gallery Informations" />
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
              <Grid item xs={6} md={6} style={{ marginTop: "20px" }}>
                <CustomizedAipDropDown
                  label="Category"
                  name="category"
                  value={values.category}
                  register={register}
                  errors={errors}
                  watch={watch}
                  options={galleryOptions}
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
                  label="Domain"
                  name="domain"
                  value={values?.domain}
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
                  value={values?.typeOfContent}
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
                <CustomizedMultilineTextField
                  placeholder="Description"
                  name="description"
                  register={register}
                  errors={errors}
                />
              </Grid>
              {/* <Grid item xs={12} md={12}>
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
              </Grid> */}
              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label="Thumbnail Image (295px x 265px)"
                  name="image"
                  aspectRatio={295 / 265}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <label>
                  Gallery Image &nbsp;(
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
                  <GalleryImageTemplateFormRepeater
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
                            height: "110px",
                            width: "170px",
                            textAlign: "center",
                            fontSize: "14px",
                            cursor: "pointer",
                            position: "relative",
                          }}
                          onClick={() => handleBoxClick(index)}
                        >
                          <Controller
                            name={`galleryImage.${index}.image`}
                            control={control}
                            render={({ field }) => (
                              <span
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                {field.value ? (
                                  typeof field.value === "string" ? (
                                    <img
                                      key={field.value}
                                      alt={field.value}
                                      className="single-file-image"
                                      src={
                                        StorageUrl +
                                        "/" +
                                        field.value.replaceAll("\\", "/")
                                      }
                                      style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                      }}
                                    />
                                  ) : (
                                    <img
                                      className="single-file-image"
                                      src={URL.createObjectURL(field.value)}
                                      alt="Uploaded Image"
                                      style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                      }}
                                    />
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
                            onClick={() => remove(index)}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  {errors.galleryImage && (
                    <span style={{ color: "red", marginTop: "8px" }}>
                      {errors.galleryImage.message}
                    </span>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <label>
                  Gallery Video &nbsp;(
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
                  <GalleryVideoTemplateFormRepeater
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
                            name={`galleryVideo.${index}.video`}
                            control={control}
                            render={({ field }) => (
                              <span
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: "100%",
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
                                      <Video controls>
                                        <source
                                          src={`${StorageUrl}/${field.value}`}
                                          type={`video/${field.value.split(".").pop()}`}
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </Video>
                                    </Box>
                                  ) : (
                                    <Box
                                      sx={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                      }}
                                    >
                                      <Video controls>
                                        <source
                                          src={URL.createObjectURL(field.value)}
                                          type={`video/${field.value.name.split(".").pop()}`}
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </Video>
                                    </Box>
                                  )
                                ) : (
                                  <span>No video available</span>
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
                  {errors.galleryVideo && (
                    <span style={{ color: "red", marginTop: "8px" }}>
                      {errors.galleryVideo.message}
                    </span>
                  )}
                </Box>
              </Grid>
              {/* <Grid item xs={12} md={12}>
                <label>Links</label>
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
              </Grid> */}
              {/* <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedAipDropDown
                  label="Link or Video"
                  name="linkOrVideo"
                  register={register}
                  errors={errors}
                  watch={watch}
                  options={videoOrLinks}
                />
              </Grid>
              {video == "Video" ? (
                <Grid item xs={12}>
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
                </Grid>
              ) : video === "Link" ? (
                <Grid item xs={12} md={12}>
                  <CustomizedTextField
                    label="Link"
                    name="videoLink"
                    placeholder="https://www.youtube.com/embed/f3bPWvdKyWg?si=UcxNeK4TDrnsUYzU"
                    register={register}
                    errors={errors}
                  />
                </Grid>
              ) : null} */}
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

export default EditGalleryPage;
