import { React } from "react";

const voterPage = {
  electionName: "Prime minister",
  criteria: [
    {
      name: "criteria one"
    },
    {
      name: "criteria two"
    },
    {
      name: "criteria three"
    },
  ],
  party: [
    {
      name: "party one"
    },
    {
      name: "party two"
    },
    {
      name: "party three"
    },
    {
      name: "party one"
    },
    {
      name: "party two"
    },
    {
      name: "party three"
    },
  ]
}

const ElectionPageV2 = () => {
  return (
    <div>
      <h1 class="mb-3">{voterPage.electionName}</h1>
      <p class="fs-5 col-md-8">Quickly and easily get started with Bootstrap's compiled, production-ready files
        with this barebones example featuring some basic HTML and helpful links. Download all our examples to
        get started.</p>

      <div class="mb-5">
        <a href="vote" class="btn btn-primary btn-lg px-4">Give Your Vote</a>
      </div>

      <hr class="col-3 col-md-2 mb-5" />

      <div class="row g-5">
        <div class="col-md-6">
          <h2>Criateria For Voting</h2>
          <p>Ready to beyond the starter template? Check out these open source projects that you can quickly
            duplicate to a new GitHub repository.</p>
          <ul class="icon-list">
            {
              voterPage.criteria.map((cr) => {
                return (
                  <li><a href="#">{cr.name} </a></li>
                )
              })
            }
          </ul>
        </div>

        <div class="col-md-6">
          <h2>Electing Parties / Candidates</h2>
          <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
          <ol>
            {
              voterPage.party.map((part) => {
                return (
                  <li><a href="#">{part.name} </a></li>
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
