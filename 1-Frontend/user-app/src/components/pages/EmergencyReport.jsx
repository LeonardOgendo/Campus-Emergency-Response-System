export default function EmergencyReport() {
    return (
      <div className="container-fluid d-flex border rounded pt-4 pe-4 pb-4 mt-2 bg-white ">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Report Illustration"
            />
          </div>
  
          <div className="col-md-6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <h5 className="fs-4 mb-4 me-3 text-danger fw-bold">Report Emergency</h5>
            </div>
  
            <select className="form-control mb-4">
              <option value="">Select an Emergency Type</option>
              <option value="health">Health</option>
              <option value="security">Security</option>
              <option value="fire">Fire</option>
            </select>
  
            <textarea className="form-control mb-4" rows="3" placeholder="Describe the incident..."></textarea>
  
            <div className="mb-4">
              <label className="fw-bold">Severity Level</label>
              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="severity" id="critical" value="critical" />
                  <label className="form-check-label" htmlFor="critical">Critical</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="severity" id="high" value="high" />
                  <label className="form-check-label" htmlFor="high">High</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="severity" id="low" value="low" />
                  <label className="form-check-label" htmlFor="low">Low</label>
                </div>
              </div>
            </div>
  
            <input type="file" className="form-control mb-4" />
  
            <div className="text-center text-md-start mt-4 pt-2">
              <button className="btn custom-btn px-5 btn-danger" style={{ width: "100%" }}>Submit Report</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
