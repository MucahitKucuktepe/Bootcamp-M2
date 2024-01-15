import * as React from "react";
import { Button, Typography } from "@mui/material";
import useStock from "../service/useStock";
import { useSelector } from "react-redux";
import ProductsModal from "../components/ProductsModal";
import ProductTable from "../components/ProductTable";

export default function Products() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [info, setInfo] = React.useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  //? Modal states finish

  const { products, categories, brands } = useSelector((state) => state.stock);
  console.log(products);
  const { getStocks } = useStock();
  React.useEffect(() => {
    getStocks("products");
    getStocks("categories");
    getStocks("brands");
  }, []);
  return (
    <div>
      <Typography variant="h4" style={{ color: "red" }} py={"10px"} mb={3}>
        Products
      </Typography>
      <Button
        sx={{
          color: "white",
          marginBottom: "2rem",
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
        NEW PRODUCTS
      </Button>
      <ProductsModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />
      <ProductTable products={products} categories={categories} brands={brands} />
    </div>
  );
}
