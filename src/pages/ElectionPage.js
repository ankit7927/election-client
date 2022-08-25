import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../extras/reqHelper";
import ElectionCard from "../components/ElectionCard";

const tempdata = [
  {
    electionName: "my home election",
  },
  {
    electionName: "my home election1 ",
  },
  {
    electionName: "my home ele1joqbcowction",
  },
  {
    electionName: "myx xwwq wcwelection",
  },
  {
    electionName: "my euqw election",
  },
  {
    electionName: "my home election",
  },
  {
    electionName: "my home election",
  },
  {
    electionName: "my home election",
  },
  {
    electionName: "my home election",
  },

]



const ElectionPage = () => {
  const [data, setdata] = useState([]);
  const [allEle, setAllEle] = useState([]);

  useEffect(() => {
    // axios.get("/public/current-ele")
    //   .then((res) => { setdata(res.data); console.log(res.data) })
    //   .catch(err => console.log(err))
    // axios.get("/public/all-election")
    //   .then((res) => { setAllEle(res.data); console.log(res.data) })
    //   .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1>Onging Election</h1>

          <div class="row row-cols-1 row-cols-md-3 g-4">
            {
              data.map((ele) => {
                return (<div class="col">
                  <div class="card h-100 bg-light">
                    <div class="card-body">
                      <h5 class="card-title">{ele.electionName}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                      <Link to={ele._id} class="btn btn-primary">Check</Link>
                    </div>
                  </div>
                </div>)
              })
            }
          </div>
          <hr />



          <h1>Past Elections</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {
              tempdata.map((ele) => {
                return (<div class="col">
                  <div class="card h-100 bg-light">
                    <div class="card-body">
                      <h5 class="card-title">{ele.electionName}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                      <Link to="more" class="btn btn-primary">Check</Link>
                    </div>
                  </div>
                </div>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionPage;
