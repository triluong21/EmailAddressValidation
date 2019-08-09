import * as EmailValidationDomain from "./domain/EmailValidation";

export const emailValidationProcess = (input: string): EmailValidationDomain.IEmailValidationResponse => {
  let workEmail: string;
  const response: EmailValidationDomain.IEmailValidationResponse = {
    responseEmail: input,
    validationStatus: "",
  };
  // check if input is undefined
  if (input !== undefined) {
    workEmail = input.toLocaleLowerCase(); // lowercase email address
    // check if FIRST character of email address is valid
    if (workEmail.charAt(0).match("^[a-z0-9'_']*$")) {
      // check if LAST character of email address is valid
      if (workEmail.charAt(workEmail.length - 1).match("^[a-z]*$")) {
        const atSignCount = (workEmail.split("@").length - 1); // count '@' in email address
        // check if there is NO or too many @ sign
        if (atSignCount === 1) {
          const atSignIndex = workEmail.indexOf("@"); // locate @ sign index
          // check if period followed @ Sign immediately
          if (workEmail.charAt(atSignIndex + 1) !== ".") {
            // count total of '.' in email address
            const periodCount = (workEmail.split(".").length - 1);
            // check if there is NO or too many Period
            if (periodCount === 1) {
              // YEAH, Email Address passed validation Process
              response.responseEmail = workEmail;
              response.validationStatus = EmailValidationDomain.EMAIL_IS_VALID;
            } else {
              response.validationStatus = EmailValidationDomain.EMAIL_SHOULD_HAVE_ONE_PERIOD;
            }
          } else {
            response.validationStatus = EmailValidationDomain.EMAIL_MISSING_DOMAIN;
          }
        } else {
          response.validationStatus = EmailValidationDomain.EMAIL_SHOULD_HAVE_ONE_AT_SIGN;
        }
      } else {
        response.validationStatus = EmailValidationDomain.INVALID_EMAIL_LAST_CHARACTER;
      }
    } else {
      response.validationStatus = EmailValidationDomain.INVALID_EMAIL_FIRST_CHARACTER;
    }
  } else {
    response.validationStatus = EmailValidationDomain.EMAIL_IS_UNDEFINED;
  }
  return response;
};
