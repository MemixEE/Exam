Feature: Login
  Verify login functionality to work

  Scenario: Perfom Login operation
    Given I navigate to the application 
    Given Login with username and password
      | UserName | Password |
      | espinosagu@globalhitss.com | AB2fRcK#Uex!nQ |
    And I click login button
    Then Login Succesfully
    And Click registro diario de sintomas
    And Llenar formualrio 
      | Temperatura | Oximetria |
      | 36.50 |  99 |
    And Save formulario