import { redirect } from "next/navigation";

const page = async () => {
  redirect("/resource-center/curated-resources/featured");
};

export default page;
