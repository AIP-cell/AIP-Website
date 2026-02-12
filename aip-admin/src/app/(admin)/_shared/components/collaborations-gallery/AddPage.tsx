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

import { useParams, useRouter } from "next/navigation";

import dayjs from "dayjs";
import CollaborationGalleryApi from "@/axios/CollaborationGalleryApi";
import toast from "react-hot-toast";
import { Box, IconButton, styled } from "@mui/material";
import GalleryVideoTemplateFormRepeater from "../custom-fields/GalleryVideoTemplateFormRepeater";
import { useState } from "react";
import { StorageUrl } from "@/utils/BaseUrl";
import { Close as CloseIcon } from "@mui/icons-material";
import GalleryImageTemplateFormRepeater from "../custom-fields/GalleryImageFormRepeater";

const yearSchema = z.object({
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
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddCollaborationsGalleryPage = (
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
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      galleryImage: values?.at(0).gallery.galleryImages?.map((image: any) => ({
        date: dayjs(image.date).toDate(),
        title: image.title,
        image: image.image,
      })),
      galleryVideo: values?.at(0).gallery.galleryVideos?.map((video: any) => ({
        date: dayjs(video.date).toDate(),
        title: video.title,
        link: video?.link,
        linkOrVideo: video?.linkOrVideo,
        video: video.video,
      })),
    },
  });

  const Id = values.at(0).collaborationId;

  const { id } = useParams<{ id: string }>();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await CollaborationGalleryApi.add(id, values);

      if (response.data.success) {
        toast.success(response.data.message);
        router.push(`/admin/collaborations/city/` + Id);
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };
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

  const handleReset = (field: any) => {
    field.onChange("");
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/collaborations/city/` + Id}>
          <Typography>City</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Collaborations Gallery Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
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

export default AddCollaborationsGalleryPage;
