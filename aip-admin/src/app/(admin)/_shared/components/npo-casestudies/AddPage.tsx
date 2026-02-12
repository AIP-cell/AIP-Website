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
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";
import FileUpload from "../custom-fields/CustomizedFileUploader";
import { FormRepeater } from "../custom-fields/CustomizedFormRepeater";
import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";
import VideoUploaderSingle from "@/views/forms/form-elements/file-uploader/videoUploader";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import NpoCaseStudiesApi from "@/axios/NpoCaseStudiesApi";
import toast from "react-hot-toast";
import { useRouter } from "next-nprogress-bar";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { videoOrLink } from "@/utils/Enums";
import { CustomizedAipDropDown } from "../custom-fields/CustomizedDropDown";
import TemplateFormRepeater from "../custom-fields/FormRepeaterComponent";
import { Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import GalleryVideoTemplateFormRepeater from "../custom-fields/GalleryVideoTemplateFormRepeater";
import { StorageUrl } from "@/utils/BaseUrl";
import GalleryImageTemplateFormRepeater from "../custom-fields/GalleryImageFormRepeater";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const yearSchema = z.object({
  title: z.string().nonempty({ message: "Required" }),
  description: z.string().nonempty({ message: "Required" }),
  organisation: z.string().optional(),
  fileLink: z.string().optional(),
  videoLink: z.string().optional(),
  galleryImage: z
    .array(
      z.object({
        title: z.string(),
        date: z.date(),

        image: z.any(),
      })
    )
    .optional(),

  galleryVideo: z
    .array(
      z.object({
        title: z.string().nonempty({ message: "Required" }),
        link: z.string(),
        linkOrVideo: z.string().nonempty({ message: "Required" }),
        date: z.date(),

        video: z.any(),
      })
    )
    .optional(),
  video: z.any(),
  file: z.any(),
  tags: z.any(),
  linkOrVideo: z.string().optional(),
  isLinkOrPdf: z.string().optional(),
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
  links: z
    .array(
      z.object({
        link: z.any(),
        name: z.any(),
      })
    )
    .optional(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddNpoCasestudiesPage = () => {
  const {
    register,
    control,
    reset,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
  });

  console.log("hhuhyyhyhyh", errors);

  const handleReset = (field: any) => {
    field.onChange("");
  };

  const router = useRouter();

  const video = watch("linkOrVideo");
  const link = watch("isLinkOrPdf");

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await NpoCaseStudiesApi.add(values, reqAuthHeader());

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/npo/casestudies");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };

  const {
    fields: linkFields,
    append: linkAppend,
    remove: linkRemove,
    replace: linkReplace,
  } = useFieldArray<TyearSchema>({
    control,
    name: "links",
  });
  const handleLinkFormSubmit = (values: any, index: number | null) => {
    if (index !== null) {
      const updatedFields = [...linkFields];
      updatedFields[index] = { ...updatedFields[index], ...values };

      linkReplace(updatedFields);
      setSelectedLinkBox({ index: null, data: null });
    } else {
      linkAppend(values);
    }
  };
  type DataLinkType = {
    name?: string;
    link?: string;
  };

  type LinkDefaultValues = {
    index: number | null;
    data: DataLinkType | null;
  };

  const [selectedLinkBox, setSelectedLinkBox] = useState<LinkDefaultValues>({
    index: null,
    data: null,
  });
  const handleLinkBoxClick = (index: number) => {
    const data = getValues(`links.${index}`);

    setSelectedLinkBox({ index, data });
  };

  //image
  type DataType = {
    title?: string;
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
    link?: string;
    linkOrVideo?: string;
    date?: Date;
    image?: File | null;
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

  const videoOrLinks = Object.entries(videoOrLink).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/npo/casestudies`}>
          <Typography>Case studies</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Case studies Informations" />
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
                <CustomizedTextField
                  label="Title"
                  name="title"
                  register={register}
                  errors={errors}
                />
              </Grid>

              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="NPO Organisation Name"
                  name="organisation"
                  register={register}
                  errors={errors}
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
                  label=" Image (400px x 320px)"
                  name="image"
                  aspectRatio={400 / 320}
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
                    onSubmitCallback={handleLinkFormSubmit}
                    defaultValues={selectedLinkBox}
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
                    {linkFields.map((field, index) => (
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
                            textAlign: "center",
                            fontSize: "14px",
                            cursor: "pointer",
                            position: "relative",
                          }}
                          onClick={() => handleLinkBoxClick(index)}
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
                            onClick={() => linkRemove(index)}
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
              <Grid item xs={12} md={12}>
                <TextField
                  size="small"
                  fullWidth
                  label="Link or Pdf"
                  defaultValue=""
                  placeholder=""
                  {...register("isLinkOrPdf", {
                    required: `Type is required`,
                  })}
                  error={!!errors.isLinkOrPdf}
                  select
                >
                  <MenuItem value="link">Link</MenuItem>
                  <MenuItem value="pdf">Pdf</MenuItem>
                </TextField>
                {errors.isLinkOrPdf && (
                  <p
                    style={{ color: "red", fontSize: "small" }}
                  >{`${errors.isLinkOrPdf.message}`}</p>
                )}{" "}
              </Grid>
              {link == "link" && (
                <Grid item xs={12} md={12}>
                  <CustomizedTextField
                    label="Link"
                    name="fileLink"
                    placeholder="https://test.com"
                    register={register}
                    errors={errors}
                  />
                </Grid>
              )}
              {link == "pdf" && (
                <Grid item xs={12}>
                  <FileUpload
                    register={register}
                    watch={watch}
                    name="file"
                    setValue={setValue}
                    label="Upload File"
                    previewWidth={1040}
                    previewHeight={375}
                  />
                </Grid>
              )}
              <Grid item xs={12} md={12}>
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
              ) : null}

              <Grid item xs={12}>
                Gallery
                <Divider></Divider>
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

export default AddNpoCasestudiesPage;
