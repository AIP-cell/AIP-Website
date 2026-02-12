import React from "react";

import TextField from "@mui/material/TextField";

export function CustomizedTextField({
  label,
  name,
  placeholder,
  type,
  value,
  register,
  errors,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  register: any;
  errors: any;
}) {
  return (
    <>
      <TextField
        size="small"
        fullWidth
        type={type}
        label={label}
        value={value}
        placeholder={placeholder}
        {...register(name, { required: `${label} is required` })}
        error={!!errors[name]}
      />
      {errors[name] && (
        <p
          style={{ color: "red", fontSize: "small" }}
        >{`${errors[name].message}`}</p>
      )}{" "}
    </>
  );
}
