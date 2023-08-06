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
   //console.log(JSON.stringify(document.childNodes,null, 2))