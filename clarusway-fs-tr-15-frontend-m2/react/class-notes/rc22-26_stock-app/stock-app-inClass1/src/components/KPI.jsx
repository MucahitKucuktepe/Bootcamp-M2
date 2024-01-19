import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, deepOrange, deepPurple, pink } from "@mui/material/colors";
import { Avatar, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";

const kpiData = [
  {
    id: 1,
    title: "Sales",
    amount: "",
    icon: <MonetizationOnIcon sx={{fontSize:"3rem"}} />,
    bgColor: deepPurple[100],
    color: deepPurple[700],
  },
  {
    id: 2,
    title: "Sales",
    amount: "",
    icon: <ShoppingCartIcon sx={{fontSize:"3rem"}} />,
    bgColor: pink[100],
    color: pink[700],
  },
  {
    id: 3,
    title: "Sales",
    amount: "",
    icon: <PaymentsIcon sx={{fontSize:"3rem"}} />,
    bgColor: amber[100],
    color: amber[700],
  },
];
const KPI = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      {kpiData.map((item) => (
        <Paper key={item.id} elevation={10}>
          <Avatar sx={{ bgcolor: item.bgColor, color:item.color, width:"80px",height:"80px" }}> {item.icon} </Avatar>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPI;
