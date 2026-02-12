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

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";
import { CustomizedDatePicker } from "../custom-fields/CustomizedDatePicker";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";

import { useRouter } from "next-nprogress-bar";

import FileUpload from "../custom-fields/CustomizedFileUploader";
import { PartnershipFormRepeater } from "../custom-fields/PartnershipFormRepeater";
import { LaunchFormRepeater } from "../custom-fields/LaunchFormRepeater";
import { GalleryImageFormRepeater } from "../custom-fields/GalleryFormRepeater";
import { MediaFormRepeater } from "../custom-fields/MediaFormRepeater";
import { TestimonialFormRepeater } from "../custom-fields/TestimonialFormRepeater";

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
  partnershipDetails: z
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
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddCollaborationPartnershipPage = ({
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

  const mutation = useMutation({
    // mutationFn: (values: TyearSchema) => PageApi.add(values),
    // onSuccess: (response) => {
    // if(response.data.success == true){
    //   toast.success(response.data.message);
    //   router.push('/admin/about');
    // }
    // },
    // onError: () => {
    //   toast.error("Error submitting form");
    // },
  });

  const onSubmit = async (values: TyearSchema) => {
    // if (values.image instanceof File) {
    //   values.image = await fileToBase64(values.image);
    // }
    // mutation.mutate(values);
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
        <Link href={`/admin/collaborations/partnership`}>
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
              <Grid item xs={12}>
                <PartnershipFormRepeater
                  label={"Partnership"}
                  control={control}
                  register={register}
                  controlName={"partnership"}
                  errors={errors}
                  image={(index) =>
                    register(`partnershipDetails.${index}.image`)
                  }
                  link={(index) => register(`partnershipDetails.${index}.link`)}
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

export default AddCollaborationPartnershipPage;
