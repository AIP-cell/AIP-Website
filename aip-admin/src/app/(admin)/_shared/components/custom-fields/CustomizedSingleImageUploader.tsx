import React from "react";

import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";

import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import FileUploaderSingle from "@/views/forms/form-elements/file-uploader/FileUploaderSingle";
import { Button } from "@mui/material";

const CustomizedSingleImageUploader = ({
  control,
  errors,
  name,
  label,
  width,
  aspectRatio, // Add aspect ratio here
}: {
  control: any;
  errors: any;
  name: string;
  label: string;
  width?: number;
  aspectRatio?: number; // Aspect ratio prop
}) => {
  const handleReset = (field: any) => {
    field.onChange("");
  };

  return (
    <DropzoneWrapper width={width}>
      <Typography variant="h6" sx={{ mb: 2.5 }}>
        {label}
        {!!errors[name] && (
          <span style={{ color: "red", fontSize: "14px" }}>
            Invalid image format {!!errors[name]}
          </span>
        )}
      </Typography>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div>
            <FileUploaderSingle
              file={field.value}
              setFile={field.onChange}
              error={errors[name]}
              aspectRatio={aspectRatio}
            />
            <Button
              sx={{ mt: 2, color: "red" }}
              size="small"
              color="error"
              variant="outlined"
              type="button"
              onClick={() => handleReset(field)}
            >
              Reset Image
            </Button>
          </div>
        )}
      />
    </DropzoneWrapper>
  );
};

export default CustomizedSingleImageUploader;
