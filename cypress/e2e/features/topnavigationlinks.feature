Feature: This feature is to ensure that user can access the quales website landing page.
As a user I want to access the quales landing page to enable navigate to other links.

Scenario: verify that a user with correct url can access the quales landing page
Given A user should access the quales website landing page
When Navigation links should be seen on the top corner of the page
Then A user should navigate through the Quales links on landing page
Then A user should able to reture to the home page when click on the quales logo