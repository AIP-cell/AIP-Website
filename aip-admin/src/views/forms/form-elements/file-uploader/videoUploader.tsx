import React from "react";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { useDropzone } from "react-dropzone";
import { StorageUrl } from "@/utils/BaseUrl";

// Styled component for the video
const Video = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const VideoUploaderSingle = ({ file, setFile, error }: any) => {
  // ** Hooks

  const theme = useTheme();

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 100 * 1024 * 1024, // 100MB limit
    accept: {
      "video/*": [], // Accepts all video formats
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile); // Replace the existing file with the new one
        toast.success("Video uploaded successfully.");
      }
    },
    onDropRejected: () => {
      toast.error("You can only upload video files under 100MB.");
    },
  });

  const handleRemoveVideo = () => {
    setFile(null); // Clear the current video
  };

  return (
    <Box
      {...getRootProps({ className: "dropzone" })}
      style={{
        ...(error ? { border: `2px dashed red` } : {}),
        height: 450,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <input {...getInputProps()} />
      {file ? (
        typeof file === "string" ? (
          // Display existing video from URL
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <Video controls>
              <source
                src={`${StorageUrl}/${file}`}
                type={`video/${file.split(".").pop()}`}
              />
              Your browser does not support the video tag.
            </Video>
            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: theme.palette.background.paper,
                padding: theme.spacing(0.5),
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={handleRemoveVideo}
            >
              ✖ {/* Replace with an icon if needed */}
            </Box>
          </Box>
        ) : (
          // Display newly uploaded video
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <Video controls>
              <source
                src={URL.createObjectURL(file)}
                type={`video/${file.name.split(".").pop()}`}
              />
              Your browser does not support the video tag.
            </Video>
            <Box
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: theme.palette.background.paper,
                padding: theme.spacing(0.5),
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={handleRemoveVideo}
            >
              ✖ {/* Replace with an icon if needed */}
            </Box>
          </Box>
        )
      ) : (
        // Display placeholder for uploading
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={`/images/misc/upload-${theme.palette.mode}.png`}
            alt="upload placeholder"
            style={{ width: 100, marginBottom: theme.spacing(2) }}
          />
          <Typography variant="h5" sx={{ mb: 2.5 }}>
            Drop video files here or click to upload.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default VideoUploaderSingle;
