function ApplicantDetails({
  formData,
  errors,
  onChange,
  onNext,
}) {
  return (
    <section>
      <div className="section-heading">
        <h2>Applicant Details</h2>
        <p>
          Enter the applicant's personal and passport information.
        </p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={onChange}
            placeholder="Enter full name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={
              errors.fullName ? "fullName-error" : undefined
            }
          />

          {errors.fullName && (
            <p id="fullName-error" className="error-message" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="name@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "email-error" : undefined
            }
          />

          {errors.email && (
            <p id="email-error" className="error-message" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={onChange}
            placeholder="10-digit mobile number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? "phone-error" : undefined
            }
          />

          {errors.phone && (
            <p id="phone-error" className="error-message" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="passportNumber">Passport Number</label>

          <input
            id="passportNumber"
            name="passportNumber"
            type="text"
            value={formData.passportNumber}
            onChange={onChange}
            placeholder="Enter passport number"
            aria-invalid={Boolean(errors.passportNumber)}
            aria-describedby={
              errors.passportNumber
                ? "passport-error"
                : undefined
            }
          />

          {errors.passportNumber && (
            <p
              id="passport-error"
              className="error-message"
              role="alert"
            >
              {errors.passportNumber}
            </p>
          )}
        </div>
      </div>

      <div className="button-row">
        <button
          type="button"
          className="primary-button"
          onClick={onNext}
        >
          Continue
        </button>
      </div>
    </section>
  );
}

export default ApplicantDetails;