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

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";

import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FaqApi from "@/axios/FaqApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { Chip } from "@mui/material";
import { InquiryType } from "@/utils/Enums";
import { CustomizedDropDown } from "../custom-fields/CustomizedAipDropdown";

const yearSchema = z.object({
  category: z.string().nonempty({ message: "Required" }),
  question: z.string().nonempty({ message: "Required" }),
  answer: z.string().nonempty({ message: "Required" }),
  tags: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditFaqPage = (values: any) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      category: values.values.category,
      tags: values.values.searchKeywords,
      question: values.values.question,
      answer: values.values.answer,
    },
  });
  const { id } = useParams<{ id: string }>();
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await FaqApi.update(id, values, reqAuthHeader());

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/faq");
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

  const enquiryType = Object.entries(InquiryType).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/faq`}>
          <Typography>AIP Faq</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="AIP Faq Informations" />
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
                <CustomizedDropDown
                  label="Category"
                  name="category"
                  register={register}
                  value={values.values.category}
                  errors={errors}
                  options={[
                    "General Inquiry",
                    "Founder Network",
                    "Philanthropic Network",
                    "NPO",
                    "World of Philanthropy",
                  ]}
                />
              </Grid>

              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Question"
                  name="question"
                  register={register}
                  errors={errors}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <CustomizedMultilineTextField
                  placeholder="Answer"
                  name="answer"
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

export default EditFaqPage;
