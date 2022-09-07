import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../extras/reqHelper";

const LoginPage = () => {
  const [uname, setuname] = useState();
  const [pass, setpass] = useState();
  const navigate = useNavigate();
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
          navigate("/");
        } else {
          console.log("failed");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section class="text-gray-600 body-font">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 mb-3">Next level Voting System</h1>
          <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form class="p-4 p-md-5 border rounded-3 bg-light" onSubmit={submit}>
            <h1 class="text-gray-900 h1 font-medium title-font mb-5">
              Log in
            </h1>
            <div class="form-floating mb-3">
              <input type="text" onChange={(e) => setuname(e.target.value)} class="form-control" id="floatingInput" placeholder="Username" required />
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" onChange={(e) => setpass(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" required />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
            <hr class="my-4" />
            <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          </form>
        </div>
      </div>







    </section>
  );
};

export default LoginPage;
