function getNewSettings() {
  var a;
  
  a = [
    {"name":"GS_Error",
     "type":"SERVER_JS",
     "source":"function handleError(e) {\nGmailApp.sendEmail('','','');  \n}\n",
     "functionSet":{
       "values":[{"name":"handleError"}]
     }
    },
    {"name":"H_About",
     "type":"HTML",
     "source":"\u003c!DOCTYPE html\u003e\n\u003chtml\u003e\nVersion 1\n\n\u003c/html\u003e\n\n\n",
     "functionSet":{}//For html files set the functionSet propterty to an empty object
    }
    
    ]
  
  return a;
}

