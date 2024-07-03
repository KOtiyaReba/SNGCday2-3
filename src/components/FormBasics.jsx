import { TextField } from "@mui/material";
import React, { useState } from "react";

const FormBasics = () => {
  var [inputs, setInputs] = useState({ username: "", email: "",place:'' });
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };
  return (
    <div style={{ marginTop: "10%", marginLeft: "45%" }}>
      <TextField
        variant="outlined"
        label="Username"
        onChange={inputHandler}
        name="username"
        value={inputs.username}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Email"
        onChange={inputHandler}
        name="email"
        value={inputs.email}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Place"
        onChange={inputHandler}
        name="place"
        value={inputs.place}
      />
    </div>
  );
};

export default FormBasics;
