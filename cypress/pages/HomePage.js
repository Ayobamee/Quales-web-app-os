class HomePage {
  pageElements = {
    loginSuccessfulMsg: () => cy.contains("Login Successful"),
    addCourseBtn: () => cy.contains("Add Course"),
    logOutBtn: () => cy.get("button").contains("Log Out"),
  };

  //This method verifies that the user is logged into the Home page of the app.
  verifySuccessfulLogin() {
    //checks that the new url contains the string courses
    cy.url().should("contains", "/courses");
    this.pageElements.loginSuccessfulMsg().should("be.visible");
    this.pageElements.addCourseBtn().should("be.visible");
    cy.wait(10000);
    this.pageElements.logOutBtn().should("be.visible");
  }
}

export const homePage = new HomePage();
