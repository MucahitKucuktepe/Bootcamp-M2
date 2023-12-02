import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { products, categories } from "./helper/data";

import "./App.scss";

function App() {
  console.log(products);
  return (
    <div>
      <Header categories={categories} text="Product List" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
