import { React, useContext } from "react";
import ElectionContext from "../context/electionProvider";


const useElection = () => {
    return useContext(ElectionContext);
}

export default useElection