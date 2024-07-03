import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const New = () => {
  var [data, setData] = useState("click the button");
  const home = () => {
    console.log("home");
    setData("Home")
  };
  const Gal = () => {
    console.log("home");
    setData("Gallery")
  };
  const con = () => {
    console.log("home");
    setData("Contact")
  };

   
  return (
    <div style={{ marginLeft: "40%", marginTop: "10%", textAlign: "centre" }}>
      <Typography variant="h4">Welcome to {data}</Typography>
      <br />
      <br />
      <Button variant="contained" onClick={home}>
        Home
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" color="secondary" onClick={Gal}>
        Gallery
      </Button>
      &nbsp;&nbsp;
      <Button variant="contained" color="error" onClick={con}>
        Contact
      </Button>
    </div>
  );
};

export default New;
