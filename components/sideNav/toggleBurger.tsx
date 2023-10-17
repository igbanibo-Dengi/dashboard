import { MoveRight } from "lucide-react";
import React from "react";

const ToggleBurger = ({ isHidden }) => {
  return (
    <div className={isHidden ? "hidden" : "block"}>
      <MoveRight />
    </div>
  );
};

export default ToggleBurger;
