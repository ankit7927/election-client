import { React, useEffect, useState } from "react";
import axios from "../extras/reqHelper";
import votingImg from "../images/digitalVote.jpg"
import ElectionCard from "../components/ElectionCard";

export const HomePage = () => {
  const [eleData, setEleData] = useState([])
  useEffect(() => {
    axios.get("public/current-ele")
      .then((res) => {
        setEleData(res.data)

      })
      .catch(err => console.log(err))
  }, [])

  return (<section class="container">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={votingImg} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Welcome to New Age Elections System</h1>
        <p class="lead">A new method to vote, lets change the old voting system and bring new revolution</p>
      </div>
    </div>

    <div class="row mb-2">
      {
        eleData.map((ele) => {
          return (
            <ElectionCard data={ele} />
          )
        })
      }
    </div>
  </section>);
};

export default HomePage;
