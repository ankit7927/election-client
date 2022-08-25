import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../extras/reqHelper";

const LoginPage = () => {
  const [uname, setuname] = useState();
  const [pass, setpass] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth } = useAuth();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("/voter/voter-login", {
        username: uname,
        password: pass,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.voterid);
          const voterID = res.data.voterID;
          setAuth({ uname, voterID });
          localStorage.setItem("voterToken", res.data.token);
          navigate("/profile");
        } else {
          console.log("failed");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section class="text-gray-600 body-font">
    <form onSubmit={submit}>
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Next level Voting System
          </h1>
          <p class="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h1 class="text-gray-900 h1 font-medium title-font mb-5">
            Log in  
          </h1>
          <div class="relative mb-4">
            <label for="username" class="leading-7 text-sm text-gray-600">
              Username
            </label>
            <input
              required
              onChange={(e) => setuname(e.target.value)}
              type="text"
              id="username"
              name="username"
              class="form-control"
            />
          </div>
          <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              required
              type="password"
              onChange={(e) => setpass(e.target.value)}
              id="password"
              name="password"
              class="form-control"
            />
          </div>
          <button
            type="submit"
            class="btn btn-success"
          >
            Login
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </form>
  </section>
  );
};

export default LoginPage;
