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

import { useRouter } from "next-nprogress-bar";
import { TestimonialFormRepeater } from "../custom-fields/TestimonialFormRepeater";
import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const yearSchema = z.object({
  role: z.string().nonempty({ message: "Required" }),
  description: z.string().nonempty({ message: "Required" }),
  location: z.string().nonempty({ message: "Required" }),
  department: z.string().nonempty({ message: "Required" }),
  date: z.string().nonempty({ message: "Required" }),
  link: z.string().nonempty({ message: "Required" }),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddAipCareersPage = ({
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
        <Link href={`/admin/careers`}>
          <Typography>Careers</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Careers Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={12}>
                <label>Date</label>
                <CustomizedDatePickers
                  control={control}
                  name="date"
                  label="Date"
                  errors={errors}
                  popperPlacement={popperPlacement}
                />
              </Grid>

              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Role"
                  name="role"
                  register={register}
                  errors={errors}
                />
              </Grid>

              {/* <Grid item xs={6} md={6}>
                <CustomizedDropDown
                  label="Location"
                  name="location"
                  register={register}
                  errors={errors}
                  options={["Location 1", "Location 2", "Location 3"]}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedDropDown
                  label="Department"
                  name="department"
                  register={register}
                  errors={errors}
                  options={["Department 1", "Department 2", "Department 3"]}
                />
              </Grid> */}
              <Grid item xs={6} md={6}>
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

export default AddAipCareersPage;
