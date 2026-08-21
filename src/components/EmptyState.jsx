function EmptyState({ message = "No data found" }) {
  return (
    <div className="empty-state">
      <div className="empty-icon" aria-hidden="true">
        —
      </div>

      <h2>No Data Found</h2>

      <p>{message}</p>
    </div>
  );
}

export default EmptyState;