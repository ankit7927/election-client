import { React, useEffect, useState } from "react";
import Idconformation from "../components/Idconformation";
import axios from "../extras/reqHelper";
import useElection from "../hooks/useElection";


const ElectionPageV2 = () => {
  const { election } = useElection()
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get(`/public/all-cand/${election._id}`)
      .then((res) => { setCandidates(res.data.nominatedCandidates); })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h1 class="mb-3">{election.electionName}</h1>
      <p class="fs-5 col-md-8">{election.electionDec}</p>

      <div class="mb-5">
        <Idconformation />
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
          <ol class="list-group list-group-numbered">
            {
              candidates.map((cand) => {
                return (
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Party Name</div>
                      {cand.candidateID}
                    </div>
                    <span class="badge bg-primary rounded-pill">{cand.voteCount}</span>
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
