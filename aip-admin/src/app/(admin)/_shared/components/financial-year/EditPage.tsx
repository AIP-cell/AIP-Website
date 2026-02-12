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
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import { CustomizedDatePicker } from "../custom-fields/CustomizedDatePicker";
import { DatePickerProps } from "react-datepicker";
import { useParams, useRouter } from "next/navigation";
import YearApi from "@/axios/YearApi";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

const yearSchema = z.object({
  year: z.date(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditFinancialYearPage = (
  { values }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      year: dayjs(values?.year).toDate(),
    },
  });
  console.log(values);
  const handleResetClick = () => {
    reset();
  };
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await YearApi.update(id, values, reqAuthHeader());

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/financial-report/financial-year");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/financial-report/financial-year`}>
          <Typography>Financial Report</Typography>
        </Link>
        <Typography>Financial Year</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Financial Year Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
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

export default EditFinancialYearPage;
