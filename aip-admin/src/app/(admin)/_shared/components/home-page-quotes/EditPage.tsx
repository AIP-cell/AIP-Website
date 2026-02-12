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

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import { MenuItem, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import QuoteApi from "@/axios/QuoteApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

const yearSchema = z.object({
  coreFounder: z.string().nonempty({ message: "Required" }),
  quote: z.string().nonempty({ message: "Required" }),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditHomePageQuotePage = ({ values, data }: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      quote: values.quote,
    },
  });
  const { id } = useParams<{ id: string }>();
  const founders = data;

  const router = useRouter();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await QuoteApi.update(id, values, reqAuthHeader());

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/home/quotes");
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
        <Link href={`/admin/home/quotes`}>
          <Typography>Quotes</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Quote Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={6} md={6}>
                <TextField
                  sx={{ borderRadius: "6px 0px 0px 6px" }}
                  style={{ color: "green" }}
                  size="small"
                  fullWidth
                  defaultValue={values.coreFounder}
                  label="Core Founders"
                  {...register("coreFounder", {
                    required: "Please select level",
                  })}
                  error={!!errors.coreFounder}
                  select
                >
                  {founders?.map((founder: any, index: any) => (
                    <MenuItem key={index} value={founder._id}>
                      {founder.name}
                    </MenuItem>
                  ))}
                </TextField>
                {errors.coreFounder && (
                  <p
                    style={{ color: "red", fontSize: "small" }}
                  >{`${errors.coreFounder.message}`}</p>
                )}
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Quote"
                  name="quote"
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

export default EditHomePageQuotePage;
