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

import { useRouter } from "next-nprogress-bar";
import toast from "react-hot-toast";
import HomePageApi from "@/axios/HomePageApi";
import FounderNetworkDescriptionApi from "@/axios/FounderNetworkDescriptionApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import CustomizedMultilineTextField from "../../custom-fields/CustomizedMultilineTextField";
import CustomizedSingleImageUploader from "../../custom-fields/CustomizedSingleImageUploader";
import ReactDraftWysiwyg from "../../react-draft-wysiwyg";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import JourneySoFarApi from "@/axios/JourneySoFarApi";

const yearSchema = z.object({
  description: z.any(),
  image: z.any(),
  // description2: z.string().nonempty({ message: "Required" }),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddJournerySoFarPage = ({ values }: any) => {
  const description = convertFromHTML(values.description || "");
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      description: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          description.contentBlocks,
          description.entityMap
        )
      ),
      image: values?.image,
    },
  });

  const router = useRouter();
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await JourneySoFarApi.update(
        {
          ...values,
          description: draftToHtml(
            convertToRaw(values.description.getCurrentContent())
          ),
        },
        reqAuthHeader()
      );
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/aip-journey/journey-so-far");
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
        <Link href={`/admin/aip-journey/journey-so-far`}>
          <Typography>Aip Journey</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Journey So Far Informations" />
        <div
          style={{
            marginTop: "-15px",
            marginLeft: "25px",
            marginRight: "10px",
            marginBottom: "8px",
            textAlign: "right",
            color: "grey",
          }}
        >
          {`Last Updated By : ${values?.updatedBy || "-"}`}{" "}
        </div>

        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={12}>
                <Controller
                  name="description"
                  control={control}
                  defaultValue={EditorState.createEmpty()}
                  render={({ field }) => (
                    <ReactDraftWysiwyg
                      placeholder="Description"
                      editorStyle={{
                        border: "1px solid grey",
                        borderRadius: "5px",
                        padding: "15px",
                      }}
                      editorState={field.value}
                      onEditorStateChange={(data) => field.onChange(data)}
                      toolbar={{
                        options: ["inline", "link"],
                        inline: {
                          options: ["bold", "italic"],
                          bold: { className: "toolbar-button" },
                          italic: { className: "toolbar-button" },
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label="Image (295px x 266px)"
                  name="image"
                  aspectRatio={295 / 266}
                />
              </Grid>
              {/* <Grid item xs={12} md={12}>
                <CustomizedMultilineTextField
                  placeholder="Description 2"
                  name="description2"
                  register={register}
                  errors={errors}
                />
              </Grid> */}
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

export default AddJournerySoFarPage;
