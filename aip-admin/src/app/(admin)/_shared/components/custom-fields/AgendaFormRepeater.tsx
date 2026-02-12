import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid, Button } from "@mui/material";

import type {
  Control,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Controller, useFieldArray } from "react-hook-form";

import { CustomizedDatePicker } from "./CustomizedDatePicker";
import { CustomizedTimePicker } from "./CustomizedTimePicker";
import ReactDraftWysiwyg from "../react-draft-wysiwyg";
import { EditorState } from "draft-js";

type Props = {
  control: Control<any>;
  controlName: string;
  register: UseFormRegister<any>;
  defaultvalue?: any;
  errors?: any;
  popperPlacement?: any;
  title: (index: number) => UseFormRegisterReturn;
  date: (index: number) => UseFormRegisterReturn;
  fromTime: (index: number) => UseFormRegisterReturn;
  toTime: (index: number) => UseFormRegisterReturn;
  description: (index: number) => UseFormRegisterReturn;

  label: string;
};

export const AgendaFormRepeater = ({
  control,
  controlName,
  errors,
  title,

  popperPlacement,
  label,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: controlName,
  });

  if (fields.length == 0) {
    append({});
  }

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {label} :
          </Typography>
        </Grid>
        {fields.map((field, index: any) => (
          <Fragment key={"field" + index}>
            <Grid item xs={6} md={6}>
              <label>From Time</label>
              <CustomizedDatePicker
                control={control}
                name={`agendaDetails.${index}.fromTime`}
                label="Date"
                errors={errors}
                popperPlacement={popperPlacement}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label>To Time</label>
              <CustomizedDatePicker
                control={control}
                name={`agendaDetails.${index}.fromTime`}
                label="Date"
                errors={errors}
                popperPlacement={popperPlacement}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label>Date</label>
              <CustomizedTimePicker
                control={control}
                name={`agendaDetails.${index}.time`}
                label="Time"
                errors={errors}
                popperPlacement={popperPlacement}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label htmlFor="name">Title</label>
              <TextField
                size="small"
                fullWidth
                placeholder=""
                {...title(index)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="name">Description</label>
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

            <Grid item xs={12} container justifyContent="flex-end">
              <Button
                variant="tonal"
                color="error"
                type="button"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </Grid>
          </Fragment>
        ))}
        {fields.length < 4 && (
          <Grid item xs={12}>
            <Button
              variant="tonal"
              color="success"
              type="button"
              onClick={() => append({})}
            >
              Add
            </Button>{" "}
          </Grid>
        )}
      </Grid>
    </>
  );
};
