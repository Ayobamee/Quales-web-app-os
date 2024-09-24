import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("A user visit the quales website landing page", () => {
    cy.visit("https://quales.vercel.app/")

});

When("User should scroll beneath the landing page to view partners logo", () => {
    cy.get('.py-5 > .text-center').scrollIntoView();
    
});

Then("User should view different features available on leverage our community section", () => {
    cy.get('[data-index="1"] > :nth-child(1) > .w-full.flex > .carousel-item').should("be.visible")
    cy.get('[data-index="2"] > :nth-child(1) > .w-full.flex > .carousel-item').should("be.visible")
    cy.get('[data-index="3"] > :nth-child(1) > .w-full.flex > .carousel-item').should("be.visible")
    cy.get('[data-index="4"] > :nth-child(1) > .w-full.flex > .carousel-item').should("be.visible")
    
});