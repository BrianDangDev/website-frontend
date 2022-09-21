import "./SignUpStyles.css";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import agent from "../../proxy/userService";
import Grid from "@mui/material/Grid";
import background from "./img/1.jpg";
import SignUpPageFooter from "./SignUpPageFooter";

export default function SignUpComponent() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telePhone, setPhNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [toggle, setToggle] = useState(true);
  async function onClick() {
    const object = {
      username: username,
      firstname: firstname,
      lastname: lastName,
      email: email,
      password: password,
      telephone: telePhone,
    };

    await agent.UserAPI.create(object).then(() => {
      setToggle(false);
    });
  }
  return (
    <div className="Signup">
      <img className="signup-component-img" src={background}></img>
      {toggle ? (
        <div className="Signup-component">
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <h2
              className="Signuph2"
              style={{
                marginLeft: "60px",
                color: "#FFFF",
                backgroundImage: "url(${background})",
              }}
            >
              RedBack Sign Up
            </h2>
            <Grid item xs={12}>
              <TextField
                className="Signup-input"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="Signup-input"
                value={firstname}
                placeholder="firstname"
                onChange={(e) => setFirstName(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="Signup-input"
                value={lastName}
                placeholder="lastname"
                onChange={(e) => setLastName(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="Signup-input"
                value={telePhone}
                placeholder="telephone"
                onChange={(e) => setPhNumber(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="Signup-input"
                value={email}
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="Signup-input"
                value={password}
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{
                  borderRadius: 8,
                  backgroundColor: "#e8574d",
                  color: "#FFFF",
                  width: "160%",
                  marginLeft: "10px",
                  marginTop: "20px",
                  padding: "10px 30px",
                  fontSize: "20px",
                }}
                onClick={() => onClick()}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        <h1>User sucessfully created</h1>
      )}
      <SignUpPageFooter />
    </div>
  );
}
