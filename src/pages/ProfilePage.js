import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../extras/reqHelper";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProfilePage = () => {
  const { setAuth } = useAuth();
  var navgate = useNavigate();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const [voterID, setVoterID] = useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setemail] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [panNo, setPanNo] = useState("")
  const [adharNo, setAdhar] = useState("")

  const handleClose = () => setShow(false);

  useEffect(() => {

    axios
      .get("/voter/voter-profile", {
        headers: {
          "Authorization": localStorage.getItem("voterToken")
        }
      })
      .then((res) => {
        console.log(res.data)
        setName(res.data.name)
        setemail(res.data.email)
        setContact(res.data.contact)
        setAddress(res.data.address)
        setState(res.data.state)
        setBirthDate(res.data.birthDate)
        setPanNo(res.data.panNo)
        setAdhar(res.data.adharNo)
        setUsername(res.data.username)
        setVoterID(res.data._id)
      })
      .catch((err) => console.log(err));

  }, []);

  const logout = () => {
    setName("")
    setemail("")
    setContact("")
    setAddress("")
    setState("")
    setBirthDate("")
    setPanNo("")
    setAdhar("")
    setUsername("")
    setVoterID("")
    setAuth({})
    localStorage.removeItem("voterToken");
    navgate("/");
  };

  const savePro = (e) => {
    e.preventDefault()
    const postData = {
      "contact": contact,
      "email": email,
      "address": address,
      "adharNo": adharNo,
      "panNo": panNo,
      "state": state,
      "birthDate": birthDate
    }

    axios.put("/voter/voter-update", postData, {
      headers: {
        "Authorization": localStorage.getItem("voterToken")
      }
    })
      .then((res) => {
        if (res.status === 200) {
          setMessage("Updated Success")
          setShow(true)
        }
      }).catch((err) => {
        console.log(err)
        setMessage("Failed To Updated")
        setShow(true)
      })


  }

  return (
    <div class=" bg-white  mb-5">
      <form onSubmit={savePro}>
        <div class="row">
          <div class="col-md-3 border-left">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
              <span class="font-weight-bold">{username} </span>
              <span class="text-black-50">{email} </span><span> </span>
              <div class="mt-5 text-center"><button class="btn btn-danger profile-button" onClick={logout} type="button">Logout</button></div>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" onChange={(e) => { setName(e.target.value) }} value={name} /></div>
                <div class="col-md-6"><label class="labels">Profile Image</label><input type="file" class="form-control" id="inputGroupFile02" /></div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" onChange={(e) => { setContact(e.target.value) }} value={contact} /></div>
                <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" onChange={(e) => { setAddress(e.target.value) }} value={address} /></div>
                <div class="col-md-12"><label class="labels">Birth date</label><input type="text" class="form-control" placeholder="yyyy-mm-dd" onChange={(e) => { setBirthDate(e.target.value) }} value={new Date(birthDate).toDateString()} /></div>
                <div class="col-md-12"><label class="labels">Adhar No.</label><input type="text" class="form-control" placeholder="enter adhar no. " onChange={(e) => { setAdhar(e.target.value) }} value={adharNo} /></div>
                <div class="col-md-12"><label class="labels">Pan No.</label><input type="text" class="form-control" placeholder="Pan No." onChange={(e) => { setPanNo(e.target.value) }} value={panNo} /></div>

              </div>
              <div class="row mt-2">
                <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="India" disabled /></div>
                <div class="col-md-6"><label class="labels">State</label><input type="text" class="form-control" onChange={(e) => { setState(e.target.value) }} value={state} placeholder="state" /></div>
              </div>

            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience"><span class="h4">Edit Others</span></div><br />
              <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" onChange={(e) => { setemail(e.target.value) }} value={email} /></div>
              <div class="col-md-12"><label class="labels">Voter ID</label><input type="text" class="form-control" placeholder="voter id" value={voterID} disabled /></div>
              <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br />
              <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
              <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit">Save Profile</button></div>
            </div>
          </div>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
};

export default ProfilePage;
