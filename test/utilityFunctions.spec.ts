import { expect } from "chai";
import * as EmailValidationDomain from "../src/domain/EmailValidation";
import { emailValidationProcess } from "../src/utilityFunctions";

describe("Test emailValidationProcess Function", () => {
  it("Test email first character is lowercase alphanumeric", () => {
    const callInput = "garfieldthecat123@gmail.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123@gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_IS_VALID);
  });

  it("Test email first character is uppercase alphanumeric", () => {
    const callInput = "Garfieldthecat123@gmail.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123@gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_IS_VALID);
  });

  it("Test email first character is a number", () => {
    const callInput = "1garfieldthecat123@gmail.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("1garfieldthecat123@gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_IS_VALID);
  });

  it("Test email first character is underscore", () => {
    const callInput = "_garfieldthecat123@gmail.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("_garfieldthecat123@gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_IS_VALID);
  });

  it("Test email last character is lowercase alphabetic", () => {
    const callInput = "garfieldthecat123@gmail.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123@gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_IS_VALID);
  });

  it("Test email last character is uppercase alphabetic", () => {
    const callInput = "garfieldthecat123@gmail.coM";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123@gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_IS_VALID);
  });

  it("Test email last character is a number", () => {
    const callInput = "garfieldthecat123@gmail.co2";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123@gmail.co2");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.INVALID_EMAIL_LAST_CHARACTER);
  });

  it("Test email last character is special character", () => {
    const callInput = "garfieldthecat123@gmail.co#";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123@gmail.co#");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.INVALID_EMAIL_LAST_CHARACTER);
  });

  it("Test email with TWO @ signs", () => {
    const callInput = "garfieldthecat@123@gmail.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat@123@gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_SHOULD_HAVE_ONE_AT_SIGN);
  });

  it("Test email with NO @ sign", () => {
    const callInput = "garfieldthecat123gmail.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_SHOULD_HAVE_ONE_AT_SIGN);
  });

  it("Test email with MISSING domain", () => {
    const callInput = "garfieldthecat123@.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123@.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_MISSING_DOMAIN);
  });

  it("Test email with NO period", () => {
    const callInput = "garfieldthecat123@gmailcom";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat123@gmailcom");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_SHOULD_HAVE_ONE_PERIOD);
  });

  it("Test email with MORE THAN ONE period", () => {
    const callInput = "garfieldthecat.123@gmail.com";

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal("garfieldthecat.123@gmail.com");
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_SHOULD_HAVE_ONE_PERIOD);
  });

  it("Test undefined email", () => {
    const callInput: string = undefined;

    const response = emailValidationProcess(callInput);
    expect(response.responseEmail).to.be.equal(undefined);
    expect(response.validationStatus).to.be.equal(EmailValidationDomain.EMAIL_IS_UNDEFINED);
  });
});
