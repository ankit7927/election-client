import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../extras/reqHelper";
import useElection from "../hooks/useElection";


const ElectionCard = (props) => {
    const { setElection } = useElection()
    localStorage.setItem("eleID", props.data._id)
    const navigate = useNavigate();
    const getElectionData = () => {
        axios.get(`/public/get-election/${props.data._id}`)
            .then((res) => {
                setElection(res.data);
                return navigate("/election/info")
            })
            .catch(err => console.log(err))
    }

    return (
        <div class="col-md-6">
            <div class="card row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4  flex-column position-static">
                    <h3 class="mb-1">{props.data.electionName}</h3>
                    <div class="mb-3 text-muted">{new Date(props.data.votingStart).toLocaleDateString()}</div>
                    <p class="card-text mb-auto text-truncate mt-1">{props.data.electionDec}</p>
                    <button class="btn btn-primary mt-2" onClick={getElectionData}>View Status</button>
                </div>
            </div>
        </div>
    )
}


export default ElectionCard;

