*** Settings ***
Library   RequestsLibrary

*** Variables ***
${base_url}    http://127.0.0.1:8080/api/posts
${content-type}   application/json
${post_data}    # store the response post data

*** Keywords ***
Log Response Dict
    [Arguments]   ${post_data}
    Log To Console    \n
    FOR    ${key}   IN    @{post_data.keys()}
    Log To Console    ${key}:${post_data['${key}']}
    END
    Log To Console    \n

*** Test Cases ***

Test Get Posts
    ${res}=   GET   ${base_url}   expected_status=200

Test Create New Post
    ${body}=    Create Dictionary 
    ...   Name=test user    
    ...   Phone=9999999999    
    ...   Shop=Test Shop    
    ...   Menu=test menu    
    ...   Amount=1    
    ...   Description=bla bla bla...   
    ...   ConfirmInfo=Create Dictionary
    ${headers}=    Create Dictionary    Content-Type=${content-type}
    ${res}=   POST    ${base_url}    json=${body}    headers=${headers}    expected_status=200
    ${post}=   Set Variable    ${res.json()}
    Set Suite Variable    ${post}
    Log Response Dict    ${post}

Test Accept Order 
    ${body}=    Create Dictionary
    ...   name=test confirm
    ...   phone=8888888888
    ...   detail=bla bla bla...
    ${headers}=    Create Dictionary    Content-Type=${content-type}
    ${res}=   PUT   ${base_url}/${post['id']}   json=${body}   headers=${headers}   expected_status=200

Test Get Accepted Order
    ${res}=   GET   ${base_url}/view    expected_status=200

Test Get Post By ID
    ${res}=   GET   ${base_url}/${post['id']}   expected_status=200
    Log Response Dict    ${res.json()}

Test Delete Post
    ${res}=   DELETE    ${base_url}/${post['id']}   expected_status=200
