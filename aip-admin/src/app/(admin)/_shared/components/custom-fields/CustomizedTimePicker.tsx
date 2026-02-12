import React from "react";

import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import PickersComponent from "@/views/forms/form-elements/pickers/PickersCustomInput";
import DatePickerWrapper from "@/@core/styles/libs/react-datepicker";
import CustomTextField from "@/@core/components/mui/TextField";

export function CustomizedTimePicker({
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
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              selected={field.value}
              id="picker-open-date"
              name="date"
              popperPlacement={popperPlacement}
              onChange={(time) => {
                field.onChange(time);
              }}
              dateFormat="h:mm aa"
              timeInputLabel="Time:"
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
