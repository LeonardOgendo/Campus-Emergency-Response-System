import { Link } from "react-router-dom";

export default function Register(){
    return(
      <div className='container'>
        <div className='card text-black m-5 shadow-none border-0'>
          <div className='card-body'>
            <div className='row'>

              {/*-- Image --*/}
              <div className='col-md-10 col-lg-6 order-1 order-lg-1 d-flex align-items-center'>
                <img 
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' 
                  className='img-fluid' 
                  alt='Sign Up'
                />
              </div>

              {/*-- Form --*/}
              <div className='col-md-10 col-lg-6 order-2 order-lg-2 d-flex flex-column align-items-center pt-3 custom-signup'>

                <p className='text-center fs-3 fw-bold mb-4 link-danger'>Sign Up</p>
                
                <div className="custom-signup-block">
                  <div className='mb-4 w-100'>
                    <label htmlFor='first_name' className='form-label'>First Name</label>
                    <input type='text' id='first_name' className='form-control' />
                  </div>

                  <div className='mb-4 w-100'>
                    <label htmlFor='last_name' className='form-label'>Last Name</label>
                    <input type='text' id='last_name' className='form-control' />
                  </div>

                  <div className='mb-4 w-100'>
                    <label htmlFor='student_id' className='form-label'>Student ID / Reg. Number</label>
                    <input type='text' id='student_id' className='form-control' />
                  </div>

                  <div className='mb-4 w-100'>
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <input type='email' id='email' className='form-control' />
                  </div>

                  <div className='mb-4 w-100'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' id='password' className='form-control' />
                  </div>

                  <div className='mb-4 w-100'>
                    <label htmlFor='confirm_password' className='form-label'>Confirm Password</label>
                    <input type='password' id='confirm_password' className='form-control' />
                  </div>

                  <button className="btn custom-btn px-5 mb-3 btn-danger w-100">Sign Up</button>

                  <p className="small fw-bold mt-2 pt-1 mb-2">
                    Already have an account? <Link to="/" className="link-danger">Login</Link>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>

  )
}