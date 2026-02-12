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
import { useParams, useRouter } from "next/navigation";
import FoundersNetworkTestimonialsApi from "@/axios/FoundersNetworkTestimonialsApi";
import toast from "react-hot-toast";
import MethodsApi from "@/axios/FoundersNetworkMethodsApi";
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
  designation: z.string().nonempty({ message: "Required" }),
  email: z.string().nonempty({ message: "Required" }),
  name: z.string().nonempty({ message: "Required" }),
  image: z.any(),
  tags: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditAipFounderMethodsOfJoiningPage = (values: any) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      designation: values.values.designation,
      email: values.values.email,
      name: values.values.name,
      tags: values.values.searchKeywords,

      image: values.values.image,
    },
  });

  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await MethodsApi.update(id, values, reqAuthHeader());

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/aip-founders-network/methods-of-joining");
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

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/aip-founders-network/methods-of-joining`}>
          <Typography>AIP Founder Network</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="AIP Founder Network Methods of Joining" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Email"
                  name="email"
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
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default EditAipFounderMethodsOfJoiningPage;
