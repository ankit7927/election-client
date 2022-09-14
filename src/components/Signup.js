import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../extras/reqHelper";

const Signup = () => {
    const [name, setName] = useState();
    const [email, setemail] = useState();
    const [uname, setuname] = useState();
    const [pass, setpass] = useState();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setAuth } = useAuth();


    const submit = (e) => {
        e.preventDefault();
        axios
            .post("/voter/voter-signup", {
                name: name,
                email: email,
                username: uname,
                password: pass,
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.voterid);
                    const voterID = res.data.voterID;
                    setAuth({ uname, voterID });
                    localStorage.setItem("voterToken", res.data.token);
                    navigate("/");
                } else {
                    setError("something went wrong")
                }
            })
            .catch((err) => { console.log(err); setError("failed") });
    };


    return (
        <div>
            <form class="p-4 p-md-5 border rounded-3 bg-light" onSubmit={submit}>
                <h1 class="text-gray-900 h1 font-medium title-font mb-5">
                    Signup
                </h1>
                <div class="form-floating mb-3">
                    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" id="floatingInput" placeholder="Name" required />
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" onChange={(e) => setemail(e.target.value)} class="form-control" id="floatingInput" placeholder="example@email.com    " required />
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" onChange={(e) => setuname(e.target.value)} class="form-control" id="floatingInput" placeholder="Username" required />
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" onChange={(e) => setpass(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>
                {
                    error ?
                        <div class="alert alert-danger" role="alert">
                            {error}
                        </div>
                        : <></>
                }
                <button class="w-100 btn btn-lg btn-primary" type="submit">Signup</button>
                <hr class="my-4" />
                <small class="text-muted"><Link to="/auth">Login</Link> if you alrady have account</small>
            </form>
        </div>
    )
}

export default Signup