import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("User is on quales website landing page successfully", () => {
    cy.visit("https://quales.vercel.app/")
});

When("User should see Hire Talents CTA button in the Engage the best talents around the globe", () => {
    cy.contains('Hire Talents').should("be.visible")
});

Then("User should navigate through the Hire Talents CTA button to a new page", () => {
    cy.get('.absolute > .flex > .bg-white').click()
});

   

