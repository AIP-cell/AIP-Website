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

const yearSchema = z.object({
  eventsCount: z.string().nonempty({ message: "Required" }),
  coreFoundersCount: z.string().nonempty({ message: "Required" }),
  foundersCount: z.string().nonempty({ message: "Required" }),
  networkMembersCount: z.string().nonempty({ message: "Required" }),
  footprintsCount: z.string().nonempty({ message: "Required" }),
  knowledgeProductsCount: z.string().nonempty({ message: "Required" }),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddFoundationReportPage = () => {
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
  });

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
        <Link href={`/admin/about-us/aip-impact`}>
          <Typography>Foundation Facts</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Foundation Facts Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Event Count"
                  name="eventsCount"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Core Founders Count"
                  name="coreFoundersCount"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Founders Count"
                  name="foundersCount"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Network Members Count"
                  name="networkMembersCount"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Footprints Count"
                  name="footprintsCount"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Knowledge Products Count"
                  name="knowledgeProductsCount"
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

export default AddFoundationReportPage;
