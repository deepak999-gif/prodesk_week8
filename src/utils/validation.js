const nameRegex = /^[A-Za-z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;
const passportRegex = /^[A-Z0-9]{6,12}$/;

export const validateApplicantDetails = (formData) => {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (!nameRegex.test(formData.fullName)) {
    errors.fullName = "Enter a valid name using letters only.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Enter a valid 10-digit Indian phone number.";
  }

  if (!formData.passportNumber.trim()) {
    errors.passportNumber = "Passport number is required.";
  } else if (!passportRegex.test(formData.passportNumber)) {
    errors.passportNumber =
      "Passport number must contain 6-12 uppercase letters or numbers.";
  }

  return errors;
};

export const validateVisaDetails = (formData) => {
  const errors = {};

  if (!formData.destination) {
    errors.destination = "Please select a destination.";
  }

  if (!formData.visaType) {
    errors.visaType = "Please select a visa type.";
  }

  if (!formData.travelDate) {
    errors.travelDate = "Travel date is required.";
  }

  if (!formData.purpose.trim()) {
    errors.purpose = "Purpose of travel is required.";
  } else if (formData.purpose.trim().length < 10) {
    errors.purpose = "Please provide at least 10 characters.";
  }

  return errors;
};