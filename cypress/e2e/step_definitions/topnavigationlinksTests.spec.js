import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("A user should access the quales website landing page", () => {
    cy.visit("https://quales.vercel.app/");
});

When("Navigation links should be seen on the top corner of the page", () => {
    cy.contains('Quales').should("be.visible");
    cy.contains('Quales Academy').should("be.visible");
    cy.contains('Use Cases').should("be.visible");
    cy.contains('Thought Leadership').should("be.visible");
    cy.contains('About Us').should("be.visible");
});

Then("A user should navigate through the Quales links on landing page", () => {
    cy.get('.menu-horizontal > :nth-child(1) > a').click();
    cy.get('.menu-horizontal > :nth-child(2) > a').click();
    cy.get('.menu-horizontal > :nth-child(3) > a').click();
    cy.get('.menu-horizontal > :nth-child(4) > a').click();
});
 
Then("A user should able to reture to the home page when click on the quales logo", () => {
    cy.get('.navbar-start > .flex > img').click();
});

