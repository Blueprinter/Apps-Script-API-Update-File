# Apps-Script-API-Update-File
* Create a new Apps Script file
* Get the file ID of the new Apps Script file
* Get the files content of the new Apps Script file
* Modify the files content with new content
* Overwrite the new (existing) Apps Script file with the new content - Including adding a new inner file

This is Apps Script code.  You must use the Apps Script code editor: https://script.google.com

You must edit your manifest file.  In the code editor, choose "View" - "Show manifest file"

    {
      "timeZone": "Your time zone here",
      "oauthScopes": [
        "https://www.googleapis.com/auth/script.projects",
        "https://www.googleapis.com/auth/script.external_request",
        "https://www.googleapis.com/auth/drive"
      ],
      "dependencies": {
      },
      "exceptionLogging": "STACKDRIVER"
    }

The main function is in the file GS_Main.  Start there.

The main function controls the program flow for the entire process.

The structure of the JSON object data is critical to understand.

You must turn on a button in the developer console to allow the Apps Script file to change your Apps Script files.

You must enable the Google Apps Script API in the Google Cloud platform developer console. 

From the Apps Script code editor:

* "Resources" menu
* Cloud Platform project
* View API console
* Enable APIs and Services
* Search for: Google Apps Script

FILE CONTENT STRUCTURE

The file content is not directly associated with any key, like an inner file ID.  So you can't retrieve file content directly by file name.  Of course, you can know what content is associated with that file name, but the code must first find the object with that file name.
Each file content object is an element in an array of files.  The array maintains the original file order, but you can't access elements in an array by anything but the index number, or loop through the entire array, check each inner object for the file name.

    [
      {"name":"appsscript",
       "type":"JSON",
       "source":"{\n  \"timeZone\": \"America/New_York\",\n  \"dependencies\": {\n  },\n  \"exceptionLogging\": \"STACKDRIVER\"\n}",
       "lastModifyUser":{
           "email":"example@gmail.com",
           "name":"First Last",
           "photoUrl":"https://lh5.googleusercontent.com/123/h128/photo.jpg"
       },
       "createTime":"2018-03-04T19:37:26.798Z",
       "updateTime":"2018-03-04T19:37:26.798Z",
       "functionSet":{}
      },
  
      {"name":"Code",
       "type":"SERVER_JS",
       "source":"function myFunction() {\n  \n}\n",
       "lastModifyUser":{
               "email":"example@gmail.com",
               "name":"First Last",
               "photoUrl":"https://lh5.googleusercontent.com/123/h128/photo.jpg"
       },
       "createTime":"2018-03-04T19:49:08.868Z",
       "updateTime":"2018-03-04T19:49:08.871Z",
       "functionSet":{
          "values":[{"name":"myFunction"}]}
       }
    ]
