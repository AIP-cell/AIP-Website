import { Fragment } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid, Button } from "@mui/material";

import type {
  Control,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { useFieldArray } from "react-hook-form";

import { CustomizedDatePicker } from "./CustomizedDatePicker";
import { CustomizedTimePicker } from "./CustomizedTimePicker";
import { CustomizedDatePickers } from "./CustomizedDatePickers";

type Props = {
  control: Control<any>;
  controlName: string;
  register: UseFormRegister<any>;
  defaultvalue?: any;
  errors?: any;
  popperPlacement: any;
  location: (index: number) => UseFormRegisterReturn;
  date: (index: number) => UseFormRegisterReturn;
  fromTime: (index: number) => UseFormRegisterReturn;
  toTime: (index: number) => UseFormRegisterReturn;
  label: string;
};

export const LaunchFormRepeater = ({
  control,
  controlName,
  errors,
  location,
  popperPlacement,

  label,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: controlName,
  });

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
              <label htmlFor="date">Date</label>
              <CustomizedDatePickers
                control={control}
                name={`launchDetails.${index}.date`}
                label="Date"
                errors={errors}
                popperPlacement={popperPlacement}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label htmlFor="date">From Time</label>
              <CustomizedTimePicker
                control={control}
                name={`launchDetails.${index}.fromTime`}
                label="From time"
                errors={errors}
                popperPlacement={popperPlacement}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <label htmlFor="date">To Time</label>
              <CustomizedTimePicker
                control={control}
                name={`launchDetails.${index}.toTime`}
                label="To Time"
                errors={errors}
                popperPlacement={popperPlacement}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="name">Link</label>
              <TextField
                size="small"
                fullWidth
                placeholder=""
                {...location(index)}
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
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};
