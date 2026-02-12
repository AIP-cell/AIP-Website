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
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import FileUploaderSingle from "@/views/forms/form-elements/file-uploader/FileUploaderSingle";
import { CustomizedDatePicker } from "./CustomizedDatePicker";

type Props = {
  control: Control<any>;
  controlName: string;
  register: UseFormRegister<any>;
  defaultvalue?: any;
  errors?: any;
  popperPlacement?: any;
  image: (index: number) => UseFormRegisterReturn;
  title: (index: number) => UseFormRegisterReturn;
  link: (index: number) => UseFormRegisterReturn;
  date: (index: number) => UseFormRegisterReturn;
  description: (index: number) => UseFormRegisterReturn;
  label: string;
};

export const MediaFormRepeater = ({
  control,
  controlName,
  errors,
  image,
  title,
  link,
  date,
  description,
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
            <Grid item xs={12} md={12}>
              <label>Date</label>
              <CustomizedDatePicker
                control={control}
                name={`mediaDetails.${index}.date`}
                label="Date"
                errors={errors}
                popperPlacement={popperPlacement}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="name">Title</label>
              <TextField
                size="small"
                fullWidth
                placeholder=""
                {...title(index)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="name">Link</label>
              <TextField
                size="small"
                fullWidth
                placeholder=""
                {...link(index)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                multiline
                minRows={3}
                maxRows={10}
                placeholder="Description"
                style={{
                  width: "100%",
                  resize: "vertical",
                  borderRadius: "5px",
                  borderColor: "grey",
                }}
                {...description(index)}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <label htmlFor="name">Image</label>
              <DropzoneWrapper>
                <Controller
                  name={`mediaDetails.${index}.image`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <FileUploaderSingle
                        file={field.value}
                        setFile={field.onChange}
                        error={errors[errors]}
                      />
                    </div>
                  )}
                />
              </DropzoneWrapper>
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
