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
import { useRouter } from "next-nprogress-bar";
import toast from "react-hot-toast";
import { reqAuthHeader } from "@/utils/reqAuthHeader";

import ReactDraftWysiwyg from "../react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import ModalApi from "@/axios/ModalApi";
import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const yearSchema = z.object({
  description: z.any(),
  link: z.any(),
  image: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const AddModalPage = (values: any) => {
  console.log(values);
  const description = convertFromHTML(values?.values.description || "");
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      image: values.values?.image,
      link: values.values?.link,
      description: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          description.contentBlocks,
          description.entityMap
        )
      ),
    },
  });

  const router = useRouter();
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await ModalApi.update(
        {
          ...values,
          description: draftToHtml(
            convertToRaw(values.description.getCurrentContent())
          ),
        },
        reqAuthHeader()
      );
      console.log(values);
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/modal");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "Error submitting form");
    }
  };

  const handleResetClick = () => {
    reset();
  };

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/modal`}>
          <Typography>Modal</Typography>
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader
          title={
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-medium">Modal Information</span>
            </div>
          }
        />
        {/* <div
          style={{
            marginTop: "-15px",
            marginLeft: "25px",
            marginRight: "10px",
            marginBottom: "8px",
            textAlign: "right", // Align text to the right
            color: "grey", // Set text color to grey
          }}
        >
          {`Last Updated By : ${values.values?.updatedBy || "-"}`}
        </div> */}

        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={12}>
                <Controller
                  name="description"
                  control={control}
                  defaultValue={EditorState?.createEmpty()}
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
                        options: [
                          "inline",

                          "list",
                          "textAlign",

                          "link",

                          "history",
                        ],
                        inline: {
                          options: [
                            "bold",
                            "italic",
                            "underline",
                            "strikethrough",
                            "monospace",
                          ],
                          bold: { className: "toolbar-button" },
                          italic: { className: "toolbar-button" },
                          underline: { className: "toolbar-button" },
                          strikethrough: { className: "toolbar-button" },
                          monospace: { className: "toolbar-button" },
                        },

                        list: {
                          options: [
                            "unordered",
                            "ordered",
                            "indent",
                            "outdent",
                          ],
                          unordered: { className: "toolbar-button" },
                          ordered: { className: "toolbar-button" },
                          indent: { className: "toolbar-button" },
                          outdent: { className: "toolbar-button" },
                        },
                        textAlign: {
                          options: ["left", "center", "right", "justify"],
                          left: { className: "toolbar-button" },
                          center: { className: "toolbar-button" },
                          right: { className: "toolbar-button" },
                          justify: { className: "toolbar-button" },
                        },

                        link: {
                          options: ["link", "unlink"],
                        },

                        history: {
                          options: ["undo", "redo"],
                        },
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={12}>
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
                  label=" Image (820px x 410px)"
                  name="image"
                  aspectRatio={820 / 410}
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

export default AddModalPage;
