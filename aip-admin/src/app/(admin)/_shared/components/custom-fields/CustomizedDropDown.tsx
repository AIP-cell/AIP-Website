import React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";

interface Option {
  label: string;
  value: string;
}

export function CustomizedAipDropDown({
  label,
  name,
  type,
  value,
  watch,
  register,
  errors,
  options, // Add this prop to accept the array of options
}: {
  label?: string;
  name: string;
  type?: string;
  value?: string;
  register: any;
  errors: any;
  watch?: any;
  options: Option[]; // Define the type for the options
}) {
  return (
    <>
      <TextField
        size="small"
        fullWidth
        type={type}
        label={label}
        watch={watch}
        defaultValue={value}
        placeholder=""
        {...register(name, { required: `${label} is required` })}
        error={!!errors[name]}
        select
      >
        {options.map((option: any, index: number) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {errors[name] && (
        <p
          style={{ color: "red", fontSize: "small" }}
        >{`${errors[name].message}`}</p>
      )}
    </>
  );
}
