import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { MenuItem, TextField } from "@mui/material";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import toast from "react-hot-toast";
import FileUploaderSingle from "@/views/forms/form-elements/file-uploader/FileUploaderSingle";
import VideoUploaderSingle from "@/views/forms/form-elements/file-uploader/videoUploader";

type FormValues = {
  title: string;
  linkOrVideo: string;
  link?: string;
  video: File | null;
  image: File | null;
};

const convertToEmbedLink = (url: string) => {
  let videoId = null;
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }
  if (url.includes("youtube.com")) {
    const urlParams = new URL(url);
    if (url.includes("/embed/")) {
      return url;
    }
    videoId = urlParams.searchParams.get("v");
  } else if (url.includes("youtu.be")) {
    videoId = url.split("/").pop();
  }
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return undefined;
};

export const VideoTemplateFormRepeater = ({
  onSubmitCallback,
  defaultValues,
}: any) => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    linkOrVideo: "",
    link: "",
    video: null,
    image: null,
  });

  const onSubmit = async () => {
    if (!formValues.linkOrVideo) {
      alert("Please upload a video or link before submitting.");
      return;
    }
    if (formValues.linkOrVideo && !formValues.link && !formValues.video) {
      alert("Please upload a video or link before submitting.");
      return;
    }
    if (formValues.linkOrVideo === "video") {
      formValues.link = "";
    }
    if (formValues.linkOrVideo === "link") {
      formValues.video = null;
    }
    if (!formValues.image) {
      toast.error("Please upload an thumbnail image before submitting.");
      return;
    }
    if (formValues.linkOrVideo === "video" && !formValues.video) {
      toast.error("Please fill the **Video** field before submitting.");
      return;
    }
    if (formValues.linkOrVideo === "link" && !formValues.link) {
      toast.error("Please fill the **Link** field before submitting.");
      return;
    }
    if (formValues.linkOrVideo === "link") {
      const link = convertToEmbedLink(formValues.link || "");
      formValues.link = link == undefined ? formValues.link : link;
    }
    onSubmitCallback(formValues, defaultValues?.index);
    setFormValues({
      title: "",
      linkOrVideo: "",
      link: "",
      video: null,
      image: null,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (file: File | null, type?: "video" | "image") => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [type || "video"]: file,
    }));
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      linkOrVideo: e.target.value,
    }));
  };

  useEffect(() => {
    if (defaultValues?.data) {
      setFormValues({
        title: defaultValues.data.title || "",
        video: defaultValues.data.video || null,
        link: defaultValues.data.link
          ? convertToEmbedLink(defaultValues.data.link) ||
            defaultValues.data.link
          : "",
        linkOrVideo: defaultValues.data.linkOrVideo || "",
        image: defaultValues.data.image || null,
      });
    }
  }, [defaultValues]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter title"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </Grid>
        <TextField
          style={{ marginTop: "10px", marginLeft: "13px" }}
          size="small"
          fullWidth
          type="text"
          label="Link or Video"
          defaultValue={defaultValues?.data?.linkOrVideo}
          placeholder=""
          value={formValues.linkOrVideo}
          onChange={handleOptionChange}
          select
        >
          <MenuItem value="link">Link</MenuItem>
          <MenuItem value="video">Video</MenuItem>
        </TextField>
        {/* Video Uploader */}
        {formValues.linkOrVideo === "video" && (
          <Grid item xs={12}>
            <label>Video</label>
            <DropzoneWrapper>
              <VideoUploaderSingle
                file={formValues.video}
                setFile={(file: any) => handleFileChange(file, "video")}
              />
            </DropzoneWrapper>
          </Grid>
        )}
        {/* Link Input */}
        {formValues.linkOrVideo === "link" && (
          <Grid item xs={12}>
            <TextField
              size="small"
              fullWidth
              placeholder="Enter URL"
              name="link"
              value={formValues.link}
              onChange={handleInputChange}
            />
          </Grid>
        )}
        {/* Image Uploader */}
        <Grid item xs={12}>
          <label>Thumbnail Image</label>
          <DropzoneWrapper>
            <FileUploaderSingle
              file={formValues.image}
              setFile={(file) => handleFileChange(file, "image")}
              error={""}
              aspectRatio={67 / 51}
            />
          </DropzoneWrapper>
        </Grid>
      </Grid>
      {/* Submit Button */}
      <Grid item xs={12} style={{ marginTop: "15px", marginBottom: "4px" }}>
        <Button
          variant="tonal"
          color="success"
          type="button"
          onClick={onSubmit}
        >
          {defaultValues?.data ? "Update" : "Add"}
        </Button>
      </Grid>
    </>
  );
};

export default VideoTemplateFormRepeater;
