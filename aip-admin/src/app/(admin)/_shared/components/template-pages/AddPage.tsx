// "use client";

// import Link from "next/link";

// // import { useRouter } from 'next/navigation'

// import { useMutation } from "@tanstack/react-query";

// // import { useRouter } from 'next/navigation'

// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";

// import Divider from "@mui/material/Divider";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import CardActions from "@mui/material/CardActions";

// // import { useRouter } from 'next/router'
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { zodResolver } from "@hookform/resolvers/zod";

// // import { toast } from 'react-hot-toast'

// // import { serialize } from 'object-to-formdata'

// import type { DatePickerProps } from "react-datepicker";

// // import toast from 'react-hot-toast'
// import toast from "react-hot-toast";

// import { CustomizedTextField } from "../custom-fields/CustomizedTextField";
// import CustomizedMultilineTextField from "../custom-fields/CustomizedMultilineTextField";
// import { CustomizedDatePicker } from "../custom-fields/CustomizedDatePicker";
// import { CustomizedDropDown } from "../custom-fields/CustomizedDropDown";
// import CustomizedSwitch from "../custom-fields/CustomizedSwitch";
// import { FormRepeater } from "../custom-fields/CustomizedFormRepeater";
// import CustomizedSingleImageUploader from "../custom-fields/CustomizedSingleImageUploader";
// import CustomizedMultipleImageUploader from "../custom-fields/CustomizedMultipleImageUploader";

// import FileUpload from "../custom-fields/CustomizedFileUploader";
// import PageApi from "@/axios/PageApi";
// import { fileToBase64 } from "@/utils/FiletoBase64";
// import { useRouter } from "next-nprogress-bar";

// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

// const yearSchema = z.object({
//   name: z.string().nonempty({ message: "Required" }),
//   dropDown: z.string().nonempty({ message: "Required" }),
//   address: z.string().nonempty({ message: "Required" }),
//   isActive: z.boolean(),
//   date: z.date(),
//   file: z.any(),
//   repeater: z
//     .array(
//       z.object({
//         title: z.any(),
//       })
//     )
//     .optional(),

//   image: z.any().refine(
//     (value) => {
//       const acceptedTypes = ACCEPTED_IMAGE_TYPES;

//       const isTypeAccepted = acceptedTypes.includes(value?.type) || !value;

//       return isTypeAccepted;
//     },
//     {
//       message: "Invalid image format",
//     }
//   ),
//   multipleImages: z.any().refine(
//     (values) => {
//       const acceptedTypes = ACCEPTED_IMAGE_TYPES;

//       const isTypeAccepted = values.every(
//         (value: any) => acceptedTypes.includes(value?.type) || !value
//       );

//       return isTypeAccepted;
//     },
//     {
//       message: "Invalid image format",
//     }
//   ),
// });

// type TyearSchema = z.infer<typeof yearSchema>;

// export const AddPage = ({
//   popperPlacement,
// }: {
//   popperPlacement: DatePickerProps["popperPlacement"];
// }) => {
//   const router = useRouter()

//   const {
//     handleSubmit,
//     register,
//     control,
//     reset,
//     watch,
//     formState: { errors, isSubmitting },
//   } = useForm<TyearSchema>({
//     resolver: zodResolver(yearSchema),
//   });

//   const mutation = useMutation({
//     mutationFn: (values: TyearSchema) => PageApi.add(values),
//     onSuccess: (response) => {
//     if(response.data.success == true){
//       toast.success(response.data.message);

//       router.push('/admin/about');
//     }
//     },
//     onError: () => {
//       toast.error("Error submitting form");
//     },
//   });

//   const onSubmit = async (values: TyearSchema) => {
//     if (values.image instanceof File) {
//       values.image = await fileToBase64(values.image);
//     }

//     if (values.file && values.file[0] instanceof File) {
//       values.file = await fileToBase64(values.file[0]);
//     }

//     if (values.multipleImages && Array.isArray(values.multipleImages)) {
//       const convertedImages = await Promise.all(
//         values.multipleImages.map((image) => fileToBase64(image))
//       );
//       values.multipleImages = convertedImages;
//     }
//     mutation.mutate(values);
//   };

//   const handleResetClick = () => {
//     reset();
//   };

//   const handleReset = (field: any) => {
//     field.onChange("");
//   };

//   return (
//     <>
//       <Breadcrumbs sx={{ mb: 4 }}>
//         <Link href={`/admin/about`}>
//           <Typography>Details</Typography>
//         </Link>
//         <Typography>Add</Typography>
//       </Breadcrumbs>

//       {/* Form Card */}
//       <Card>
//         <CardHeader title="Informations" />
//         <Divider sx={{ m: "0 !important" }} />
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* onSubmit={handleSubmit(onSubmit)} */}
//           <CardContent>
//             <Grid container spacing={6}>
//               <Grid item xs={6} md={6}>
//                 <CustomizedTextField
//                   label="Name"
//                   name="name"
//                   register={register}
//                   errors={errors}
//                 />
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <CustomizedDropDown
//                   type="number"
//                   label="Position"
//                   name="dropDown"
//                   register={register}
//                   errors={errors}
//                 />
//               </Grid>
//               <Grid item xs={12} md={12}>
//                 <CustomizedMultilineTextField
//                   placeholder="Address"
//                   name="address"
//                   register={register}
//                   errors={errors}
//                 />
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <CustomizedSwitch
//                   control={control}
//                   name="isActive"
//                   ariaLabel="status switch"
//                 />
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <CustomizedDatePicker
//                   control={control}
//                   name="date"
//                   label="Date"
//                   errors={errors}
//                   popperPlacement={popperPlacement}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <FormRepeater
//                   label={"Reapeater"}
//                   control={control}
//                   register={register}
//                   controlName={"repeater"}
//                   title={(index) => register(`repeater.${index}.title`)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomizedSingleImageUploader
//                   control={control}
//                   errors={errors}
//                   label=" Image"
//                   name="image"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomizedMultipleImageUploader
//                   label="Multiple Images"
//                   name="multipleImages"
//                   control={control}
//                   errors={errors}
//                   handleReset={handleReset}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FileUpload
//                   register={register}
//                   watch={watch}
//                   name="file"
//                   label="Upload File"
//                   previewWidth={1040}
//                   previewHeight={375}
//                 />
//               </Grid>
//             </Grid>
//           </CardContent>
//           <Divider sx={{ m: "0 !important" }} />
//           <CardActions>
//             <Button
//               size="large"
//               type="submit"
//               sx={{ mr: 2 }}
//               variant="contained"
//             >
//               Submit
//             </Button>
//             <Button
//               disabled={isSubmitting}
//               type="reset"
//               size="large"
//               color="secondary"
//               variant="outlined"
//               onClick={handleResetClick}
//             >
//               Reset
//             </Button>
//           </CardActions>
//         </form>
//       </Card>
//     </>
//   );
// };

// export default AddPage;
