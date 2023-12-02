import React from "react";


// const ProductCard = ({ product }) => {
//   const { id, title, image, price } = product;
//   return (
//     <div key={id}>
//       <div>
//         <h3>{price}</h3>
//       </div>
//       <img src={image} alt={title} width="100px" />
//       <div>
//         <h2>{title}</h2>
//       </div>
//     </div>
//   );
// };
const ProductCard = ({title,image,price}) => {
  return (
    <div className="card">
      <div className="price">
          <h3>{price}</h3>
        </div>
        <img src={image} alt={title}  />
        <div className="card__over">
          <h2>{title}</h2>
        </div>
    </div>
  );
};

export default ProductCard;
