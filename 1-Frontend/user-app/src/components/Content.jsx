import '../styles.css';

export default function Content(){
    return(
        <>
            <div className="dash-container">
                
                <div className='box-1'>
                    <div id="t-users" className='border p-3 rounded'>
                        <h5></h5>
                        <p className='fw-bold fs-4'>Report Emergency</p>
                    </div>
                    <div id="t-emeg" className='border p-3 rounded'>
                        
                        <p className='fw-bold fs-4'>Track Response status</p>
                    </div>
                    <div id="m-flagd" className='border p-3 rounded'>
                        <h5></h5>
                        <p className="fw-bold fs-4">View Flagged Area</p>
                    </div>
                    <div id="t-resn" className='border p-3 rounded'>
                        <h5></h5>
                        <p className="fw-bold fs-4">Incident History</p>
                    </div>
                </div>
                
            </div>
       
    </>
    )
}