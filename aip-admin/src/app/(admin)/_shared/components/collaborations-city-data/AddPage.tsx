"use client";

import Link from "next/link";

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

import { PartnershipFormRepeater } from "../custom-fields/PartnershipFormRepeater";
import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import VideoUploaderSingle from "@/views/forms/form-elements/file-uploader/videoUploader";
import { CatchUpFormRepeater } from "../custom-fields/CatchUpByFormRepeater";
import { Box, IconButton, MenuItem, TextField } from "@mui/material";
import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import { CustomizedDatePicker } from "../custom-fields/CustomizedDatePicker";
import FileUpload from "../custom-fields/CustomizedFileUploader";
import CollaborationApi from "@/axios/CollaborationApi";
import toast from "react-hot-toast";
import { CustomizedTimePicker } from "../custom-fields/CustomizedTimePicker";
import CollaborationCityApi from "@/axios/CollaborationCityApi";
import { videoOrLink } from "@/utils/Enums";
import { CustomizedDropDown } from "../custom-fields/CustomizedAipDropdown";
import { CustomizedAipDropDown } from "../custom-fields/CustomizedDropDown";
import { useState } from "react";
import CatchUpTemplateFormRepeater from "../custom-fields/CatchUpFormRepeater";
import { Close as CloseIcon } from "@mui/icons-material";
import OrganisedByTemplateFormRepeater from "../custom-fields/OrganisedByFormRepeater";
import { StorageUrl } from "@/utils/BaseUrl";

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
  linkOrVideo: z.string().optional(),
  name: z.string().nonempty({ message: "Required" }),
  youtube: z.string().optional(),
  twitter: z.string().optional(),
  videoLink: z.string().optional(),
  organisationDetails: z
    .array(
      z.object({
        image: z.any().refine(
          (value) => {
            const acceptedTypes = ACCEPTED_IMAGE_TYPES;

            const isTypeAccepted =
              acceptedTypes.includes(value?.type) || !value;

            return isTypeAccepted;
          },
          {
            message: "Invalid image format",
          }
        ),
        link: z.string().nonempty({ message: "Required" }),
      })
    )
    .optional(),
  catchupDetails: z
    .array(
      z.object({
        image: z.any(),
        link: z.string().nonempty({ message: "Required" }),
      })
    )
    .optional(),

  fromDate: z.date({ required_error: "From date is required" }),
  toDate: z.date({ required_error: "To date is required" }),
  time: z.date({ required_error: "Time is required" }),
  partners: z.any(),
  file: z.any(),

  video: z.any(),
  link: z.string().optional(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddCollaborationsCityDataByPage = (
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
    setValue,
    getValues,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
  });
  const { id } = useParams<{ id: string }>();

  const video = watch("linkOrVideo");

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await CollaborationCityApi.add(values, id);

      if (response.data.success) {
        toast.success(response.data.message);
        router.push(`/admin/collaborations/city/` + id);
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };

  type DataType = {
    link?: string;
    image?: File | null;
  };

  type DefaultValues = {
    index: number | null;
    data: DataType | null;
  };

  const {
    fields: catchupFields,
    append: appendCatchup,
    remove: removeCatchup,
    replace: replaceCatchup,
  } = useFieldArray<TyearSchema>({
    control,
    name: "catchupDetails",
  });

  const handleFormSubmit = (values: any, index: number | null) => {
    if (index !== null) {
      const updatedFields = [...catchupFields];
      updatedFields[index] = { ...updatedFields[index], ...values };

      replaceCatchup(updatedFields);
      setSelectedBox({ index: null, data: null });
    } else {
      appendCatchup(values);
    }
  };
  const [selectedBox, setSelectedBox] = useState<DefaultValues>({
    index: null,
    data: null,
  });

  const handleBoxClick = (index: number) => {
    const data = getValues(`catchupDetails.${index}`);

    setSelectedBox({ index, data });
  };

  const {
    fields: organisationFields,
    append: appendOrganisation,
    remove: removeOrganisation,
    replace: replaceOrganisation,
  } = useFieldArray<TyearSchema>({
    control,
    name: "organisationDetails",
  });

  const handleOrganisationFormSubmit = (values: any, index: number | null) => {
    if (index !== null) {
      const updatedFields = [...organisationFields];
      updatedFields[index] = { ...updatedFields[index], ...values };

      replaceOrganisation(updatedFields);
      setOrgSelectedBox({ index: null, data: null });
    } else {
      appendOrganisation(values);
    }
  };

  const [orgSelectedBox, setOrgSelectedBox] = useState<DefaultValues>({
    index: null,
    data: null,
  });

  const handleOrgBoxClick = (index: number) => {
    const data = getValues(`organisationDetails.${index}`);

    setOrgSelectedBox({ index, data });
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

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/collaborations/city/` + id}>
          <Typography>City</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Collaboration City Details" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="City Name"
                  name="name"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={4} md={4}>
                <label>From Date</label>
                <CustomizedDatePickers
                  control={control}
                  name="fromDate"
                  label="From Date"
                  errors={errors}
                  popperPlacement={popperPlacement}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <label>To Date</label>
                <CustomizedDatePickers
                  control={control}
                  name="toDate"
                  label="To Date"
                  errors={errors}
                  popperPlacement={popperPlacement}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <label>Time</label>
                <CustomizedTimePicker
                  control={control}
                  name="time"
                  label="Time"
                  errors={errors}
                  popperPlacement={popperPlacement}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <label>Organisation Details</label>
                <Box
                  sx={{
                    border: "2px dotted #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <OrganisedByTemplateFormRepeater
                    onSubmitCallback={handleOrganisationFormSubmit}
                    defaultValues={orgSelectedBox}
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
                    {organisationFields.map((field, index) => (
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
                            overflow: "hidden",
                          }}
                          onClick={() => handleOrgBoxClick(index)}
                        >
                          <Controller
                            name={`organisationDetails.${index}.image`}
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
                          <IconButton
                            size="small"
                            sx={{
                              position: "absolute",
                              top: "4px",
                              right: "4px",
                            }}
                            onClick={() => removeOrganisation(index)}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Youtube Link"
                  name="youtube"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Twitter Link"
                  name="twitter"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, marginBottom: "20px" }}
                >
                  Partners:
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  defaultValue={[]}
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
                  {values.map((partner: any, index: any) => (
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
                <Divider />
              </Grid>

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
              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <FileUpload
                  register={register}
                  watch={watch}
                  name="file"
                  setValue={setValue}
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

export default AddCollaborationsCityDataByPage;
