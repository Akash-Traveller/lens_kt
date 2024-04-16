import React from 'react';
import '../style/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Assets/signup.jpg'
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className='signup_home'>
      <div className='signup_home1'>
      <div style={{ width:"60%",margin:"20px"}}>
        <form style={{width:"70%",paddingLeft:"20%",paddingTop:"10px"}}>
          <h1 className='signup'>Create an account</h1>

          <div className="form-group">
            {/* <label htmlFor="exampleInputPassword1">FirstName</label> */}
            <input type="fname" className="form-control" id="exampleInputPassword1" placeholder="FirstName" />
          </div>
          
          <div className="form-group">
            {/* <label htmlFor="exampleInputPassword1">LastName</label> */}
            <input type="lname" className="form-control" id="exampleInputPassword1" placeholder="LastName" />
          </div>

          <div className="form-group">
            {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>

          <div className="form-group">
            {/* <label htmlFor="exampleInputPassword1">Password</label> */}
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <div className="form-group">
            {/* <label htmlFor="exampleInputPassword1">Password</label> */}
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
          </div>
           <div style={{display:"flex"}}>
          <div className="form-group">
            {/* <label htmlFor="exampleInputPassword1">Contact</label> */}
            <input type="contact" className="form-control-contact" id="exampleInputPassword1" placeholder="Contact Info" />
          </div>

          <div className="form-group">
            {/* <label htmlFor="exampleInputPassword1">Address</label> */}
            <input type="address" className="form-control-contact1" id="exampleInputPassword1" placeholder="Enter OTP" />
          </div>
          </div>

          <div className="form-group form-check" style={{marginTop:"-10px"}}>
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

          <div style={{ marginTop: "-7px",marginBottom:"13px"}}>
                Don't have an account?{" "}
                <Link to="/login" style={{ color: "blue" }}>
                  sign in?
                </Link>
              </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      <div style={{marginTop:"30px"}}>
        <img className='img_signup' src={img} alt='Placeholder Image' /> {/* Replace 'path_to_your_image.jpg' with the correct path to your image */}
      </div>
      </div>
    </div>
  );
}

export default SignupPage;
