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

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";

import { useParams, useRouter } from "next/navigation";
import SelectedWorksApi from "@/axios/AipTeamSelectedWorkApi";

import { MenuItem, TextField } from "@mui/material";

import toast from "react-hot-toast";

import AipTeamApi from "@/axios/AipTeamApi";
import { DatePickerProps } from "react-datepicker";
import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

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
  curatedResource: z.string().nonempty({ message: "Required" }),
  expert: z.string().nonempty({ message: "Required" }),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditSelectWorkPage = (
  { values, experts, works }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const router = useRouter();
  const [matchingResources, setMatchingResources] = useState([]);
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {},
  });
  const { id } = useParams<{ id: string }>();
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await SelectedWorksApi.update(
        id,
        values,
        reqAuthHeader()
      );
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/team-aip/selected-works");
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

  const handleExpertChange = (event: any) => {
    const selectedValue = event.target.value;
    const matchedCategories = works.filter(
      (resource: any) => resource.expert === selectedValue
    );
    setMatchingResources(matchedCategories);
  };

  useEffect(() => {
    if (values?.expert) {
      handleExpertChange({ target: { value: values.expert } });
    }
  }, [values?.expert]);

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/team-aip/selected-works`}>
          <Typography>Team AIP</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Expert Selected Works" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={6} md={6}>
                <label>Expert</label>
                <TextField
                  sx={{ borderRadius: "6px 0px 0px 6px" }}
                  style={{ color: "green" }}
                  size="small"
                  fullWidth
                  defaultValue={values.expert}
                  {...register("expert", {
                    required: "Please select level",
                  })}
                  error={!!errors.expert}
                  onChange={handleExpertChange}
                  select
                >
                  {experts?.map((expert: any, index: any) => (
                    <MenuItem key={index} value={expert._id}>
                      {expert.name}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.expert && (
                  <p
                    style={{ color: "red", fontSize: "small" }}
                  >{`${errors.expert.message}`}</p>
                )}
              </Grid>
              <Grid item xs={6} md={6}>
                <label>Works</label>
                <TextField
                  sx={{ borderRadius: "6px 0px 0px 6px" }}
                  style={{ color: "green" }}
                  size="small"
                  defaultValue={values.curatedResource}
                  fullWidth
                  {...register("curatedResource", {
                    required: "Please select level",
                  })}
                  error={!!errors.curatedResource}
                  select
                >
                  {matchingResources?.map((resource: any, index: any) => (
                    <MenuItem key={index} value={resource._id}>
                      {resource.title}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.curatedResource && (
                  <p
                    style={{ color: "red", fontSize: "small" }}
                  >{`${errors.curatedResource.message}`}</p>
                )}
              </Grid>
              {/* <Grid item xs={6} md={6}>
                <label>Works</label>
                <CustomizedDropDown
                  name="category"
                  register={register}
                  errors={errors}
                  options={["Work 1", "Work 2", "Work 3"]}
                />
              </Grid> */}

              {/* <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Link"
                  name="link"
                  register={register}
                  errors={errors}
                />
              </Grid> */}

              {/* <Grid item xs={12}>
                <FormRepeater
                  label="Link"
                  control={control}
                  register={register}
                  controlName="link"
                  title={(index) => register(`link.${index}.link`)}
                >
                  {(index: any) => (
                    <Grid item xs={12} md={12} key={index}>
                      <Grid item xs={12}>
                        <label htmlFor={`link.${index}.link`}>Link</label>
                        <TextField
                          size="small"
                          fullWidth
                          placeholder="Enter title"
                          {...register(`link.${index}.link`)}
                          error={!!errors?.link?.[index]?.link}
                        />
                      </Grid>
                    </Grid>
                  )}
                </FormRepeater>
              </Grid>
              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label=" Image"
                  name="image"
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedDropDown
                  label="Link or File"
                  name="linkOrFile"
                  register={register}
                  errors={errors}
                  watch={watch}
                  options={["File", "Link"]}
                />
              </Grid>
              {file == "File" ? (
                <Grid item xs={12}>
                  <FileUpload
                    register={register}
                    watch={watch}
                    name="file"
                    label="Upload File"
                    previewWidth={1040}
                    previewHeight={375}
                  />
                </Grid>
              ) : file === "Link" ? (
                <Grid item xs={12} md={12}>
                  <CustomizedTextField
                    label="Link"
                    name="link"
                    register={register}
                    errors={errors}
                  />
                </Grid>
              ) : null}
              <Grid item xs={12} md={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedDropDown
                  label="Link or Video"
                  name="linkOrVideo"
                  register={register}
                  errors={errors}
                  watch={watch}
                  options={["Video", "Link"]}
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
                    name="link"
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

export default EditSelectWorkPage;
