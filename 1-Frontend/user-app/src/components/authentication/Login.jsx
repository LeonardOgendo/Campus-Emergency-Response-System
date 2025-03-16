import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
          <div className="container-fluid login d-flex">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <h5 className="fs-4 mb-4 me-3 text-danger login-header">Login</h5>
                    </div>


                    <input className="form-control mb-4" type="text" placeholder="Student ID / Staff ID" />
                    <input className="form-control mb-4" type="password" placeholder="Password" />

                    <div className="d-flex justify-content-between mb-4">
                      <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="ms-2">Remember me</label>
                      </div>
                      <a href="#" className="link-primary text-decoration-none" >Forgot password?</a>
                    </div>

                    <div className="text-center text-md-start mt-4 pt-2 ">
                      <button className="btn custom-btn px-5 mb-3 btn-danger" style={{width: "100%"}}>Login</button>
                      <p className="small fw-bold mt-2 pt-1 mb-2" >
                        Don't have an account? <a href="#" className="link-danger"><Link to="register">Register</Link></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        
        </>
    )
}