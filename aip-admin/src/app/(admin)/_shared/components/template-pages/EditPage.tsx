// 'use client'
// import { useState } from 'react'

// import Link from 'next/link'

// // import { useRouter } from 'next/navigation'

// import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Typography from '@mui/material/Typography'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import Divider from '@mui/material/Divider'

// import Grid from '@mui/material/Grid'
// import Button from '@mui/material/Button'
// import CardActions from '@mui/material/CardActions'

// // import { useRouter } from 'next/router'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'

// import { zodResolver } from '@hookform/resolvers/zod'

// // import { toast } from 'react-hot-toast'

// // import { serialize } from 'object-to-formdata'

// import type { DatePickerProps } from 'react-datepicker'

// // import toast from 'react-hot-toast'

// import { CustomizedTextField } from '../custom-fields/CustomizedTextField'
// import CustomizedMultilineTextField from '../custom-fields/CustomizedMultilineTextField'
// import { CustomizedDatePicker } from '../custom-fields/CustomizedDatePicker'
// import { CustomizedDropDown } from '../custom-fields/CustomizedDropDown'
// import CustomizedSwitch from '../custom-fields/CustomizedSwitch'
// import { FormRepeater } from '../custom-fields/CustomizedFormRepeater'
// import CustomizedSingleImageUploader from '../custom-fields/CustomizedSingleImageUploader'
// import CustomizedMultipleImageUploader from '../custom-fields/CustomizedMultipleImageUploader'

// import FileUpload from '../custom-fields/CustomizedFileUploader'
// import dayjs from 'dayjs'
// import { useMutation } from '@tanstack/react-query'
// import PageApi from '@/axios/PageApi'
// import { useParams, useRouter } from 'next/navigation'
// import toast from 'react-hot-toast'
// import { fileToBase64 } from '@/utils/FiletoBase64'
// import { cleanFilterItem } from '@mui/x-data-grid/hooks/features/filter/gridFilterUtils'

// const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

// const yearSchema = z.object({
//   name: z.string().nonempty({ message: 'Required' }),

//   dropDown: z.string().nonempty({ message: "Required" }),
//   address: z.string().nonempty({ message: 'Required' }),
//   isActive: z.boolean(),
//   date: z.date(),
//   file: z.any(),
//   repeater: z
//     .array(
//       z.object({
//         title: z.any()
//       })
//     )
//     .optional(),

//   image: z.any().refine(
//     (value) => {
//       if (typeof value === "string") {
//         return true;
//       } 
      
//       if (typeof value === "object" && value !== null) {
//         const isTypeAccepted = ACCEPTED_IMAGE_TYPES.includes(value.type);


//         return isTypeAccepted ;
//       }

//       return false;
//     },
//     {
//       message: "Invalid image format or file size too large (max 1 MB)",
//     }
//   ),
//   multipleImages: z.any()
// })

// type TyearSchema = z.infer<typeof yearSchema>

// export const EditPage = ({
//   popperPlacement,
//   data
// }: {
//   popperPlacement: DatePickerProps['popperPlacement'];
//   data: any; 
// }) => {
//   const {id} = useParams<{id:string}>();
// const router = useRouter()
//   const {
//     handleSubmit,
//     register,
//     control,
//     reset,
//     watch,
//     formState: { errors, isSubmitting }
//   } = useForm<TyearSchema>({
//     resolver: zodResolver(yearSchema),
//     defaultValues:{
//       name:data.name,
//       dropDown:data.dropDown,
//       address:data.address,
//       date:dayjs(data.date).toDate(),
//       image:data.image,
//       multipleImages:data.multipleImages,
//       repeater:data.repeater,
//       file:data.file,
//       isActive:data.isActive
//     }
//   })


//   const mutation = useMutation({
//     mutationFn: (values: TyearSchema) => PageApi.update(id, values),
//     onSuccess: (response:any) => {
//       if(response.data.success == true){
//         toast.success(response.data.message);
//         router.push('/admin/about');
//       }
      
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
//         values.multipleImages.map((image) => 
//           image instanceof File ? fileToBase64(image) : image
//         )
//       );
//       values.multipleImages = convertedImages;
//     }
//   console.log(values);
//     mutation.mutate(values);
//   };
  

//   const [studentAadhar, setStudentAadhar] = useState<File | null>(null)

//   const handleFileChange = (file: File) => {
//     setStudentAadhar(file)
//   }

//   const handleResetClick = () => {
//     reset()
//   }

//   const handleReset = (field: any) => {
//     field.onChange('')
//   }

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
//         <CardHeader title='Informations' />
//         <Divider sx={{ m: '0 !important' }} />
//         <form   onSubmit={handleSubmit(onSubmit)}>
        
//           <CardContent>
//             <Grid container spacing={6}>
//               <Grid item xs={6} md={6}>
//                 <CustomizedTextField label='Name' name='name' register={register} errors={errors} />
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <CustomizedDropDown type='number' label='Position' name='dropDown' value={data.dropDown} register={register} errors={errors} />
//               </Grid>
//               <Grid item xs={12} md={12}>
//                 <CustomizedMultilineTextField
//                   placeholder='Address'
//                   name='address'
//                   register={register}
//                   errors={errors}
//                 />
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <CustomizedSwitch control={control} name='isActive' ariaLabel='status switch' />
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <CustomizedDatePicker
//                   control={control}
//                   name='toDate'
//                   label='Date'
//                   errors={errors}
//                   popperPlacement={popperPlacement}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <FormRepeater
//                   label={'Reapeater'}
//                   control={control}
//                   register={register}
//                   controlName={'repeater'}
//                   title={index => register(`repeater.${index}.title`)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomizedSingleImageUploader control={control} errors={errors} label=' Image' name='image' />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomizedMultipleImageUploader
//                   label='Multiple Images'
//                   name='multipleImages'
//                   control={control}
//                   errors={errors}
//                   handleReset={handleReset}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FileUpload
//                   register={register}
//                   watch={watch}
//                   name='file'
//                   defaultFile={data.file}
//                   label="Upload File"
//                   previewWidth={1040}
//                   previewHeight={375}
//                 />
//               </Grid>
//             </Grid>
//           </CardContent>
//           <Divider sx={{ m: '0 !important' }} />
//           <CardActions>
//             <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
//               Submit
//             </Button>
//             <Button
//               disabled={isSubmitting}
//               type='reset'
//               size='large'
//               color='secondary'
//               variant='outlined'
//               onClick={handleResetClick}
//             >
//               Reset
//             </Button>
//           </CardActions>
//         </form>
//       </Card>
//     </>
//   )
// }

// export default EditPage
