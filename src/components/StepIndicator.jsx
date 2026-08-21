const steps = [
  "Applicant Details",
  "Visa Details",
  "Review",
];

function StepIndicator({ currentStep }) {
  return (
    <div className="step-indicator" aria-label="Application progress">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div className="step-wrapper" key={step}>
            <div
              className={`step-circle ${
                isActive ? "active" : ""
              } ${isCompleted ? "completed" : ""}`}
              aria-current={isActive ? "step" : undefined}
            >
              {isCompleted ? "✓" : stepNumber}
            </div>

            <span className="step-label">{step}</span>

            {index < steps.length - 1 && (
              <div
                className={`step-line ${
                  isCompleted ? "completed" : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StepIndicator;