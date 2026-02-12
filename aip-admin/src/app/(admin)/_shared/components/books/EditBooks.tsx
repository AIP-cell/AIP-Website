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
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

// import { toast } from 'react-hot-toast'

// import { serialize } from 'object-to-formdata'

import type { DatePickerProps } from "react-datepicker";

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";

import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";

import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";

import { useRouter } from "next-nprogress-bar";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import VideoUploaderSingle from "@/views/forms/form-elements/file-uploader/videoUploader";
import { FormRepeater } from "../custom-fields/CustomizedFormRepeater";
import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
} from "@mui/material";
import ReactDraftWysiwyg from "../react-draft-wysiwyg";
import toast from "react-hot-toast";
import draftToHtml from "draftjs-to-html";
import AipTeamApi from "@/axios/AipTeamApi";
import { reqAuthHeader } from "@/utils/reqAuthHeader";
import CustomAutocomplete from "@/@core/components/mui/Autocomplete";
import CustomTextField from "@/@core/components/mui/TextField";
import { videoOrLink } from "@/utils/Enums";
import { CustomizedAipDropDown } from "../custom-fields/CustomizedDropDown";
import { useState } from "react";
import TemplateFormRepeater from "../custom-fields/FormRepeaterComponent";
import { Close as CloseIcon } from "@mui/icons-material";
import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import BlogsApi from "@/axios/BlogsApi";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import BookApi from "@/axios/BookApi";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const yearSchema = z.object({
  title: z.string().nonempty({ message: "Required" }),

  author: z.string().nonempty({ message: "Required" }),

  description: z.any(),

  tags: z.array(z.string()).optional(),

  image: z.any(),

  buttons: z
    .array(
      z.object({
        name: z.any(),
        link: z.any(),
      })
    )
    .optional(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditBooKPage = (
  { values }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const router = useRouter();
  const description = convertFromHTML(values.description || "");

  const { id } = useParams<{ id: string }>();

  const {
    handleSubmit,
    register,
    control,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      author: values.author,
      title: values.title,
      tags: values.searchKeywords,
      buttons: values.buttons,

      image: values.image,

      description: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          description.contentBlocks,
          description.entityMap
        )
      ),
    },
  });

  //   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, checked } = event.target;

  //     setValue(name as keyof TyearSchema, checked);
  //   };
  //   const video = watch("linkOrVideo");

  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await BookApi.update(
        id,
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
        router.push("/admin/books");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "errors submitting form");
    }
  };
  const { fields, append, remove, replace } = useFieldArray<TyearSchema>({
    control,
    name: "buttons",
  });
  const handleFormSubmit = (values: any, index: number | null) => {
    if (index !== null) {
      const updatedFields = [...fields];
      updatedFields[index] = { ...updatedFields[index], ...values };

      replace(updatedFields);
      setSelectedBox({ index: null, data: null });
    } else {
      append(values);
    }
  };
  type DataType = {
    name?: string;
    link?: string;
  };

  type DefaultValues = {
    index: number | null;
    data: DataType | null;
  };

  const [selectedBox, setSelectedBox] = useState<DefaultValues>({
    index: null,
    data: null,
  });
  const handleBoxClick = (index: number) => {
    const data = getValues(`buttons.${index}`);

    setSelectedBox({ index, data });
  };

  const handleResetClick = () => {
    reset();
  };

  //   const handleReset = (field: any) => {
  //     field.onChange("");
  //   };

  //   const videoOrLinks = Object.entries(videoOrLink).map(([key, value]) => ({
  //     label: value,
  //     value: key,
  //   }));

  return (
    <>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href={`/admin/books`}>
          <Typography>Books</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Book Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              {/* <Grid item xs={12} md={12}> */}
              {/* <CustomizedDropDown
                  label="Category"
                  name="category"
                  register={register}
                  errors={errors}
                  options={[
                    "Core Founders",
                    "Founders",
                    "Advisory Board",
                    "Team AIP",
                    "Experts",
                  ]}
                />
              </Grid> */}
              <Grid item xs={12} md={12}>
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
                {/* {errors.tags && (
                  <p
                    style={{ color: "red", fontSize: "small" }}
                  >{`⁠ ${errors.tags.message}`}</p>
                )} */}
              </Grid>

              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Title"
                  name="title"
                  register={register}
                  errors={errors}
                />
              </Grid>

              <Grid item xs={6} md={6}>
                <CustomizedTextField
                  label="Author"
                  name="author"
                  register={register}
                  errors={errors}
                />
              </Grid>

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

              {/* <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Quote"
                  name="quote"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Linkedln"
                  name="linkedln"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Twitter"
                  name="twitter"
                  register={register}
                  errors={errors}
                />
              </Grid> */}

              <Grid item xs={12}>
                <CustomizedSingleImageUploader
                  control={control}
                  errors={errors}
                  label=" Image (820px x 410px)"
                  name="image"
                  aspectRatio={400 / 624}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <label>Buttons</label>
                <Box
                  sx={{
                    border: "2px dotted #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <TemplateFormRepeater
                    onSubmitCallback={handleFormSubmit}
                    defaultValues={selectedBox}
                  />
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    style={{
                      gap: "3px",
                      marginTop: "10px",
                    }}
                  >
                    {fields.map((field, index) => (
                      <Grid
                        item
                        key={field.id}
                        style={{
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            padding: "8px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "8px",
                            boxShadow: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "80px",
                            width: "150px",
                            textAlign: "center",
                            fontSize: "14px",
                            cursor: "pointer",
                            position: "relative",
                          }}
                          onClick={() => handleBoxClick(index)}
                        >
                          <Controller
                            name={`buttons.${index}.name`}
                            control={control}
                            render={({ field }) => <span>{field.value}</span>}
                          />
                          <Controller
                            name={`buttons.${index}.link`}
                            control={control}
                            render={({ field }) => <span></span>}
                          />
                          <IconButton
                            size="small"
                            sx={{
                              position: "absolute",
                              top: "4px",
                              right: "4px",
                            }}
                            onClick={() => remove(index)}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  {errors.buttons && (
                    <span style={{ color: "red", marginTop: "8px" }}>
                      {errors.buttons.message}
                    </span>
                  )}
                </Box>
              </Grid>
              {/* <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomizedAipDropDown
                  label="Link or Video"
                  name="linkOrVideo"
                  register={register}
                  errors={errors}
                  watch={watch}
                  options={videoOrLinks}
                />
              </Grid>
              {video == "Video" ? (
                <Grid item xs={12}>
                  <DropzoneWrapper>
                    <Typography variant="h6" sx={{ mb: 2.5 }}>
                      Video :
                      {!!errors.video && (
                        <span style={{ color: "red", fontSize: "14px" }}>
                          Invalid video format {!!errors.video}
                        </span>
                      )}
                    </Typography>
                    <Controller
                      name="video"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div>
                          <VideoUploaderSingle
                            file={field.value}
                            setFile={field.onChange}
                            error={errors.video}
                          />
                          <Button
                            sx={{ mt: 2, color: "red" }}
                            size="small"
                            color="error"
                            variant="outlined"
                            type="button"
                            onClick={() => handleReset(field)}
                          >
                            Reset Video
                          </Button>
                        </div>
                      )}
                    />
                  </DropzoneWrapper>
                </Grid>
              ) : video === "Link" ? (
                <Grid item xs={12} md={12}>
                  <CustomizedTextField
                    label="Link"
                    name="videoLink"
                    placeholder="https://www.youtube.com/embed/f3bPWvdKyWg?si=UcxNeK4TDrnsUYzU"
                    register={register}
                    errors={errors}
                  />
                </Grid>
              ) : null} */}
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

export default EditBooKPage;
