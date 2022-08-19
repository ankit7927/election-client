import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const [data, setdata] = useState({});
  var userid = localStorage.getItem("voterID");
  var navgate = useNavigate();

  useEffect(() => {
    if (userid) {
      axios
        .get(`http://localhost:4000/voter/voter-profile/${userid}`)
        .then((res) => {
          setdata(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("voterID");
    navgate("/");
  };

  if (!userid) {
    return (
      <div>
        No. user please login
        <br />
        <Link to="/login">Login here</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          {data.name} - {data.email} - {data.contact}
        </h1>
        <br />
        <p>other user data</p>
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }
};

export default ProfilePage;
