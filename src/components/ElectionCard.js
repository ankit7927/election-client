import { React } from "react";
import { Link } from "react-router-dom";

const ElectionCard = (props) => {
    return (
        <div class="col">
            <div class="card h-100 bg-light">
                <div class="card-body">
                    <h5 class="card-title">{props.electionName}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <Link to={props._id} class="btn btn-primary">Check</Link>
                </div>
            </div>
        </div>
    )
}


export default ElectionCard;

