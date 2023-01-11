import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {

  return (
    <section class="text-gray-600 body-font">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 mb-3">Next level Voting System</h1>
          <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
