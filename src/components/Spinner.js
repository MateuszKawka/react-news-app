import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const Spinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CgSpinnerTwoAlt className="text-3xl animate-spin text-blue-600 mt-10" />
    </div>
  );
};

export default Spinner;
