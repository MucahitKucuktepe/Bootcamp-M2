import errorImg from "../img/404.png";
import { useNavigate, useParams } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={errorImg} alt="" />
      <div>
        <button className="btn btn-warning me-2" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
