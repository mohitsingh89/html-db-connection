function logSubmit(event) {
    log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    event.preventDefault();
   }
   const form = document.getElementById("form");

   const log = document.getElementById("log");
   if(!log){
       console.log("log element not found!!!!!!!!!!");
   }
   if(!form){
       console.log("Form element not found!!!!!!!!!!");
   }else
   {
       form.addEventListener("submit", logSubmit);
   }

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
  
    if (request.status >= 200 && request.status < 400) {
      data.forEach((e) => {
        console.log(e)
      })
    } else {
      console.log('error')
    }
  }
  
  request.send()
// Send request
request.send()
   //console.log(JSON.stringify(document.childNodes,null, 2))