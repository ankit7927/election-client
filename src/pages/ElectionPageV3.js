import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../extras/reqHelper";

const ElectionPageV3 = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [selectedCand, SelectCand] = useState("")
  const [password, setPassword] = useState("")
  const { eleID } = useParams()  // eleid
  const { auth } = useAuth();    // voterid

  useEffect(() => {
    axios.get(`/public/all-cand/${eleID}`)
      .then((res) => { setCandidates(res.data.nominatedCandidates) })
      .catch(err => console.log(err))
  }, [])


  const giveVote = (e) => {
    e.preventDefault()
    const postData = {
      "selectedCand": selectedCand,
      "eleID": eleID,
      "voterID": auth.voterID
    }

    axios.post("voter/vote", postData)
      .then((res) => {
        console.log(res.data)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div class="row g-5">

      <div class="col-md-6">
        <h2>Choose Candidate</h2>
        <p>
          Read more detailed instructions and documentation on using or
          contributing to Bootstrap.
        </p>

        <ul class="list-group mb-3" >
          {
            candidates.map((cand) => {
              return (
                <li class="list-group-item">
                  <input type="radio" required onChange={(e) => { SelectCand(e.target.value) }} class="form-check-input me-1" value={cand.candidateID} name="name" />
                  <div class="d-flex w-100 justify-content-between mt-2">
                    <h6 class="my-0">{cand.candidateID}  cand name</h6>
                    <small class="text-muted">{cand.voteCount}</small>
                  </div>
                  <p>cand.party</p>
                </li>
              )
            })
          }

        </ul>

      </div>


      <div class="col-md-6">
        <h2>Confirm Identity</h2>

        <form onSubmit={giveVote}>
          <div class="mb-3">
            <label for="otp" class="form-label">
              OTP
            </label>
            <div class="input-group mb-3">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                Get OTP
              </button>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
            <div id="passhelp" class="form-text">
              the otp will valid till 5 min from now
            </div>
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="Password"
              aria-describedby="passhelp"
              required
            />
            <div id="passhelp" class="form-text">
              We'll never share your password with anyone else.
            </div>
          </div>

          <button type="submit" class="btn btn-primary mt-3">
            Continue
          </button>
        </form>
      </div>


    </div>
  );
};

export default ElectionPageV3;
