export const sanitizeInput = (value) => {
  return value
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trimStart();
};