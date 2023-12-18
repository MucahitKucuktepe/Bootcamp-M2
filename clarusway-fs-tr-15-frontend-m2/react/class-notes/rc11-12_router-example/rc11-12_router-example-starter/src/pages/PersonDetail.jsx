import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const { idx } = useParams();
  console.log(idx);
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${idx}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something wemt wrong");
        }
        return res.json()})
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPerson();
  }, []);
  console.log(person);
    if(error){
        return <NotFound />
    }else {
        return(
 <div className="container text-center mt-5">
      <img className="rounded" src={person.avatar} alt="img" />
      <h6>
        {person.first_name} {person.last_name}
      </h6>
      <p>{person.email}</p>
      <div>
        <button className="btn btn-warning me-2" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
        )
    }
   
  
};

export default PersonDetail;
