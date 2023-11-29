/* eslint-disable no-unused-vars */
import bird from "../src/img/bird.jpg"
export const Main = () => {
  const parStyle = {
    fontFamily: "tahoma",
    color: "#333",
    fontSize: "1.2rem",
  };
  const imgStyle = {
    width: "300px",
  };
  return (
    <main>
      <h1 style={{ color: "white", backgroundColor: "red" }}>Main</h1>
      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
        accusantium perspiciatis aliquid aliquam, facilis aperiam ex veniam
        ipsam nostrum officiis dolorem consectetur! Deserunt distinctio
        consectetur odit neque voluptas modi cum?
      </p>
      <p style={parStyle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        deleniti quisquam beatae, tenetur laudantium, possimus accusantium
        dolorem sunt quam deserunt quis iste distinctio hic odit laborum ipsa
        officiis magni dolore?
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg"
        alt=""
      />
      <img src={bird} alt="bird" />
    </main>
  );
};
