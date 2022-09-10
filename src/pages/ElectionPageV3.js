import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../extras/reqHelper";
import useElection from "../hooks/useElection";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ElectionPageV3 = () => {
  const navigate = useNavigate();
  const { election } = useElection()
  const [selectedCand, SelectCand] = useState("")
  const [message, setMessage] = useState("")
  const [title, setTitle] = useState("")
  const [show, setShow] = useState(false);
  const { auth } = useAuth();

  const handleClose = () => { setShow(false); navigate("/election") };
  const handleShow = () => setShow(true);


  const giveVote = (e) => {
    e.preventDefault()
    const postData = {
      "selectedCand": selectedCand,
      "eleID": election._id
    }

    axios.post("/voter/vote", postData, {
      headers: {
        "Authorization": localStorage.getItem("voterToken")
      }
    })
      .then((res) => {
        if (res.status === 200) {
          setTitle("Success")
          setMessage(res.data)
          handleShow()
        }
      })
      .catch((err) => {
        setTitle(err.response.status)
        setMessage(err.response.data.error)
        handleShow()
      })
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
            election.nominatedCandidates.map((cand) => {
              return (
                <li class="list-group-item">
                  <input type="radio" required onChange={(e) => { SelectCand(e.target.value) }} class="form-check-input me-1" value={cand.candidateID} name="name" />
                  <div class="d-flex w-100 justify-content-between mt-2">
                    <h4 class="my-0">{cand.candName}</h4>
                    <small class="text-muted">{cand.voteCount}</small>
                  </div>
                  <p>{cand.candEmail}</p>
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
                value="123456"
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back To Home
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default ElectionPageV3;
