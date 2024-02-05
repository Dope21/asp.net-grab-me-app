*** Settings ***
Library   RequestsLibrary

*** Variables ***
${base_url}    http://127.0.0.1:8080/
${content-type}   application/json

*** Keywords ***
Create Post Data
    [Documentation]   Create a static data for new post
    ${body}=   Create Dictionary   
    ...   Name=test user    
    ...   Phone=9999999999    
    ...   Shop=Test Shop    
    ...   Menu=test menu    
    ...   Amount=1    
    ...   Discription=bla bla bla...   
    ...   ConfirmInfo=Create Dictionary 
    [Return]    ${body}

*** Test Cases ***

Test Get Posts
    ${res}=   GET   ${base_url}
    Should Be Equal    ${res.status_code}    ${200}

Test Create New Post
    ${body}=    Create Post Data 
    ${headers}=    Create Dictionary    Content-Type=${content-type}
    ${res}=   POST    ${base_url}api/posts    json=${body}    headers=${headers}    expected_status=200
    Log To Console   ${res.json()}
