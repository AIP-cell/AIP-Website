"use client";

// Third-party Imports
import classnames from "classnames";

// Component Imports
import NavToggle from "./NavToggle";
import ModeDropdown from "@components/layout/shared/ModeDropdown";
import UserDropdown from "@components/layout/shared/UserDropdown";

// Util Imports
import { verticalLayoutClasses } from "@layouts/utils/layoutClasses";

const NavbarContent = () => {
  const data =
    typeof window !== "undefined"
      ? window.localStorage.getItem("userData")
      : null;

  const name = data ? JSON.parse(data)?.name : null;
  const email = data ? JSON.parse(data).email : null;
  return (
    <div
      className={classnames(
        verticalLayoutClasses.navbarContent,
        "flex items-center justify-between gap-4 is-full"
      )}
    >
      <div className="flex items-center gap-4">
        <NavToggle />
      </div>

      <div className="flex items-center">
        {name ? name : ""}
        <UserDropdown email={email} />
      </div>
    </div>
  );
};

export default NavbarContent;
