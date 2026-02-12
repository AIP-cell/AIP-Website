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

import { useRouter } from "next-nprogress-bar";

import { LaunchFormRepeater } from "../custom-fields/LaunchFormRepeater";

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
  launchDetails: z
    .array(
      z.object({
        fromTime: z.any(),
        toTime: z.any(),

        location: z.string().nonempty({ message: "Required" }),
        date: z.any(),
      })
    )
    .optional(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddCollaborationsLaunchPage = ({
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
        <Link href={`/admin/collaborations/launch`}>
          <Typography>Collaborations</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Collaborations Launch Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <LaunchFormRepeater
                  label={"Launch Details"}
                  control={control}
                  register={register}
                  popperPlacement={popperPlacement}
                  controlName={"launch"}
                  errors={errors}
                  date={(index) => register(`launchDetails.${index}.date`)}
                  fromTime={(index) =>
                    register(`launchDetails.${index}.fromTime`)
                  }
                  toTime={(index) => register(`launchDetails.${index}.toTime`)}
                  location={(index) =>
                    register(`launchDetails.${index}.location`)
                  }
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

export default AddCollaborationsLaunchPage;
