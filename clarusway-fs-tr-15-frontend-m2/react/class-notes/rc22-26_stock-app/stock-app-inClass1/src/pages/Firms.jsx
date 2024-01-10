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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

const Firms = () => {
  const { deleteFirm } = useStock()
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { firms } = useSelector((state) => state.stock);
  console.log(firms);
  const { getFirms } = useStock();
  useEffect(() => {
    getFirms();
  }, []);

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

          <Card
            key={firm._id}
            sx={{
              maxWidth: 345,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
              height: "400px",
              p: 2,
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {firm.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {firm.address}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ height: 140, objectFit: "contain" }}
              image={firm.image}
              title="green iguana"
            />

            <Typography variant="body2" color="text.secondary">
              {firm.phone}
            </Typography>

            <CardActions>
              <DeleteOutlineIcon
           
                onClick={() => deleteFirm(firm._id)}
              />
              <EditIcon />
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Firms;
