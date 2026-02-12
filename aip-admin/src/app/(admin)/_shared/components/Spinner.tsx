import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClipLoader size={50} color={"#5E165B"} />
    </div>
  );
};

export default Spinner;
