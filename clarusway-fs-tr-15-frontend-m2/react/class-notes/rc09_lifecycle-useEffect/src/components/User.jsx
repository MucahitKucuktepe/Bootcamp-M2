import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const url = "https://randomuser.me/api/";
  const [user, setUser] = useState([]);

  const getUser = () => {
    axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const sure=setInterval(getUser,2000)
   getUser()
   return(
    clearInterval(sure)
   )

   }
  , [])
  

  console.log(user);

  const { name, email, picture, dob, location, phone } = user;

  return (
    <div>
      <img className="rounded-circle" src={picture?.large} alt="" />
      <p>Hi, My name is</p>
      <h1>
        {name?.first}
        {name?.last}{" "}
      </h1>
      <h3>{email} </h3>
      <h5>{dob?.date} </h5>
      <h5>{location?.city}</h5>
      <h5>{phone} </h5>
      <button className="btn btn-success mt-4" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
