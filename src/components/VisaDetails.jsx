function VisaDetails({
  formData,
  errors,
  onChange,
  onNext,
  onBack,
}) {
  return (
    <section>
      <div className="section-heading">
        <h2>Visa Details</h2>
        <p>
          Provide information about the applicant's travel plans.
        </p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="destination">
            Destination Country
          </label>

          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={onChange}
            aria-invalid={Boolean(errors.destination)}
          >
            <option value="">Select destination</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
          </select>

          {errors.destination && (
            <p className="error-message" role="alert">
              {errors.destination}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="visaType">Visa Type</label>

          <select
            id="visaType"
            name="visaType"
            value={formData.visaType}
            onChange={onChange}
            aria-invalid={Boolean(errors.visaType)}
          >
            <option value="">Select visa type</option>
            <option value="Tourist">Tourist</option>
            <option value="Business">Business</option>
            <option value="Student">Student</option>
            <option value="Work">Work</option>
            <option value="Transit">Transit</option>
          </select>

          {errors.visaType && (
            <p className="error-message" role="alert">
              {errors.visaType}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="travelDate">Expected Travel Date</label>

          <input
            id="travelDate"
            name="travelDate"
            type="date"
            value={formData.travelDate}
            onChange={onChange}
            aria-invalid={Boolean(errors.travelDate)}
          />

          {errors.travelDate && (
            <p className="error-message" role="alert">
              {errors.travelDate}
            </p>
          )}
        </div>

        <div className="form-group full-width">
          <label htmlFor="purpose">
            Purpose of Travel
          </label>

          <textarea
            id="purpose"
            name="purpose"
            rows="4"
            value={formData.purpose}
            onChange={onChange}
            placeholder="Describe the purpose of your travel..."
            aria-invalid={Boolean(errors.purpose)}
          />

          {errors.purpose && (
            <p className="error-message" role="alert">
              {errors.purpose}
            </p>
          )}
        </div>
      </div>

      <div className="button-row">
        <button
          type="button"
          className="secondary-button"
          onClick={onBack}
        >
          Back
        </button>

        <button
          type="button"
          className="primary-button"
          onClick={onNext}
        >
          Review Application
        </button>
      </div>
    </section>
  );
}

export default VisaDetails;