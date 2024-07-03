import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const First = (props) => {
  return (
    <div>
      <h1> {props.name} is {props.age} years young</h1>
      <input placeholder="username" />
      <br />
      <br />
      <input type="password" placeholder="password" />
      <br />
      <br />
      <button>Login</button>
      <br />
      <br />
      <br />
      <br />

      <Typography variant="h3">Login Page</Typography>
      <br /><br />
      <TextField variant="outlined" label='username'/>
      <br /><br />
      <TextField variant="filled" label='password'/>
      <br /><br />
      <TextField variant="standard" label=' Confirm password'/>
      <br /><br />
      <Button variant="text">Login</Button>&nbsp;&nbsp;
      <Button variant="contained" color="success">Login</Button>&nbsp;&nbsp;
      <Button variant="standard" >Login</Button>


    </div>
  );
};

export default First;
