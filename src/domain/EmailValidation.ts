export const EMAIL_IS_VALID = "OK";
export const EMAIL_IS_UNDEFINED = "01";
export const INVALID_EMAIL_FIRST_CHARACTER = "02";
export const INVALID_EMAIL_LAST_CHARACTER = "03";
export const EMAIL_SHOULD_HAVE_ONE_AT_SIGN = "04";
export const EMAIL_MISSING_DOMAIN = "05";
export const EMAIL_SHOULD_HAVE_ONE_PERIOD = "06";

export interface IEmailValidationResponse {
  responseEmail: string;
  validationStatus: string;
}