import Typography from "@mui/material/Typography";
// or
// import { Typography } from '@mui/material';

const TypoButtons = () => {
  return (
    <div>
      <Typography
        component="h1"
        align="center"
        color="white"
        sx={{ backgroundColor: "tomato", p: 2, m: 3 }}
      >
        Deneme
      </Typography>
    </div>
  );
};

export default TypoButtons;
