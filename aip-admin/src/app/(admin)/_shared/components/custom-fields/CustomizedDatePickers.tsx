import React from "react";

import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import DatePickerWrapper from "@/@core/styles/libs/react-datepicker";
import CustomTextField from "@/@core/components/mui/TextField";

export function CustomizedDatePickers({
  control,
  name,
  label,

  errors,
  popperPlacement,
}: {
  control: any;

  name: string;
  label: string;
  errors: any;
  popperPlacement: any;
}) {
  return (
    <DatePickerWrapper>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <DatePicker
              dateFormat={"dd/MM/yyyy"}
              showYearDropdown
              showMonthDropdown
              selected={field.value}
              id={`picker-${name}`}
              name={name}
              popperPlacement={popperPlacement}
              openToDate={new Date()}
              onChange={(date) => field.onChange(date)}
              customInput={<CustomTextField fullWidth />}
            />
            {errors[name] && (
              <span style={{ color: "red", fontSize: "small" }}>
                {errors[name].message}
              </span>
            )}
          </>
        )}
      />
    </DatePickerWrapper>
  );
}
