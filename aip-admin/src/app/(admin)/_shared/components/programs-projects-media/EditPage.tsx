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
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import type { DatePickerProps } from "react-datepicker";

import { useParams, useRouter } from "next/navigation";

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";
import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";
import ProjectAndProgramsGalleryApi from "@/axios/ProjectAndProgramsGalleryApi";
import toast from "react-hot-toast";
import ProjectAndProgramsMediaApi from "@/axios/ProjectAndProgramsMediaApi";
import dayjs from "dayjs";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const yearSchema = z.object({
  description: z.string().nonempty({ message: "Required" }),
  title: z.string().nonempty({ message: "Required" }),
  link: z.string().nonempty({ message: "Required" }),
  date: z.any(),
  image: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditProgramMediaPage = (
  { values }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  console.log(values);
  const {
    handleSubmit,
    register,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      date: dayjs(values.media.at(0).date).toDate(),
      image: values.media.at(0).image,
      link: values.media.at(0).link,
      title: values.media.at(0).title,
      description: values.media.at(0).description,
    },
  });
  const mediaId = values._id;
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await ProjectAndProgramsMediaApi.updateCasestudies(
        id,
        values
      );

      if (response.data.success) {
        toast.success(response.data.message);
        router.push(`/admin/projects-programs/media/` + mediaId);
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
        <Link href={`/admin/projects-programs/media/` + mediaId}>
          <Typography>Media</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Project & Programs Media Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={3} md={3}>
                <label>Date</label>
                <CustomizedDatePickers
                  control={control}
                  name="date"
                  label="Date"
                  errors={errors}
                  popperPlacement={popperPlacement}
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
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Link"
                  name="link"
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
                  label=" Image (295px x 265px)"
                  name="image"
                  aspectRatio={295 / 265}
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

export default EditProgramMediaPage;
