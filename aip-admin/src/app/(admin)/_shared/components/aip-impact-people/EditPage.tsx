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
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import AipImpactPeopleApi from "@/axios/AipImpactPeopleApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { Chip } from "@mui/material";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const yearSchema = z.object({
  name: z.string().nonempty({ message: "Required" }),
  designation: z.string().nonempty({ message: "Required" }),
  image: z.any(),
  tags: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditAipImpactPeoplePage = (values: any) => {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      name: values.values.name,
      designation: values.values.designation,
      image: values.values.image,
      tags: values.values.searchKeywords,
    },
  });

  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await AipImpactPeopleApi.update(
        id,
        values,
        reqAuthHeader()
      );

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/aip-impact/people-we-work-with");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };

  // const mutation = useMutation({
  //   // mutationFn: (values: TyearSchema) => PageApi.add(values),
  //   // onSuccess: (response) => {
  //   // if(response.data.success == true){
  //   //   toast.success(response.data.message);

  //   //   router.push('/admin/about');
  //   // }
  //   // },
  //   // onError: () => {
  //   //   toast.error("Error submitting form");
  //   // },
  // });

  // const onSubmit = async (values: TyearSchema) => {
  //   // if (values.image instanceof File) {
  //   //   values.image = await fileToBase64(values.image);
  //   // }

  //   // mutation.mutate(values);
  // };

  const handleResetClick = () => {
    reset();
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/aip-impact/people-we-work-with`}>
          <Typography>AIP Impact</Typography>
        </Link>
        <Typography>People we work with</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="People Informations" />
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
                  label="Name"
                  name="name"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Designation"
                  name="designation"
                  register={register}
                  errors={errors}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label=" Image (190px x 225px)"
                  name="image"
                  aspectRatio={190 / 225}
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
            <Button
              disabled={isSubmitting}
              type="reset"
              size="large"
              color="secondary"
              variant="outlined"
              onClick={handleResetClick}
            >
              Reset
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default EditAipImpactPeoplePage;
