import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import axios from "../extras/reqHelper";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";




const Idconformation = () => {
    const [show, setShow] = useState(false);
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const { auth } = useAuth();

    const handleSubmit = () => {
        axios.post("/voter/voter-conf", { password: pass }, {
            headers: {
                "Authorization": localStorage.getItem("voterToken")
            }
        })
            .then(res => {
                if (res.status === 200) {
                    setShow(false)
                    return navigate("/election/vote")
                }
            }).catch(err => console.log(err))
    };

    const showModel = () => {
        if (auth.voterID === undefined) {
            return navigate("/auth")
        } else {
            setShow(true)
        }
    }


    return (
        <div>
            <Button class="btn btn-primary btn-lg" variant="primary" onClick={showModel}>
                Give Your Vote
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Voter Identity Conformation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter OTP</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Six digite OTP"
                                value="123456"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Password"
                                required
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Idconformation