import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

type FormValues = {
  name: string;
  link: string;
};

export const TemplateFormRepeater = ({
  onSubmitCallback,
  defaultValues,
}: any) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    link: "",
  });

  const onSubmit = () => {
    if (!formValues.name || !formValues.link) {
      alert("Please provide the name and link before submitting.");
      return;
    }
    onSubmitCallback(formValues, defaultValues?.index);
    setFormValues({
      name: "",
      link: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Optional file handling logic (uncomment if needed)
  // const handleFileChange = (file: File | null) => {
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     file,
  //   }));
  // };

  useEffect(() => {
    if (defaultValues?.data) {
      setFormValues({
        name: defaultValues.data.name || "",
        link: defaultValues.data.link || "",
      });
    }
  }, [defaultValues]);

  return (
    <>
      <Grid container spacing={3}>
        {/* Name Input */}
        <Grid item xs={6}>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        {/* Link Input */}
        <Grid item xs={6}>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter link"
            name="link"
            value={formValues.link}
            onChange={handleInputChange}
          />
        </Grid>

        {/* File Uploader (Optional) */}
        {/* <Grid item xs={12}>
          <DropzoneWrapper>
            <FileUploaderSingle
              error={""}
              file={formValues.file}
              setFile={handleFileChange}
            />
          </DropzoneWrapper>
        </Grid> */}
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

export default TemplateFormRepeater;
