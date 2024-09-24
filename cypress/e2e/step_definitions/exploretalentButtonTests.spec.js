import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("User have access to the landing page", () => {
    cy.visit("https://quales.vercel.app/");
});

When("User should see Explore Talents CTA button in the Engage the best talents around the globe", () => {
    cy.contains('Explore Talents').should("be.visible");
});

Then("Then user should navigate through the Explore Talents CTA button to a new page", () => {
    cy.get('.glass').click();
});