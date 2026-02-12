"use client";

import AboutUsAipJourneySection from "@/app/(admin)/_shared/components/sections/AboutUsAipJourneySection";

// const defaultValues = async () => {
//   try {
//     const response = await FounderNetworkDescriptionApi.view(reqAuthHeader());

//     return response.data.data;
//   } catch (error) {
//     console.log(error);
//   }
//   return null;
// };

const AddAboutUsAipJournerySection: React.FC = () => {
  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ["description"],
  //     queryFn: defaultValues,
  //   });

  //   if (isLoading) {
  //     return (
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           height: "100vh",
  //         }}
  //       >
  //         <ClipLoader size={50} color={"#50B9A8"} loading={isLoading} />
  //       </div>
  //     );
  //   }

  return <AboutUsAipJourneySection />;
};

export default AddAboutUsAipJournerySection;
