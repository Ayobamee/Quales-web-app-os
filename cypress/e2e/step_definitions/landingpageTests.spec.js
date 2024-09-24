import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("A user is on the quales website landing page", () => {
    cy.visit("https://quales.vercel.app/");

});

When("The user is viewing through landing page", () => {

});

Then("User should see engage the bests talents around the globe on the landing page", () => {
    cy.contains('Engage the best talents around the globe').should("be.visible")

});
