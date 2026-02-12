import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { Grid, Button, TextField } from "@mui/material";

import type {
  Control,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Controller, useFieldArray } from "react-hook-form";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import FileUploaderSingle from "@/views/forms/form-elements/file-uploader/FileUploaderSingle";
import { CustomizedDatePickers } from "./CustomizedDatePickers";

type Props = {
  control: Control<any>;
  controlName: string;
  register: UseFormRegister<any>;
  defaultvalue?: any;
  errors?: any;
  date: (index: number) => UseFormRegisterReturn;
  image: (index: number) => UseFormRegisterReturn;
  title: (index: number) => UseFormRegisterReturn;
  label: string;
};

export const GalleryImageFormRepeater = ({
  control,
  controlName,
  errors,
  image,
  date,
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
            <Grid item xs={3} md={3}>
              <label htmlFor="name">Date</label>
              <CustomizedDatePickers
                control={control}
                name={`galleryImage.${index}.date`}
                label="Date"
                errors={errors}
                popperPlacement="bottom-start"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="name">Link</label>
              <TextField
                size="small"
                fullWidth
                placeholder=""
                {...title(index)}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <label htmlFor="name">Image (820px x 550px)</label>

              <DropzoneWrapper>
                <Controller
                  name={`galleryImage.${index}.image`}
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
