function logSubmit(event) {
    log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    event.preventDefault();
}

function setDogImage(event) {
    fetchDogPicture().then((pic)=>{
        image.setAttribute("src", pic);
        dogName.textContent = `${pic.split('/')[4]}`;
     }
    );
    event.preventDefault();
}

   const form = document.getElementById("form");
   const log = document.getElementById("log");
   const image = document.getElementById("image");
   const dogName = document.getElementById("dogName");

   if(!log){
       console.log("log element not found!!!!!!!!!!");
   }
   if(!image){
    console.log("image element not found!!!!!!!!!!");
}
   if(!form){
       console.log("Form element not found!!!!!!!!!!");
   }else
   {
      // form.addEventListener("submit", logSubmit);
       form.addEventListener("submit", setDogImage);
   }

 async function fetchDogPicture() {
    const response =await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await response.json();
    console.log(json);
    return json?.message;
}

fetchDogPicture().then((pic)=>{
    console.log(pic);
 }
);
 
