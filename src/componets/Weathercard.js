import React from "react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
const Weathercard = () => {
  return (
    <>
      <div className="weathercard">
        <div className="weatherIcon">
          <CloudOutlinedIcon color="primary" />
        </div>
      </div>
    </>
  );
};

export default Weathercard;
