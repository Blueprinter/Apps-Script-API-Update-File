function getFiles(scriptId,theAccessTkn) {  
  var files,options,payload,response,url;

  if (!scriptId) {
    Logger.log('There was an error - No scriptID')
    //Error handling function
    return;
  }

  if (!theAccessTkn) {
    theAccessTkn = ScriptApp.getOAuthToken();
  }
  
  //This is exactly the same URL that is used to update content - But this uses a GET request
  //and no payload
  url = "https://script.googleapis.com/v1/projects/" + scriptId + "/content";

  options = {
    "method" : "GET",
    "muteHttpExceptions": true,
    "headers": {
      'Authorization': 'Bearer ' +  theAccessTkn
    }
  };

  response = UrlFetchApp.fetch(url,options);
  //Logger.log('response 27: ' + response)

  response = JSON.parse(response);//The response must be parsed into JSON even though it is an object
  files = response.files;
  
  //Logger.log("files 31: " + JSON.stringify(files))
  
  return files;
}

function testGetFiles() {
  getFiles("The file ID here");
}