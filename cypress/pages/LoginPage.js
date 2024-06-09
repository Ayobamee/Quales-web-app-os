class LoginPage {
  pageElements = {
    emailAddressInputField: () => cy.get('[data-testid="EmailAddress"]'),
    passwordInputField: () => cy.get('input[type="password"]'),
    loginBtn: () => cy.get("button").contains("Login"),
  };

  //This method types an email, password and clicks the login button.
  userTypesInCorrectEmailAddressAndPassword() {
    //This line of code makes reference to the email address input field and types the username there
    this.pageElements.emailAddressInputField().type(Cypress.env("USERNAME"));
    //This line of code makes reference to the password input field and types the username there
    this.pageElements.passwordInputField().type(Cypress.env("PASSWORD"));
    //This line of code makes reference to the login button and then clicks on it
    this.pageElements.loginBtn().click();
  }

  userTypesInCorrectEmailAddressAndWrongPassword() {
    this.pageElements.emailAddressInputField().type(Cypress.env("USERNAME"));
    this.pageElements.passwordInputField().type(Cypress.env("WRONGPASSWORD"));
    this.pageElements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
