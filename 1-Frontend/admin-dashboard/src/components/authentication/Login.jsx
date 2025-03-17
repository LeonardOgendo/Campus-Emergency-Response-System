import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
          <div className="container-fluid p-3 login">
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
                      <h5 className="mb-4 me-3 text-primary login-header">LOGIN</h5>
                    </div>


                    <input className="form-control mb-4" type="email" placeholder="Email Address" />
                    <input className="form-control mb-4" type="password" placeholder="Password" />

                    <div className="d-flex justify-content-between mb-4">
                      <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="ms-2">Remember me</label>
                      </div>
                      <a href="#" className="text-muted text-decoration-none" >Forgot password?</a>
                    </div>

                    <div className="text-center text-md-start mt-4 pt-2 ">
                      <Link to="/admin"><button className="btn btn-primary px-5 mb-3" style={{width:"100%" }}>Login</button></Link>
                      <p className="small fw-bold mt-2 pt-1 mb-2" >
                        Don't have an account? <a href="#" className="link-danger"><Link to="signup/">Register</Link></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        
        </>
    )
}