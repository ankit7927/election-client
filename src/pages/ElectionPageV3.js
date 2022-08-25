import React from 'react'

const ElectionPageV3 = () => {
  return (
    <div class="row g-5">
        <div class="col-md-6">
            <h2>Confirm Identity</h2>
            
            <form>
  <div class="mb-3">
    <label for="Password" class="form-label">Password</label>
    <input type="text" class="form-control" id="Password" aria-describedby="passhelp"/>
    <div id="passhelp" class="form-text">We'll never share your password with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="otp" class="form-label">OTP </label>
    <div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Get OTP</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>
<div id="passhelp" class="form-text">the otp will valid till 5 min from now</div>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Continue</button>
</form>


        </div>

        <div class="col-md-6">
            <h2>Choose Candidate</h2>
            <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
            <ul class="icon-list">
                <li><a href="/docs/5.0/getting-started/introduction/">Bootstrap quick start guide</a></li>
                <li><a href="/docs/5.0/getting-started/webpack/">Bootstrap Webpack guide</a></li>
                <li><a href="/docs/5.0/getting-started/parcel/">Bootstrap Parcel guide</a></li>
                <li><a href="/docs/5.0/getting-started/build-tools/">Contributing to Bootstrap</a></li>
            </ul>
        </div>
    </div>

  )
}

export default ElectionPageV3