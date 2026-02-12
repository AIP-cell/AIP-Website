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
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import HomePageApi from "@/axios/HomePageApi";
import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";
import PartnerApi from "@/axios/PartnerApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

const yearSchema = z.object({
  name: z.string().nonempty({ message: "Required" }),
  link: z.string().nonempty({ message: "Required" }),
  image: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditPartnerPage = (values: any) => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      name: values.values.name,
      link: values.values.link,
      image: values.values.image,
    },
  });

  const { id } = useParams<{ id: string }>();

  const router = useRouter();
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await PartnerApi.update(id, values);

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/partners");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("errors submitting form");
    }
  };

  const handleResetClick = () => {
    reset();
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/partners`}>
          <Typography>Partners</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Partner Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={66} md={6}>
                <CustomizedTextField
                  label="Name"
                  name="name"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Link"
                  name="link"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label="Image (125px x 65px)"
                  name="image"
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

export default EditPartnerPage;
