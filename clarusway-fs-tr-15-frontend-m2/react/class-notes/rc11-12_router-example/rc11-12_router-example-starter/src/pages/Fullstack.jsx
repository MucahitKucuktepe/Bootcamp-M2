import { Outlet, useNavigate,Link } from "react-router-dom";

const FullStack = () => {
  const navigate=useNavigate()
  return (
    <div className="mt-4 text-center">
      <h1 className="display-6 text-success">Full Stack Path</h1>
      <p>
        Become a software and application developer, well-equipped with both
        front-end and back-end.
      </p>
      <img
        src="https://clarusway.com/wp-content/uploads/elementor/thumbs/v1-Fullstack-developer-pqnf31gbxlt9gholzgwtsxya1abhwiwulezoqna3wo.jpg"
        alt=""
      />
      <div>
        <button
          className="btn btn-outline-success mt-4"
          onClick={() => navigate("frontend")}
        >
          Learn More Frontend
        </button>
      </div>
      <div>
        <button className="btn btn-outline-success mt-4">
          {" "}
          <Link to="backend">Learn More Backend</Link>{" "}
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default FullStack;
