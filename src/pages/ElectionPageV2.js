import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../extras/reqHelper";

const ElectionPageV2 = () => {
  const { eleID } = useParams()
  const [election, setElection] = useState({});
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get(`/public/get-election/${eleID}`)
      .then((res) => { setElection(res.data); console.log(res.data) })
      .catch(err => console.log(err))
    axios.get(`/public/all-cand/${eleID}`)
      .then((res) => { setCandidates(res.data.nominatedCandidates); console.log(res.data.nominatedCandidates) })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h1 class="mb-3">{election.electionName}</h1>
      <p class="fs-5 col-md-8">{election.electionDec}</p>

      <div class="mb-5">
        <Link to={`/election/vote/${eleID}`} class="btn btn-primary btn-lg px-4">Give Your Vote</Link>
      </div>

      <hr class="col-3 col-md-2 mb-5" />

      <div class="row g-5">
        <div class="col-md-6">
          <h2>Criateria For Voting</h2>
          <p>Ready to beyond the starter template? Check out these open source projects that you can quickly
            duplicate to a new GitHub repository.</p>
          <ul class="icon-list">
            <li><a href="#"></a></li>
          </ul>
        </div>

        <div class="col-md-6">
          <h2>Electing Parties / Candidates</h2>
          <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
          <ol>
            {
              candidates.map((cand) => {
                return (

                  <li>
                    <a href="#">{cand.candidateID}</a>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>


    </div>
  )
};

export default ElectionPageV2;
