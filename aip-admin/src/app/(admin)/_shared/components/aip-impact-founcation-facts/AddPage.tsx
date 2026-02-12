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
import AipImpactFoundationFactsApi from "@/axios/AipImpactFoundationFacts";
import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
import { useRouter } from "next-nprogress-bar";
import toast from "react-hot-toast";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

const yearSchema = z.object({
  networkMembersCount: z.any(),
  coreFoundersCount: z.any(),
  knowledgeResourcesCount: z.any(),
  researchReportsCount: z.any(),
  purposefulEngagementsCount: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddAipImpactFoundationFactPage = (values: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      networkMembersCount: Number(
        values.values?.foundationFact?.foundationFacts?.networkMembersCount
      ),
      coreFoundersCount:
        values.values?.foundationFact?.foundationFacts?.coreFoundersCount,
      knowledgeResourcesCount:
        values.values?.foundationFact?.foundationFacts?.knowledgeResourcesCount,
      researchReportsCount:
        values.values.foundationFact?.foundationFacts?.researchReportsCount,

      purposefulEngagementsCount:
        values.values?.foundationFact?.foundationFacts
          ?.purposefulEngagementsCount,
    },
  });
  const router = useRouter();

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await AipImpactFoundationFactsApi.update(
        values,
        reqAuthHeader()
      );
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/aip-impact/foundation-facts/add");
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
        <Link href={`/admin/aip-impact/foundation-facts/add`}>
          <Typography>AIP Impact</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>
      {/* Form Card */}
      <Card>
        <CardHeader
          title={
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-medium">
                Foundation Fact Information
              </span>
              <span className="text-gray-500 text-sm">
                {`Last Updated By : ${values.values?.foundationFact?.updatedBy || "-"}`}
              </span>
            </div>
          }
        />

        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Network Member Count"
                  name="networkMembersCount"
                  register={register}
                  errors={errors}
                  type="number"
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Core Founders Count"
                  name="coreFoundersCount"
                  type="number"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Knowledge Resources Count"
                  name="knowledgeResourcesCount"
                  type="number"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Research Reports Count"
                  name="researchReportsCount"
                  type="number"
                  register={register}
                  errors={errors}
                />
              </Grid>

              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Purposeful Engagements Count"
                  name="purposefulEngagementsCount"
                  type="number"
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

export default AddAipImpactFoundationFactPage;
