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
