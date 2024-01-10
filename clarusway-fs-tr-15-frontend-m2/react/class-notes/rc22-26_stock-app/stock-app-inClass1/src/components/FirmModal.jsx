import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
          />
          <TextField
            label="First Name"
            name="firstName"
            id="firstName"
            type="text"
            variant="outlined"
          />
          <TextField
            label="Last Name"
            name="lastName"
            id="last_name"
            type="text"
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
