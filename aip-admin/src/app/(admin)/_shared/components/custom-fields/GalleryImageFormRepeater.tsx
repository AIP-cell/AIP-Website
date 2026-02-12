import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import FileUploaderSingle from "@/views/forms/form-elements/file-uploader/FileUploaderSingle";
import CustomTextField from "@/@core/components/mui/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type FormValues = {
  title: string;
  date: Date;
  image: File | null;
};

export const GalleryImageTemplateFormRepeater = ({
  onSubmitCallback,
  defaultValues,
}: any) => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    date: new Date(),
    image: null,
  });

  const onSubmit = async () => {
    if (!formValues.image) {
      alert("Please upload an image before submitting.");
      return;
    }

    onSubmitCallback(formValues, defaultValues?.index);
    setFormValues({
      title: "",
      date: new Date(),
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

  const handleFileChange = (image: File | null) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      image,
    }));
  };

  useEffect(() => {
    if (defaultValues?.data) {
      setFormValues({
        title: defaultValues.data.title || "",
        date: defaultValues.data.date || new Date(),
        image: defaultValues.data.image || null,
      });
    }
  }, [defaultValues]);

  return (
    <>
      <Grid container spacing={3}>
        {/* Date Picker */}
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

        {/* Link Input */}
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter Title"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </Grid>

        {/* File Uploader */}
        <Grid item xs={12}>
          <label>Image</label>
          <DropzoneWrapper>
            <FileUploaderSingle
              file={formValues.image}
              setFile={handleFileChange}
              error={""}
              aspectRatio={820 / 546}
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

export default GalleryImageTemplateFormRepeater;
