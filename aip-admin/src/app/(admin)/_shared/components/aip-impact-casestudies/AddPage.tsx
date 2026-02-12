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
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";
import { Chip, MenuItem, TextField } from "@mui/material";
import FileUpload from "../custom-fields/CustomizedFileUploader";
import { useRouter } from "next-nprogress-bar";
import AipImpactCaseStudiesApi from "@/axios/AipImpactCaseStudiesApi";
import toast from "react-hot-toast";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const yearSchema = z.object({
  philanthropistName: z.string().optional(),
  foundationName: z.string().optional(),
  initiativeName: z.string().optional(),
  description: z.string().nonempty({ message: "Required" }),
  isLinkOrPdf: z.string().optional(),
  file: z.any(),
  tags: z.any(),
  link: z.string().optional(),
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

export const AddAipImpactCasestudiesPage = () => {
  const {
    register,
    control,
    reset,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
  });

  const router = useRouter();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await AipImpactCaseStudiesApi.add(
        values,
        reqAuthHeader()
      );

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/aip-impact/casestudies");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };

  const link = watch("isLinkOrPdf");

  const handleResetClick = () => {
    reset();
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/aip-impact/casestudies`}>
          <Typography>AIP Impact</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Case studies Informations" />
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
              <Grid item xs={4} md={4}>
                <CustomizedTextField
                  label="Philanthropist Name"
                  name="philanthropistName"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <CustomizedTextField
                  label="Foundation Name"
                  name="foundationName"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <CustomizedTextField
                  label="Initiative Name"
                  name="initiativeName"
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
                  label=" Image (400px x 320px)"
                  name="image"
                  aspectRatio={5 / 4}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  size="small"
                  fullWidth
                  label="Link or Pdf"
                  defaultValue=""
                  placeholder=""
                  {...register("isLinkOrPdf", {
                    required: `Type is required`,
                  })}
                  error={!!errors.isLinkOrPdf}
                  select
                >
                  <MenuItem value="link">Link</MenuItem>
                  <MenuItem value="pdf">Pdf</MenuItem>
                </TextField>
                {errors.isLinkOrPdf && (
                  <p
                    style={{ color: "red", fontSize: "small" }}
                  >{`${errors.isLinkOrPdf.message}`}</p>
                )}{" "}
              </Grid>
              {link == "link" && (
                <Grid item xs={12} md={12}>
                  <CustomizedTextField
                    label="Link"
                    name="link"
                    register={register}
                    errors={errors}
                  />
                </Grid>
              )}
              {link == "pdf" && (
                <Grid item xs={12}>
                  <FileUpload
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    name="file"
                    label="Upload File"
                    previewWidth={1040}
                    previewHeight={375}
                  />
                </Grid>
              )}
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

export default AddAipImpactCasestudiesPage;
