Feature: This feature is to ensure that user can access the quales website landing page.
As a user I want to access the quales landing page to enable navigate to other links.

Scenario: erify that a user with correct url can access the quales landing page
Given User is on quales website landing page successfully
When User should see Hire Talents CTA button in the Engage the best talents around the globe
Then User should navigate through the Hire Talents CTA button to a new page