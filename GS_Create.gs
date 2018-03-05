function createNewFile(theAccessTkn) {
  var d,options,payload,response,url;

  if (!theAccessTkn) {
    theAccessTkn = ScriptApp.getOAuthToken();
  }
  
  //See https://developers.google.com/apps-script/api/reference/rest/v1/projects/create
  url = "https://script.googleapis.com/v1/projects";
  
  d = new Date().toString().slice(0,10);

  payload = {
    "title": "AA_" + d
  }
  
  options = {
    "method" : "POST",
    "muteHttpExceptions": true,
    "headers": {
      'Authorization': 'Bearer ' +  theAccessTkn
     },
    "contentType": "application/json",//If the content type is set then you can stringify the payload
    "payload": JSON.stringify(payload)
  };
  
  response = UrlFetchApp.fetch(url,options);
  //Logger.log('response: ' + response)

  response = JSON.parse(response);
  
  return response;
}
