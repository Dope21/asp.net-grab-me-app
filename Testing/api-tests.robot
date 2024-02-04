*** Settings ***
Library   RequestsLibrary

*** Keywords ***

*** Variables ***
${end_point}    http://127.0.0.1:8080/

*** Test Cases ***
Test Get Posts
  
    ${res}=   GET   ${end_point}

    Should Be Equal    ${res.status_code}    ${200}
