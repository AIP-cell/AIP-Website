// ** React Imports
import { Fragment } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { Icon } from "@iconify/react/dist/iconify.js";

import { useDropzone } from "react-dropzone";

import { StorageUrl } from "@/utils/BaseUrl";

// ** Icon Imports

// ** Third Party Imports

interface FileProp {
  name: string;
  type: string;
  size: number;
}
interface Props {
  files: any[];
  setFiles: (files: any[]) => void;
  error: any;
}

const FileUploaderMultiple = ({ files, setFiles }: Props) => {
  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file: File) => Object.assign(file)),
      ]);
    },
  });

  const renderFilePreview = (file: FileProp) => {
    if (typeof file == "string") {
      return (
        <img
          width={38}
          height={38}
          alt={(file as string).split("/").at(-1)}
          src={StorageUrl + "/" + file}
        />
      );
    } else if (file.type?.startsWith("image")) {
      return (
        <img
          width={38}
          height={38}
          alt={file.name}
          src={URL.createObjectURL(file as any)}
        />
      );
    } else {
      return <Icon icon="tabler:file-description" />;
    }
  };

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files;

    const filtered = uploadedFiles.filter((i: FileProp) => {
      if (typeof i == "string") {
        return i != file;
      }

      return i.name !== file.name;
    });

    setFiles([...filtered]);
  };

  const fileList = files.map((file: any) => (
    <ListItem key={file.name}>
      <div className="file-details">
        <div className="file-preview">{renderFilePreview(file)}</div>
        <div>
          {typeof file == "string" ? (
            <Typography className="file-name">
              {(file as string).split("/").at(-1)}
            </Typography>
          ) : (
            <>
              <Typography className="file-name">{file.name}</Typography>
              <Typography className="file-size" variant="body2">
                {Math.round(file.size / 100) / 10 > 1000
                  ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
                  : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
              </Typography>
            </>
          )}
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon icon="tabler:x" fontSize={20} />
      </IconButton>
    </ListItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  return (
    <Fragment>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: 8.75,
              width: 48,
              height: 48,
              display: "flex",
              borderRadius: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon icon="tabler:upload" fontSize="1.75rem" />
          </Box>
          <Typography variant="h4" sx={{ mb: 2.5 }}>
            Drop files here or click to upload (Multiple Images)
          </Typography>
        </Box>
      </div>
      {files.length ? (
        <Fragment>
          <List>{fileList}</List>
          <div className="buttons">
            <Button
              color="error"
              variant="outlined"
              onClick={handleRemoveAllFiles}
            >
              Remove All
            </Button>
            <Button variant="contained">Upload Files</Button>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default FileUploaderMultiple;
