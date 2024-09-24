Feature: This feature is to ensure that user can access the quales website landing page.
As a user I want to access the quales landing page to enable navigate to other links.

Scenario: verify that a user with correct url can access the quales landing page
Given User is on the quales web page
When User is on the web page ensure Quales is Trusted By section is available
Then There should be quales partner logos on the trusted by banner