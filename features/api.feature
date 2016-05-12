Feature: Test API call with aqtest

  Scenario: Search for artist genre on wikipedia
    Given I navigate to wikipedia
    Given I make an API call to spotify
      And I enter the artist genre in the search
     Then I will see information about my artist
