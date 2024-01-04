import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { clearNewsData, getNewsData } from "../features/newsApiSlice";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
const News = () => {
  const dispatch = useDispatch();
  const { newsData, error, loading } = useSelector((state) => state.newsApi);
  useEffect(() => {
    dispatch(getNewsData());
    return () => {
      dispatch(clearNewsData());
    };
  }, []);

  return (
    <>
      <h1>NEWS</h1>
      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={loadingGif} alt="" />
        </Box>
      )}

      {error ? (
        <Typography> Sometihing Went Wrong! </Typography>
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsData?.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item?.urlToImage}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
