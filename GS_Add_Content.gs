function addNewFiles(files,arrNewContent) {
try{
  var i,L,lastUsr,thisElmt,thisFileObj,updateTime;
  //Dont update the appsscript JSON file

  //Logger.log('typeof files: ' + typeof files)
  
  updateTime = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd'T'HH:mm:ss'Z'");
      
  lastUsr = {//For a file that is not shared with anyone this will always be the same information
    "email":"example@gmail.com",
    "name":"First Last",
    "photoUrl":"https://lh5.googleusercontent.com/123/h128/photo.jpg"
  }
  
  L = arrNewContent.length;
  //Logger.log('L: ' + L)
  
  for (i=0;i<L;i++) {//loop through each element of the new content to add to each inner file
    thisFileObj = {};//Reset
    
    thisElmt = arrNewContent[i];
    
    thisFileObj.name = thisElmt.name;
    thisFileObj.type = thisElmt.type;
    thisFileObj.source = thisElmt.source;//The actual content of the file - Either html or javascript
    thisFileObj.lastModifyUser = lastUsr;
    thisFileObj.createTime = updateTime;
    thisFileObj.updateTime = updateTime;
    thisFileObj.functionSet = thisElmt.functionSet;
    
    files.push(thisFileObj);
  }
  
  Logger.log('files 35: ' + files)
  return files;
  
}catch(e) {
  Logger.log(e.message +  " stack " + e.stack)
}
}

/*  FILE CONTENT STRUCTURE

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



*/