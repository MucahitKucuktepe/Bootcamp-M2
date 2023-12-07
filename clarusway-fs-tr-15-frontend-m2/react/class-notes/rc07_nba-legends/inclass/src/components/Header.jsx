import nbalogo from "../assets/nba-logo.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container"

const Header = () => {
  return (
    <Container>
      <Image src={nbalogo}></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
    </Container>
  );
};
export default Header;
