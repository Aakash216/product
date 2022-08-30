import React, { useEffect, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import { useParams } from "react-router-dom";
const axios = require("axios").default;



export default function OrderDetails() {
    const {id} = useParams();
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get(
        `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`
      )
      .then((res) => {
        console.log(res.data.data.products);
        setData(res.data.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        marginTop: "60px",
        alignContent: "center",
      }}
    >
     <h1 item xs={12} sm={6} md={3} lg={3} style={{fontSize:"60px",fontWeight:"bold",color:"#808081",alignItems:"center",textAlign:"center",margin:"25px"}}>Order Details</h1>

      <Grid container spacing={2} direction="row">
        {data.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3} lg={3}>
            <Card
              style={{
                width: "auto",
                height: "810px",
                backgroundColor: "#191919",
                borderRadius: "16px",
              }}
            >
              <CardMedia
                component="img"
                image={item.plpimaage}
                alt="green iguana"
              />

              <CardContent>
                <Typography variant="body2" color="white" fontSize={20}>
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  fontSize={20}
                  marginTop="15px"
                >
                  ₹{item.price}{" "}
                  <span style={{ color: "green" }}>
                    ({item.discount}% off){" "}
                  </span>
                </Typography>
                <Typography
                item xs={12} sm={6} md={3} lg={3}
                  variant="body2"
                  color="white"
                  fontSize={20}
                  marginTop="20px"
                >
               size = {item.sizes[0]}
                </Typography>
                <Typography
                item xs={12} sm={6} md={3} lg={3}
                  variant="body2"
                  color="white"
                  fontSize={20}
                  marginTop="20px"
                >
               quantity = 2
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
