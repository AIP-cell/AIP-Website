import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { MenuItem, TextField } from "@mui/material";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import "react-datepicker/dist/react-datepicker.css";
import VideoUploaderSingle from "@/views/forms/form-elements/file-uploader/videoUploader";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import CustomTextField from "@/@core/components/mui/TextField";

type FormValues = {
  title: string;
  linkOrVideo: string;
  link?: string;
  date: Date;
  video: File | null;
};

// Function to convert YouTube links to embed links

const convertToEmbedLink = (url: string) => {
  let videoId = null;

  // Ensure the URL starts with "https://"
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  if (url.includes("youtube.com")) {
    const urlParams = new URL(url);

    // Check if the URL is already an embed link
    if (url.includes("/embed/")) {
      return url; // Return the same URL if it's already in embed format
    }

    videoId = urlParams.searchParams.get("v");
  } else if (url.includes("youtu.be")) {
    videoId = url.split("/").pop();
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return undefined; // Return undefined if no video ID is found
};

export const GalleryVideoTemplateFormRepeater = ({
  onSubmitCallback,
  defaultValues,
}: any) => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    linkOrVideo: "",
    date: new Date(),
    link: "",
    video: null,
  });

  const onSubmit = async () => {
    if (!formValues.linkOrVideo) {
      alert("Please upload an video or link before submitting.");
      return;
    }
    if (formValues.linkOrVideo && !formValues.link && !formValues.video) {
      alert("Please upload an video or link before submitting.");
      return;
    }

    if (formValues.linkOrVideo === "video") {
      formValues.link = "";
    }
    if (formValues.linkOrVideo === "link") {
      formValues.video = null;
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
      date: new Date(),
      video: null,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => {
      let updatedValue = value;

      // Convert YouTube link to embed link if it's a link field
      // if (name === "link") {
      //   updatedValue = convertToEmbedLink(value) || value;
      // }

      return {
        ...prevValues,
        [name]: updatedValue,
      };
    });
  };

  const handleFileChange = (video: File | null) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      video,
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
        date: defaultValues.data.date || new Date(),
        link: defaultValues.data.link
          ? convertToEmbedLink(defaultValues.data.link) ||
            defaultValues.data.link
          : "",
        linkOrVideo: defaultValues.data.linkOrVideo || "",
      });
    }
  }, [defaultValues]);

  return (
    <>
      <Grid container spacing={3}>
        {/* Description Input */}
        <Grid item xs={3} md={3}>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            showMonthDropdown
            selected={formValues.date}
            id="picker-open-date"
            name="date"
            onChange={(date: Date | null) => {
              setFormValues((prevValues) => ({
                ...prevValues,
                date: date || new Date(),
              }));
            }}
            customInput={<CustomTextField fullWidth label={"Date"} />}
          />
        </Grid>
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
        {/* Option Selection (Link or Video) */}
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
                setFile={handleFileChange}
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

export default GalleryVideoTemplateFormRepeater;
