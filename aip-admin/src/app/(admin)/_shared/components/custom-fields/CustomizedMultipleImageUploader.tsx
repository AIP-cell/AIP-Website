import React from "react";

import Typography from "@mui/material/Typography"; // Import Typography from Material-UI
import { Controller } from "react-hook-form"; // Import Controller from react-hook-form

import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import FileUploaderMultiple from "@/views/forms/form-elements/file-uploader/FileUploaderMultiple";

const CustomizedMultipleImageUploader = ({
  control,
  errors,
  label,
  name,
  width,
}: {
  control: any;
  errors: any;
  label: string;
  name: string;
  width?: number;
}) => {
  return (
    <DropzoneWrapper width={width}>
      <Typography variant="h6" sx={{ mb: 2.5 }}>
        {label}:
        {!!errors[name] && (
          <span style={{ color: "red", fontSize: "14px" }}>
            Invalid image format {!!errors[name]}
          </span>
        )}
      </Typography>
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <div>
            <FileUploaderMultiple
              files={field.value}
              setFiles={field.onChange}
              error={errors.certificates}
            />
          </div>
        )}
      />
    </DropzoneWrapper>
  );
};

export default CustomizedMultipleImageUploader;
