import { useState } from "react";

import StepIndicator from "./components/StepIndicator";
import ApplicantDetails from "./components/ApplicantDetails";
import VisaDetails from "./components/VisaDetails";
import Review from "./components/Review";
import EmptyState from "./components/EmptyState";

import { sanitizeInput } from "./utils/sanitize";
import {
  validateApplicantDetails,
  validateVisaDetails,
} from "./utils/validation";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",
    destination: "",
    visaType: "",
    travelDate: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const sanitizedValue =
      name === "email" || name === "phone"
        ? value
        : sanitizeInput(value);

    setFormData((previousData) => ({
      ...previousData,
      [name]: sanitizedValue,
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }
  };

  const handleApplicantNext = () => {
    const validationErrors =
      validateApplicantDetails(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep(2);
    }
  };

  const handleVisaNext = () => {
    const validationErrors =
      validateVisaDetails(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((previousStep) => previousStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      console.log(
        "[Analytics] User interacted with Visa Assistance Application"
      );

      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    if (submitted) {
      return (
        <div className="success-state">
          <div className="success-icon" aria-hidden="true">
            ✓
          </div>

          <h2>Application Submitted</h2>

          <p>
            Your Visa Assistance Application has been
            successfully submitted.
          </p>

          <button
            type="button"
            className="primary-button"
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                passportNumber: "",
                destination: "",
                visaType: "",
                travelDate: "",
                purpose: "",
              });
            }}
          >
            Submit Another Application
          </button>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <ApplicantDetails
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onNext={handleApplicantNext}
          />
        );

      case 2:
        return (
          <VisaDetails
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onNext={handleVisaNext}
            onBack={handleBack}
          />
        );

      case 3:
        return (
          <Review
            formData={formData}
            onBack={handleBack}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );

      default:
        return <EmptyState />;
    }
  };

  return (
    <main className="app">
      <div className="application-container">
        <header className="app-header">
          <div>
            <p className="eyebrow">
              TRAVEL AGENCY
            </p>

            <h1>Visa Assistance Application</h1>

            <p className="subtitle">
              Complete the application to request visa
              assistance.
            </p>
          </div>
        </header>

        {!submitted && (
          <StepIndicator currentStep={currentStep} />
        )}

        <div className="form-card">
          {isSubmitting ? (
            <div
              className="loading-container"
              role="status"
              aria-live="polite"
            >
              <div
                className="large-spinner"
                aria-hidden="true"
              />

              <h2>Submitting Application</h2>

              <p>
                Please wait while we process your
                application.
              </p>
            </div>
          ) : (
            renderStep()
          )}
        </div>

        <footer className="app-footer">
          <p>
            Visa Assistance Application · Internal Staff
            System
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;