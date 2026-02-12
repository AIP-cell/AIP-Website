import React from "react";
import { Button, IconButton, Box } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import type {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";

interface FileUploadProps {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
  name: string;
  label?: string;
  fileType?: string;
  previewWidth?: number;
  previewHeight?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  register,
  watch,
  setValue,
  name,
  label = "Upload Report",
  fileType = "image/*,.pdf",
  previewWidth = 1090,
  previewHeight = 375,
}) => {
  const file = watch(name); // No need to cast, TypeScript will infer it
  const fileUrl =
    file && file instanceof FileList
      ? file.length > 0
        ? URL.createObjectURL(file[0]) // If file is not empty, create URL
        : null // If file is empty, return null
      : file && typeof file === "string" && file.startsWith("uploads")
        ? process.env.NEXT_PUBLIC_STORAGE_URL + "/" + file
        : null;

  const handleRemoveFile = () => {
    // Reset the file value
    setValue(name, null, { shouldValidate: false });
  };

  return (
    <div>
      {!fileUrl ? (
        <Button
          variant="outlined"
          component="label"
          sx={{ marginTop: 2, marginBottom: 4 }}
        >
          {label}
          <input
            type="file"
            accept={fileType}
            style={{ display: "none" }}
            {...register(name, {
              required: "File is required",
            })}
          />
        </Button>
      ) : (
        <Box position="relative" display="inline-block" marginTop={2}>
          {/* Check if the file is a File instance */}
          {file && file instanceof File ? (
            <img
              key={file.name}
              alt={file.name}
              className="single-file-image"
              src={fileUrl}
              width={previewWidth}
              height={previewHeight}
            />
          ) : (
            <embed
              key={(file as File)?.name}
              src={fileUrl}
              width={previewWidth}
              height={previewHeight}
              type={(file as File)?.type || "application/pdf"}
            />
          )}

          {/* Icon button to remove the file */}
          <IconButton
            onClick={handleRemoveFile}
            sx={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "white",
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </div>
  );
};

export default FileUpload;
