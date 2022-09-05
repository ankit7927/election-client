import { React } from "react";
import { Link } from "react-router-dom";

const ElectionCard = (props) => {
    console.log(props.data)
    return (
        <div class="col-md-6">
            <div class="card row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">{props.data.state}</strong>
                    <h3 class="mb-0">{props.data.electionName}</h3>
                    <div class="mb-1 text-muted">{new Date(props.data.votingStart).toLocaleDateString()}</div>
                    <p class="card-text mb-auto text-truncate mt-1">{props.data.electionDec}</p>
                    <Link to={`/election/info/${props.data._id}`} class="stretched-link mt-2">View Status</Link>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <image class="card-image-top" width="200" height="250" src={`http://localhost:4000/${props.data.image}`} />
                </div>
            </div>
        </div>
    )
}


export default ElectionCard;

