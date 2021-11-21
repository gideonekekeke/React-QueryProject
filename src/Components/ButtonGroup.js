import { Button } from "@mui/material";
import React from "react";

const ButtonComp = ({ children, color, vart }) => {
  return (
    <div>
      <Button variant={vart} color={color}>
        {" "}
        {children}
      </Button>
    </div>
  );
};

export default ButtonComp;
