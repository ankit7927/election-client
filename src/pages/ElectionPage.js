import { React, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios'

const ElectionPage = () => {
    const [data, setdata] = useState([])
    const [allEle, setAllEle] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/public/current-ele")
            .then((res) => { setdata(res.data); console.log(res.data) })
            .catch(err => console.log(err))
        axios.get("http://localhost:4000/public/all-election")
            .then((res) => { setAllEle(res.data); console.log(res.data) })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <div>
                <div>
                    <h1>current voting</h1>
                    {
                        data.map((ele) => {
                            return (
                                <div>
                                    name:<b>{ele.electionName}</b><button><Link to="#">vote</Link></button><br />
                                    from : {new Date(ele.nominationStart).toLocaleDateString()}<br />
                                    to : {new Date(ele.votingEnd).toLocaleDateString()}<br />
                                    voting start : {new Date(ele.votingStart).toLocaleDateString()}<br />
                                    voting end : {new Date(ele.votingEnd).toLocaleDateString()}<br /><br />
                                    <b>candidates</b>
                                    {
                                        ele.nominatedCandidates.map((can) => {
                                            return (
                                                <div></div>
                                            )
                                        })
                                    }

                                    <br />
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
                <div>
                    <h1>Past Elections</h1>
                    {
                        allEle.map((ele) => {
                            return (
                                <div>
                                    name:<b>{ele.electionName}</b><br />
                                    from : {new Date(ele.nominationStart).toLocaleDateString()}<br />
                                    to : {new Date(ele.votingEnd).toLocaleDateString()}<br />
                                    voting start : {new Date(ele.votingStart).toLocaleDateString()}<br />
                                    voting end : {new Date(ele.votingEnd).toLocaleDateString()}<br /><br />
                                    <br />
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ElectionPage