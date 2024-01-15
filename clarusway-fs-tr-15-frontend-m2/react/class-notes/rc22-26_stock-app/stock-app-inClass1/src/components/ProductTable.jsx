import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Products from "../pages/Products";

const columns = [
  { field: "_id", headerName: "#", flex: 2, headerAlign: "center" },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    headerAlign: "center",
    valueGetter: (params) => {
      console.log(params);
      return params.row.categoryId.name;
    },
  },
  {
    field: "brand",
    headerName: "Brand",
    flex: 1,
    headerAlign: "center",
    valueGetter: (params) => params.row.brandId.name,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    headerAlign: "center",
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export default function ProductTable({ products, categories, brands }) {
  console.log(products);
  console.log(categories);
  console.log(brands);
  function getRowId(row) {
    return row._id;
  }
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
