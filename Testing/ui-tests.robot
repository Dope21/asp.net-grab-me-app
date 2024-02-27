*** Settings ***
Library   Selenium2Library

*** Variables ***
${base_url}   http://127.0.0.1:8080/

*** Keywords ***

*** Test Cases ***
Enter Home Page
    Open Browser    ${base_url}   chrome
    Title Should Be   React App
