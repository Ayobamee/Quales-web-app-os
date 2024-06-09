import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { homePage } from "@pages/HomePage";

Given("A user is at the quales edu library login page", () => {
  cy.visit("/login");
});

When(
  "User enters their email address, password and click on the login button",
  () => {
    loginPage.userTypesInCorrectEmailAddressAndPassword();
  }
);

When(
  "User enters a correct email address, incorrect password and click on the login button",
  () => {
    loginPage.userTypesInCorrectEmailAddressAndWrongPassword();
  }
);

Then("User should be directed to the quales home page", () => {
  homePage.verifySuccessfulLogin();
});
