const signUpValidate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = "Email is required";
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if(!values.password) {
    errors.password = "Password is required";
  } else if(values.password.length < 8) {
    errors.password = "Password too short"
  }

  if(!values.password_confirm) {
    errors.password_confirm = "You must confirm your password";
  } else if(values.password !== values.password_confirm) {
    errors.password_confirm = "Passwords do not match";
  }

  return errors;
}

const signInValidate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = "Email is required";
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

const resendEmailVerificationValidate = values => {
  const errors = {};

  if(!values.email) {
    errors.email = "Email is required";
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

export const newPasswordValidate = values => {
  const errors = {};

  if(!values.newPassword) {
    errors.newPassword = "New password is required";
  } else if(values.newPassword.length < 8) {
    errors.newPassword = "Password too short"
  }

  return errors;
}

export {
  signUpValidate,
  signInValidate,
  resendEmailVerificationValidate
};
