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
import FileUpload from "../custom-fields/CustomizedFileUploader";
import { Chip, MenuItem, TextField } from "@mui/material";
import toast from "react-hot-toast";
import FinancialReportApi from "@/axios/FinancialReportApi";
import { useParams, useRouter } from "next/navigation";
import dayjs from "dayjs";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { CustomizedDatePicker } from "../custom-fields/CustomizedDatePicker";
import { DatePickerProps } from "react-datepicker";

const yearSchema = z.object({
  year: z.date(),
  name: z.string().nonempty({ message: "Required" }),
  report: z.any(),
  tags: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditFinancialReportPage = (
  { values }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const {
    register,
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      year: dayjs(values.year).toDate(),
      name: values.name,
      tags: values.searchKeywords,
      report: values.report,
    },
  });

  const { id } = useParams<{ id: string }>();

  const router = useRouter();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await FinancialReportApi.update(
        id,
        values,
        reqAuthHeader()
      );

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/financial-report/report");
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
        <Link href={`/admin/financial-report/report`}>
          <Typography>Financial Report</Typography>
        </Link>
        <Typography>Report</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Financial Report Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  */}
          <CardContent>
            <Grid container spacing={6}>
              {" "}
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
                <label>Year</label>
                <CustomizedDatePicker
                  control={control}
                  name="year"
                  label="Year"
                  errors={errors}
                  popperPlacement={popperPlacement}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <label>Name</label>
                <CustomizedTextField
                  label=""
                  name="name"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <FileUpload
                  register={register}
                  watch={watch}
                  setValue={setValue}
                  name="report"
                  // defaultFile={values.report}
                  label="Upload Downloadable Financial Report"
                  previewWidth={1040}
                  previewHeight={375}
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

export default EditFinancialReportPage;
