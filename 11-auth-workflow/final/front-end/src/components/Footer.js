import React from "react";

const footer =()=>{
    return(<>
        <div className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover" href="/">Buy</a> 
    <a className="link link-hover" href="/">Sell</a> 
    <a className="link link-hover" href="/">FAQ's</a> 
    <a className="link link-hover" href="/">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Go-to</span> 
    <a className="link link-hover" href="/">Home</a> 
    <a className="link link-hover" href="/">User Information</a> 
    <a className="link link-hover" href="/">About Us</a> 
    <a className="link link-hover" href="/">Contack-us</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover" href="/">Terms of use</a> 
    <a className="link link-hover" href="/">Privacy policy</a> 
    <a className="link link-hover" href="/">Cookie policy</a>
  </div> 
  <div>
  </div>
  {/* <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@email.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div> */}
</div>
</>
    )
}

export default footer;