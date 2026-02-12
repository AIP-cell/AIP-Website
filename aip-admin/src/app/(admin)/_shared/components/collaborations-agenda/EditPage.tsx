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

import type { DatePickerProps } from "react-datepicker";

import { CustomizedTextField } from "../custom-fields/CustomizedTextField";

import { useParams, useRouter } from "next/navigation";

import { CustomizedTimePicker } from "../custom-fields/CustomizedTimePicker";
import { CustomizedDatePickers } from "../custom-fields/CustomizedDatePickers";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import ReactDraftWysiwyg from "../react-draft-wysiwyg";
import toast from "react-hot-toast";
import CollaborationAgendaApi from "@/axios/CollaborationAgendaApi";
import draftToHtml from "draftjs-to-html";
import dayjs from "dayjs";

const yearSchema = z.object({
  description: z.any(),
  title: z.string().nonempty({ message: "Required" }),
  date: z.any(),
  fromTime: z.any(),
  toTime: z.any(),
});

type TyearSchema = z.infer<typeof yearSchema>;

export const EditCollaborationAgendaPage = (
  { values }: any,
  {
    popperPlacement,
  }: {
    popperPlacement: DatePickerProps["popperPlacement"];
  }
) => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const description = convertFromHTML(values.agenda.at(0).description || "");

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TyearSchema>({
    resolver: zodResolver(yearSchema),
    defaultValues: {
      title: values.agenda.at(0).title,
      description: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          description.contentBlocks,
          description.entityMap
        )
      ),
      date: dayjs(values.agenda.at(0).date).toDate(),
      fromTime: dayjs(values.agenda.at(0).fromTime).toDate(),
      toTime: dayjs(values.agenda.at(0).toTime).toDate(),
    },
  });
  const agendaId = values._id;
  const onSubmit = async (values: TyearSchema) => {
    try {
      const response = await CollaborationAgendaApi.updateCasestudies(id, {
        ...values,
        description: draftToHtml(
          convertToRaw(values.description.getCurrentContent())
        ),
      });

      if (response.data.success) {
        toast.success(response.data.message);
        router.push(`/admin/collaborations`);
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
        <Link href={`/admin/collaborations/`}>
          <Typography>Agenda</Typography>
        </Link>
        <Typography>Edit</Typography>
      </Breadcrumbs>

      {/* Form Card */}
      <Card>
        <CardHeader title="Collaborations Agenda Informations" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={12}>
                <CustomizedTextField
                  label="Title"
                  name="title"
                  register={register}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <label>Date</label>
                <CustomizedDatePickers
                  control={control}
                  name="date"
                  label="Date"
                  errors={errors}
                  popperPlacement={popperPlacement}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <label>From Time</label>
                <CustomizedTimePicker
                  control={control}
                  name="fromTime"
                  label="From Time"
                  errors={errors}
                  popperPlacement={popperPlacement}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <label>To Time</label>
                <CustomizedTimePicker
                  control={control}
                  name="toTime"
                  label="To Time"
                  errors={errors}
                  popperPlacement={popperPlacement}
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

export default EditCollaborationAgendaPage;
