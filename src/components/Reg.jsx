import { Typography } from "@mui/material";
import React, { useState } from "react";

const Reg = (props) => {

  var [val, setVal] = useState({
    Name: props.data.Name,
    age: props.data.age,
    place: props.data.place,
  });
 
  return (
    <div>
      <Typography>{val.Name}</Typography>
      {/* Age
      Email
      Father's Name
      Mother's Name 
      password 
      confirm password
      submit button */}
    </div>
  );
};

export default Reg;
