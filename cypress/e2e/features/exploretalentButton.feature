Feature: This feature is to ensure that user can access the quales website landing page.
As a user I want to access the quales landing page to enable navigate to other links.

Scenario: verify that a user with correct url can access the quales landing page
Given User have access to the landing page
When User should see Explore Talents CTA button in the Engage the best talents around the globe
Then Then user should navigate through the Explore Talents CTA button to a new page