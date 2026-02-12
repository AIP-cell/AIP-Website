import { useState } from "react";
import toast from "react-hot-toast";

// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

// ** Third Party Imports
import { useDropzone } from "react-dropzone";

import { StorageUrl } from "@/utils/BaseUrl";
import CropperModal from "./ModalComponent";

const Img = styled("img")(({ theme }) => ({
  width: 48,
  height: 48,
  marginBottom: theme.spacing(8.5),
}));

type Props = {
  file?: any;
  setFile: (file: any) => void;
  error: any;
};

const FileUploaderSingle = (props: Props & { aspectRatio?: number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const theme = useTheme();

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    // maxSize: 5 * 1024 * 1024,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      props.setFile(Object.assign(selectedFile));
      setIsModalOpen(true);
    },
    onDropRejected: () => {
      toast.error("You can only upload files of type .png, .jpeg, .jpg");
      toast.error("You can't upload files of greater than 2mb");
    },
  });

  return (
    <>
      <Box
        {...getRootProps({ className: "dropzone" })}
        style={{
          ...(props.error ? { border: `2px dashed red` } : {}),
          ...(props.file ? { height: 450 } : {}),
        }}
      >
        <input {...getInputProps()} />
        {props.file ? (
          typeof props.file === "string" ? (
            <img
              key={props.file}
              alt={props.file}
              className="single-file-image"
              src={StorageUrl + "/" + props.file.replaceAll("\\", "/")}
            />
          ) : (
            <img
              key={props.file?.name || ""}
              alt={props.file?.name || ""}
              className="single-file-image"
              src={URL.createObjectURL(props.file)}
            />
          )
        ) : (
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Img
              alt="Upload img"
              src={`/images/misc/upload-${theme.palette.mode}.png`}
            />
            <Typography variant="h5" sx={{ mb: 2.5 }}>
              Drop files here or click to upload.
            </Typography>
          </Box>
        )}
      </Box>

      <CropperModal
        image={
          props.file &&
          (typeof props.file === "string"
            ? StorageUrl + "/" + props.file.replaceAll("\\", "/")
            : URL.createObjectURL(props.file))
        }
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(croppedFile: any) => {
          if (croppedFile) {
            const url = URL.createObjectURL(croppedFile);
            // props.setFile(url);
            props.setFile(croppedFile);
          }
        }}
        aspectRatio={props.aspectRatio}
      />
    </>
  );
};

export default FileUploaderSingle;
