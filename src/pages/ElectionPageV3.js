import { React, useState } from "react";
import { useParams, Link } from "react-router-dom";
const Candidate = [
  {
    name: "modi",
    party: "bjp",
  },
  {
    name: "rahul",
    party: "congress",
  },
  {
    name: "lalu",
    party: "bsp",
  },
];

const ElectionPageV3 = () => {
  const { eleID } = useParams()
  const [varifed, setVarifed] = useState(false);
  return (
    <div class="row g-5">

      <div class="col-md-6">
        <h2>Choose Candidate</h2>
        <p>
          Read more detailed instructions and documentation on using or
          contributing to Bootstrap.
        </p>

        <ul class="list-group mb-3">
          {Candidate.map((cand) => {
            return (
              <li class="list-group-item">
                <input type="radio" class="form-check-input me-1" name="name" />
                <div class="d-flex w-100 justify-content-between mt-2">
                  <h6 class="my-0">{cand.name}</h6>
                  <small class="text-muted">small description</small>
                </div>
                <p>{cand.party}</p>
              </li>
            );
          })}
        </ul>

        <button type="submit" class="btn btn-success mt-2">
          Lock Your Selection
        </button>
      </div>


      <div class="col-md-6">
        <h2>Confirm Identity</h2>

        <form>
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
