function createAndUpdate() {
  var arrayOfNewContent,files,newContent,newFileData,response,scriptID,txtFileID;

  newFileData = createNewFile();//Create a new Apps Script file and get the returned success response
  
  scriptID = newFileData.scriptId;//Get the script ID of the new file that was just created
  //Logger.log('scriptID: ' + scriptID)
  
  files = getFiles(scriptID);
  //Logger.log('files: ' + files)
  
  arrayOfNewContent = getNewSettings();
  //Logger.log('arrayOfNewContent: ' + arrayOfNewContent)
  
  newContent = addNewFiles(files,arrayOfNewContent);
  
  Logger.log('newContent 17: ' + JSON.stringify(newContent))

  txtFileID = DriveApp.createFile('temp_File', JSON.stringify(newContent), MimeType.PLAIN_TEXT).getId();
  Logger.log('txtFileID: ' + txtFileID)
  
  PropertiesService.getScriptProperties().setProperty('txtFileID', txtFileID);
  PropertiesService.getScriptProperties().setProperty('scriptFileID', scriptID);
}

function updateTheNewFile() {
  var newContent,obj,response,ID_scriptFile,txtFileId;

  txtFileId = PropertiesService.getScriptProperties().getProperty('txtFileID');
  ID_scriptFile = PropertiesService.getScriptProperties().getProperty('scriptFileID');
  
  //Logger.log('txtFileId: ' + txtFileId)
  //Logger.log('ID_scriptFile: ' + ID_scriptFile)
  
  newContent = DriveApp.getFileById(txtFileId).getBlob().getDataAsString();

  //Logger.log('newContent: ' + newContent)
  //Logger.log('typeof newContent: ' + typeof newContent)
  
  newContent = JSON.parse(newContent);
  //Logger.log('newContent: ' + newContent)
  //Logger.log('typeof newContent: ' + typeof newContent)
  
  obj = {};
  obj.files = newContent;
    
  /*
  {
  "files": [
    {
      object(File)
    }
  ],
}
    */  
  //Logger.log('typeof obj: ' + typeof obj)
  
  response = updateFile(ID_scriptFile,obj);
  //Logger.log('response: ' + response)
  
}
