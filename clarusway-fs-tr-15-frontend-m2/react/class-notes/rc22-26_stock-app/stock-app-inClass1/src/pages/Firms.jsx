import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const [open, setOpen] = useState(false);
 
  const { getFirms } = useStock();
  useEffect(() => {
    getFirms();
  }, []);
  const { firms } = useSelector((state) => state.stock);
  console.log(firms);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <Typography variant="h4" style={{ color: "red" }} py={"10px"}>
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
          <Card key={firm._id} sx={{ maxWidth: 345 }}>
            <Typography gutterBottom variant="h5" component="div">
              {firm.name}
            </Typography>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {firm.address}
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ height: 140 }}
              image={firm.image}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {firm.phone}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Firms;
