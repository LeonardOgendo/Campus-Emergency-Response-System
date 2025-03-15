export default function Register(){
    return(

        <div className='container py-5'>
        <div className='card text-black m-5' style={{ borderRadius: '25px' }}>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign up</p>
                
                <div className='mb-4 w-100'>
                  <label className='form-label'>first_name</label>
                  <input type='text' className='form-control' />
                </div>

                <div className='mb-4 w-100'>
                  <label className='form-label'>Last_name</label>
                  <input type='text' className='form-control' />
                </div>
  
                <div className='mb-4 w-100'>
                  <label className='form-label'> StudentID_Email address </label>
                  <input type='email' className='form-control' />
                </div>
  
                <div className='mb-4 w-100'>
                  <label className='form-label'>Password</label>
                  <input type='password' className='form-control' />
                </div>
  
                <div className='mb-4 w-100'>
                  <label className='form-label'>confirm  password</label>
                  <input type='password' className='form-control' />
                </div>
  
                <button className='btn btn-primary mb-4'>Register</button>
                <p className="small fw-bold mt-2 pt-1 mb-2" >
              Have have an account? <a href="#!" className="link-danger">Login</a>
            </p>
              </div>
  
              <div className='col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center'>
                <img 
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' 
                  className='img-fluid' 
                  alt='Sign Up'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}