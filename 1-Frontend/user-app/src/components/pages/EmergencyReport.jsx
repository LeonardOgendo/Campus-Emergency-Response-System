import { useState } from "react";
import axios from "axios";

export default function EmergencyReport() {
  const [formData, setFormData] = useState({
    emergency_type: "",
    description: "",
    severity: "",
    latitude: null,
    longitude: null
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }));
          setError(null);
        },
        (error) => {
          setError("Error fetching location: " + error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    // Basic validation
    if (!formData.emergency_type || !formData.description || !formData.severity) {
      setError("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    if (!formData.latitude || !formData.longitude) {
      setError("Please share your location first");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/emergencies/report/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          emergency_type: "",
          description: "",
          severity: "",
          latitude: null,
          longitude: null
        });
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.detail ||
                err.response.data?.message ||
                "Failed to submit report");
      } else if (err.request) {
        setError("No response from server. Please check your connection.");
      } else {
        setError("Request error: " + err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid d-flex border rounded pt-4 pe-4 pb-4 mt-2 bg-white">
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

          {error && (
            <div className="alert alert-danger alert-dismissible fade show">
              {error}
              <button
                type="button"
                className="btn-close"
                onClick={() => setError(null)}
              ></button>
            </div>
          )}

          {success && (
            <div className="alert alert-success alert-dismissible fade show">
              Report submitted successfully!
              <button
                type="button"
                className="btn-close"
                onClick={() => setSuccess(false)}
              ></button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <select
              className="form-control mb-4"
              name="emergency_type"
              value={formData.emergency_type}
              onChange={handleChange}
              required
            >
              <option value="">Select an Emergency Type</option>
              <option value="health">Health Emergency</option>
              <option value="security">Security Emergency</option>
              <option value="fire">Fire Emergency</option>
            </select>

            <textarea
              className="form-control mb-4"
              rows="3"
              placeholder="Describe the incident..."
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

            <div className="mb-4">
              <label className="fw-bold">Severity Level</label>
              <div className="d-flex justify-content-between">
                {['critical', 'high', 'low'].map(level => (
                  <div className="form-check" key={level}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="severity"
                      id={level}
                      value={level}
                      checked={formData.severity === level}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleShareLocation}
                disabled={isSubmitting}
              >
                {formData.latitude && formData.longitude ? (
                  "Location Captured ✓"
                ) : (
                  "Share My Location"
                )}
              </button>
              {formData.latitude && formData.longitude && (
                <p className="mt-2 text-success">
                  Coordinates: {formData.latitude.toFixed(6)}, {formData.longitude.toFixed(6)}
                </p>
              )}
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <button
                className="btn custom-btn px-5 btn-danger"
                style={{ width: "100%" }}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Submitting...
                  </>
                ) : (
                  "Submit Report"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}