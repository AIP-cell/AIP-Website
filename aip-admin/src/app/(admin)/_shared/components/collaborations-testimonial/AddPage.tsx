"use client";

import Link from "next/link";

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

import type { DatePickerProps } from "react-datepicker";

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";

import { useParams, useRouter } from "next/navigation";

import CollaborationTestimonialApi from "@/axios/CollaborationTestimonialApi";
import toast from "react-hot-toast";

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
  description: z.string().nonempty({ message: "Required" }),
  designation: z.string().nonempty({ message: "Required" }),
  name: z.string().nonempty({ message: "Required" }),
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

export const AddCollaborationsTestimonialPage = ({
  popperPlacement,
}: {
  popperPlacement: DatePickerProps["popperPlacement"];
}) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
  });

  const { id } = useParams<{ id: string }>();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await CollaborationTestimonialApi.add(id, values);

      if (response.data.success) {
        toast.success(response.data.message);
        router.push(`/admin/collaborations/`);
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
        <Link href={`/admin/collaborations/`}>
          <Typography>Gallery of voices</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Collaboration Gallery Of Voices" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
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
                  label="Organisation"
                  name="designation"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedMultilineTextField
                  placeholder="Quote"
                  name="description"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label=" Image (295px x 345px)"
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

export default AddCollaborationsTestimonialPage;
