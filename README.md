# Apps-Script-API-Update-File
Overwrite one Apps Script file with another Apps Script file

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

You must enable the Apps Script API.
