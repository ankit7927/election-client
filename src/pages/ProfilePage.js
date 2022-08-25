import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../extras/reqHelper";

const ProfilePage = () => {
  const { auth, setAuth } = useAuth();
  const [data, setdata] = useState({});
  var navgate = useNavigate();

  useEffect(() => {
    // if (auth.voterID) {
    //   axios
    //     .get(`/voter/voter-profile/${auth.voterID}`)
    //     .then((res) => {
    //       setdata(res.data);
    //       console.log(res.data)
    //     })
    //     .catch((err) => console.log(err));
    // }
  }, []);

  const logout = () => {
    setAuth({})
    localStorage.removeItem("voterToken");
    navgate("/");
  };

  return (

    <div class=" bg-white  mb-5">
      <div class="row">
        <div class="col-md-3 border-left">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
            <span class="font-weight-bold">{data.username} </span>
            <span class="text-black-50">{data.email} </span><span> </span>
            <div class="mt-5 text-center"><button class="btn btn-danger profile-button" onClick={logout} type="button">Logout</button></div>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value={data.name} /></div>
              <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname" /></div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value={data.contact} /></div>
              <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value="" /></div>
              <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>
              <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>
              <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>

            </div>
            <div class="row mt-2">
              <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
              <div class="col-md-6"><label class="labels">State</label><input type="text" class="form-control" value="" placeholder="state" /></div>
            </div>

          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center experience"><span class="h4">Edit Others</span></div><br />
            <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" /></div>
            <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value="" /></div>
            <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br />
            <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
