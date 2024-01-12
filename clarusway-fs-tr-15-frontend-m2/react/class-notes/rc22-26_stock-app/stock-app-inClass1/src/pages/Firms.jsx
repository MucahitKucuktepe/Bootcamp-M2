import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useStock from "../service/useStock";
import { useDispatch, useSelector } from "react-redux";
import FirmModal from "../components/FirmModal";
import FirmCard from "../components/FirmCard";


const Firms = () => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { firms } = useSelector((state) => state.stock);
  console.log(firms);
  const { getStocks } = useStock();
  useEffect(() => {
    getStocks("firms");
    getStocks("sales")
  }, []);

  const handleOpen = () => setOpen(true);
  return (
    <div>
      <Typography variant="h4" style={{ color: "red" }} py={"10px"} mb={3}>
        Firms
      </Typography>
      <div>
        <Button
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(0, 255, 0, 0.2)",
              color: "red",
              "& .MuiSvgIcon-root": {
                color: "red",
              },
            },
          }}
          variant="contained"
          onClick={handleOpen}
        >
          NEW FİRM
        </Button>
        <FirmModal open={open} setOpen={setOpen} />
      </div>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-around",
        }}
      >
        {firms.map((firm) => (

        <FirmCard key={firm._id} {...firm} />
        ))}
      </div>
    </div>
  );
};

export default Firms;
