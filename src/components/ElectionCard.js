import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../extras/reqHelper";
import useElection from "../hooks/useElection";


const ElectionCard = (props) => {
    const { setElection } = useElection()
    const navigate = useNavigate();
    const getElectionData = () => {
        axios.get(`/public/get-election/${props.data._id}`)
            .then((res) => {
                setElection(res.data);
                return navigate("/election/info")
            })
            .catch(err => console.log(err))
    }
    console.log(props.data)
    return (
        <div class="col-md-6">
            <div class="card row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">{props.data.state}</strong>
                    <h3 class="mb-0">{props.data.electionName}</h3>
                    <div class="mb-1 text-muted">{new Date(props.data.votingStart).toLocaleDateString()}</div>
                    <p class="card-text mb-auto text-truncate mt-1">{props.data.electionDec}</p>
                    <a class="stretched-link mt-2" onClick={getElectionData}>View Status</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <image class="card-image-top" width="200" height="250" src={`http://localhost:4000/${props.data.image}`} />
                </div>
            </div>
        </div>
    )
}


export default ElectionCard;

