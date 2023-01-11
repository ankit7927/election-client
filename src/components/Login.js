import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAuth from "../hooks/useAuth";
import axios from "../extras/reqHelper";

const Login = () => {
    const [uname, setuname] = useState();
    const [pass, setpass] = useState();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = (e) => {
        e.preventDefault();
        axios
            .post("/voter/voter-login", {
                username: uname,
                password: pass,
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    const voterID = res.data.voterID;
                    setAuth({ uname, voterID });
                    localStorage.setItem("voterToken", res.data.token);
                    navigate("/");
                }
            })
            .catch((err) => { handleShow() });
    };


    return (
        <div>
            <form class="p-4 p-md-5 border rounded-3 bg-light" onSubmit={submit}>
                <h1 class="text-gray-900 h1 font-medium title-font mb-5">
                    Log in
                </h1>
                <div class="form-floating mb-3">
                    <input type="text" onChange={(e) => setuname(e.target.value)} class="form-control" id="floatingInput" placeholder="Username" required />
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" onChange={(e) => setpass(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
                <hr class="my-4" />
                <small class="text-muted"><Link to="/auth/signup">Signup</Link> if you nor have account</small>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Something went wrong</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your username or password may wrong</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Login