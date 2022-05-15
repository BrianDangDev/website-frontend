import React, { useEffect, useState } from "react";
import "./HomeStyles.css";
import Carousell from "./carousel";
import Article from "./Article";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";
import agent from "../../proxy/userService";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Board from "./BoardDirectors";

export default function HomepageComponent(props) {
  const location = useLocation();
  const [userDetail, setUserDetail] = useState("");
  const [display,setDisplay] =useState(false);
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username != null) {
      agent.UserAPI.detail(username).then((response) => {
        setUserDetail(response);
        setDisplay(true);
        console.log(response);
      });
    } else {
      setDisplay(false);
    }
  }, []);
  return (
    <div className="center">
      <>
       
        {display  && (
          <div>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Email -{userDetail.email}
                </Typography>
                <Typography variant="h5" component="div">
                  Welcome User {userDetail.firstname} {userDetail.lastname}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  LastName -{userDetail.lastname}
                </Typography>
                <Typography variant="body2">
                  Your user level is {userDetail.userLevel}
                  <br />
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Your phone number is {userDetail.telephone}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </>
      <Carousell />
      <Article />
      <Board/>
    </div>
  );
}
