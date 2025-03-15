import '../styles.css';

export default function Login(){
    return(
        <>
 <div className="container-fluid p-3 my-5 h-custom">
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
            <h5 className="lead fw-normal mb-3 me-3 link-danger"> <span style={{fontWeight:700}}>LOGIN</span></h5>
          </div>


          <input className="form-control mb-4" type="email" placeholder="Student ID" />
          <input className="form-control mb-4" type="password" placeholder="Password" />

          <div className="d-flex justify-content-between mb-4">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="ms-2">Remember me</label>
            </div>
            <a href="#" className="link-danger" >Forgot password?</a>
          </div>

          <div className="text-center text-md-start mt-4 pt-2 ">
            <button className="btn btn-danger px-5 " style={{width:"80%", marginLeft:"60px" }}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-2" >
              Don't have an account? <a href="#!" className="link-danger">Register</a>
            </p>
          </div>
        </div>
      </div>

     
    </div>
        
        </>
    )
}