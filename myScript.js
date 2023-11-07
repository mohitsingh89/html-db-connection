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
 

// LIST 
 const localStorageItems = JSON.parse(localStorage.getItem('items')) || []
    // Load items from local storage
    window.onload = function () {
        const itemsCopy = [...localStorageItems];
        itemsCopy.forEach(function (item) {
            addItemToList(item);
        });
    };

    // Add item to the list
    function addItem() {
        var item = document.getElementById('inputItem').value;
        if (item) {
            addItemToList(item);
            saveItem(item);
        }
        document.getElementById('inputItem').value = '';
    }

    // Add item to the list element
    function addItemToList(item) {
        var list = document.getElementById('list');
        var listItem = document.createElement('li');
        listItem.innerHTML = '<input type="checkbox"  onchange="removeItem(\'' + item + '\')"><label style="padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 16px; width: 200px;">' + item + '</label><br><br><br>';
        list.appendChild(listItem);
    }

    // Save item to local storage
    function saveItem(item) {
        var items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    }

    // Remove item from the list and local storage
    function removeItem(item) {
        var items = JSON.parse(localStorage.getItem('items')) || [];
        var index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(items));
            location.reload();
        }
    }
