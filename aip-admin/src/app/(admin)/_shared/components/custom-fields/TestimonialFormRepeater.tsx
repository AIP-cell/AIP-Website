import { Fragment, useEffect } from "react";

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

type Props = {
  control: Control<any>;
  controlName: string;
  register: UseFormRegister<any>;
  defaultvalue?: any;
  errors?: any;
  image: (index: number) => UseFormRegisterReturn;
  title: (index: number) => UseFormRegisterReturn;
  name: (index: number) => UseFormRegisterReturn;
  description: (index: number) => UseFormRegisterReturn;
  label: string;
};

export const TestimonialFormRepeater = ({
  control,
  controlName,
  errors,
  image,
  description,
  name,
  title,
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
              <label htmlFor="name">Name</label>
              <TextField
                size="small"
                fullWidth
                placeholder=""
                {...name(index)}
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
              <TextField
                multiline
                minRows={3}
                maxRows={10}
                style={{
                  width: "100%",
                  resize: "vertical",
                  borderRadius: "5px",
                  borderColor: "grey",
                }}
                placeholder={""}
                {...description(index)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="name">Image</label>

              <DropzoneWrapper>
                <Controller
                  name={`testimonialDetails.${index}.image`}
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
