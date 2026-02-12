import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import {
  Control,
  UseFormRegister,
  UseFormRegisterReturn,
  useFieldArray,
} from "react-hook-form";
import { Button } from "@mui/material";
import { Fragment } from "react";

type Props = {
  control: Control<any>;
  controlName: string;
  register: UseFormRegister<any>;

  // value: any;
  defaultvalue?: any;
  link: (index: number) => UseFormRegisterReturn;
  label: string;
};

export const VideoLinkFormRepeater = ({
  control,
  controlName,
  link,

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
              <label htmlFor="name" style={{ fontWeight: "bold" }}>
                Link
              </label>
              <TextField
                size="small"
                fullWidth
                placeholder=""
                {...link(index)}
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
