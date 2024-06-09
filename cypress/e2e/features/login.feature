Feature: Login functionality

    This test aims to confirm that the login functionality of this applications work appropriately

    Background: Users need to be present in the quales edu app login page
        #The Given syntax is a pre-requisite
        Given A user is at the quales edu library login page
    # Scenario: Successful Login to the quales edu web app
    #     #The When syntax specifies the actions the user performs
    #     When User enters their email address, password and click on the login button
    #     #The Then syntax specifies the expected outcome of the test
    #     Then User should be directed to the quales home page


    Scenario: Unsuccessful Login to the quales edu web app
        When User enters a correct email address, incorrect password and click on the login button
    

