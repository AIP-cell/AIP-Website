import { Fragment, ReactNode } from "react";

import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";

import type {
  Control,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { useFieldArray } from "react-hook-form";

type Props = {
  control: Control<any>;
  controlName: string;
  register: UseFormRegister<any>;
  title: (index: number) => UseFormRegisterReturn;
  label: string;
  children: (index: number) => ReactNode;
};

export const FormRepeater = ({
  control,
  controlName,
  title,
  label,
  children,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: controlName,
  });

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
            {children(index)}
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
