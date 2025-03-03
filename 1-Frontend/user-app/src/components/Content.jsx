export default function Content(){
    return(
       
        <> 
        <div className="dash-container">
            <div className='box-1'>
                <div id="t-users" className='border p-3 rounded'>
                    <h5>Total Users</h5>
                    <p className='fw-bold fs-4'>15,300</p>
                </div>
                <div id="t-emeg" className='border p-3 rounded'>
                    <h5>Total Emergency Reports</h5>
                    <p className='fw-bold fs-4'>530</p>
                </div>
                <div id="m-flagd" className='border p-3 rounded'>
                    <h5>Most Flagged Areas</h5>
                    <p className="fw-bold fs-4">3</p>
                </div>
                <div id="t-resn" className='border p-3 rounded'>
                    <h5>Total Responders</h5>
                    <p className="fw-bold fs-4">28</p>
                </div>
            </div>
            <div className="box-2">
                <div id="r-emeg" className='border p-3 rounded'>
                    <h5>Resolved Emergencies</h5>
                    <p className='fw-bold fs-4'>503</p>
                </div>
            </div>
        </div>

        <div className='header p-2 mt-5'>
            <span className='fw-bold'>Most Student Occupancy Areas</span>
        </div>
        
  
        
      
    </>

    )
}