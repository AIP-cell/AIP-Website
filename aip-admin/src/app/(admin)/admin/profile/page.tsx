"use client";
import ProfilePage from "@/app/(admin)/_shared/components/reset/ChangePasswordCard";

export const dynamic = "force-dynamic";

const Table: React.FC = () => {
  const data =
    typeof window !== "undefined"
      ? window.localStorage.getItem("userData")
      : null;

  const email = data ? JSON.parse(data).email : null;
  const id = data ? JSON.parse(data).id : null;
  return <ProfilePage email={email} id={id}></ProfilePage>;
};

export default Table;
