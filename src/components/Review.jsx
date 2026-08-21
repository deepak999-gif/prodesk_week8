function Review({
  formData,
  onBack,
  onSubmit,
  isSubmitting,
}) {
  return (
    <section>
      <div className="section-heading">
        <h2>Review Application</h2>
        <p>
          Please verify the information before submitting.
        </p>
      </div>

      <div className="review-grid">
        <div className="review-item">
          <span>Full Name</span>
          <strong>{formData.fullName}</strong>
        </div>

        <div className="review-item">
          <span>Email</span>
          <strong>{formData.email}</strong>
        </div>

        <div className="review-item">
          <span>Phone</span>
          <strong>{formData.phone}</strong>
        </div>

        <div className="review-item">
          <span>Passport Number</span>
          <strong>{formData.passportNumber}</strong>
        </div>

        <div className="review-item">
          <span>Destination</span>
          <strong>{formData.destination}</strong>
        </div>

        <div className="review-item">
          <span>Visa Type</span>
          <strong>{formData.visaType}</strong>
        </div>

        <div className="review-item">
          <span>Travel Date</span>
          <strong>{formData.travelDate}</strong>
        </div>

        <div className="review-item full-width">
          <span>Purpose</span>
          <strong>{formData.purpose}</strong>
        </div>
      </div>

      <div className="button-row">
        <button
          type="button"
          className="secondary-button"
          onClick={onBack}
          disabled={isSubmitting}
        >
          Back
        </button>

        <button
          type="button"
          className="primary-button"
          onClick={onSubmit}
          disabled={isSubmitting}
          aria-label="Submit visa assistance application"
        >
          {isSubmitting ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </section>
  );
}

export default Review;