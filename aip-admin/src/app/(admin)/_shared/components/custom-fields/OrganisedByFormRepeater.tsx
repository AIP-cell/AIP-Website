import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import DropzoneWrapper from "@/@core/styles/libs/react-dropzone";
import FileUploaderSingle from "@/views/forms/form-elements/file-uploader/FileUploaderSingle";
import FileUploaderSingleCopy from "@/views/forms/form-elements/file-uploader/FileUploaderSingle copy";

type FormValues = {
  link: string;
  image: File | null;
};

export const OrganisedByTemplateFormRepeater = ({
  onSubmitCallback,
  defaultValues,
}: any) => {
  const [formValues, setFormValues] = useState<FormValues>({
    link: "",
    image: null,
  });
  const onSubmit = async () => {
    onSubmitCallback(formValues, defaultValues?.index);

    setFormValues({
      link: "",
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
        link: defaultValues.data.link || "",
        image: defaultValues.data.image || null,
      });
    }
  }, [defaultValues]);

  return (
    <>
      <Grid container spacing={3}>
        {/* Name Input */}
        <Grid item xs={12}>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter link"
            name="link"
            value={formValues.link}
            onChange={handleInputChange}
          />
        </Grid>

        {/* File Uploader */}
        <Grid item xs={12}>
          <label>Image</label>

          <DropzoneWrapper>
            <FileUploaderSingleCopy
              file={formValues.image}
              setFile={handleFileChange}
              error={""}
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
          {defaultValues.data ? "Update" : "Add"}
        </Button>{" "}
      </Grid>
    </>
  );
};

export default OrganisedByTemplateFormRepeater;
