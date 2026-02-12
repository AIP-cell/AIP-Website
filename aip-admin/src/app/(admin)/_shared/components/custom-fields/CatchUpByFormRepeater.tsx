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

type Props = {
  control: Control<any>;
  controlName: string;
  register: UseFormRegister<any>;
  defaultvalue?: any;
  errors?: any;
  image: (index: number) => UseFormRegisterReturn;
  link: (index: number) => UseFormRegisterReturn;
  label: string;
};

export const CatchUpFormRepeater = ({
  control,
  controlName,
  errors,
  image,
  link,
  label,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: controlName,
  });

  if (fields.length == 0) {
    append({});
  }

  // const handleStoreNameChange = async (categoryId: any) => {
  //   try {
  //     const vendorId = getValues('storeName')

  //     const response = await offersApi.viewService(vendorId, categoryId, reqAuthHeader())
  //     setServices(response.data.data.service)
  //     if (response.data.success) {
  //     } else {
  //       toast.error(response.data.message)
  //     }
  //     console.log(response.data.data)
  //   } catch (error) {
  //     toast.error('errors submitting form:')
  //   }
  // }

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
              <label htmlFor="name">Link</label>
              <TextField
                size="small"
                fullWidth
                placeholder=""
                {...link(index)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="name">Image (50px x 50px)</label>

              <DropzoneWrapper>
                <Controller
                  name={`catchupDetails.${index}.image`}
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
