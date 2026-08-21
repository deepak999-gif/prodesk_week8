function LoadingSpinner() {
  return (
    <div
      className="loading-container"
      role="status"
      aria-live="polite"
    >
      <div className="large-spinner" aria-hidden="true" />
      <p>Submitting your application...</p>
      <span className="sr-only">
        Please wait while your application is being submitted.
      </span>
    </div>
  );
}

export default LoadingSpinner;