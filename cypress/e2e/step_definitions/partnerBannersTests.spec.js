import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("User is on the quales web page", () => {
    cy.visit("https://quales.vercel.app/")

});

When("User is on the web page ensure Quales is Trusted By section is available", () => {
    cy.get('.py-5 > .text-center').scrollIntoView()
});

Then("There should be quales partner logos on the trusted by banner", () => {
    cy.get(':nth-child(1) > .flex > span > .min-w-40 > img').should("be.visible")
    cy.get(':nth-child(2) > .flex > span > .min-w-40 > img').should("be.visible")
    cy.get(':nth-child(3) > .flex > span > .min-w-40 > img').should("be.visible")
    cy.get(':nth-child(4) > .flex > span > .min-w-40 > img').should("be.visible")
    cy.get(':nth-child(5) > .flex > span > .min-w-40 > img').should("be.visible")
    cy.get(':nth-child(6) > .flex > span > .min-w-40 > img').should("be.visible")
    cy.get(':nth-child(7) > .flex > span > .min-w-40 > img').should("be.visible")
    cy.get(':nth-child(8) > .flex > span > .min-w-40 > img').should("be.visible")
    cy.get(':nth-child(9) > .flex > span > .min-w-40 > img').should("be.visible")
});