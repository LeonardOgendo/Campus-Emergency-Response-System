import '../styles.css';

const Dashboard = () => {
    return(
        <>
            <div className='header p-2 rounded'>
                <span className='fw-bold'>Analytics</span>
            </div>
            
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
            
            <div className="occ-area-map mt-1 mb-3">
                <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.130563746294!2d34.72617621083985!3d0.29252480000002135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17803c2381e6b747%3A0xd788ea540e29f427!2sMasinde%20Muliro%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2ske!4v1740366870825!5m2!1sen!2ske" 
                        width="100%" 
                        height="400px" 
                        style={{ 'border': '0'}}
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="overlay"></div>
            </div>
            
            <div className="occupied-areas">
                <div className="py-4 px-3 rounded">
                    <span className='name-label'>Name: </span><span className='area-name'>Lurambi</span><br></br>
                    <span>Population: </span><span>3,000</span>    
                </div>
                <div className="py-4 px-3 rounded">
                    <span className='name-label'>Name: </span><span className='area-name'>Sichirayi</span><br></br>
                    <span>Population: </span><span>5,000</span>
                </div>
                <div className="py-4 px-3 rounded">
                    <span className='name-label'>Name: </span><span className='area-name'>Koromatangi</span><br></br>
                    <span>Population: </span><span>5,000</span>
                </div>
                <div className="py-4 px-3 rounded">
                    <span className='name-label'>Name: </span><span className='area-name'>Kefinco</span><br></br>
                    <span>Population: </span><span>3, 260</span>
                </div>
            </div>    
        </>

    )
}

export default Dashboard