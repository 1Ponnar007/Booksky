// selecting popbox, popupoveraly,button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
   
//function addpopupbutton(){
   // popupbox.style.display="block"
   // popupoverlay.style.display="block"
//}

//selecting cancel button 
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    popupbox.style.display="none"
    popupoverlay.style.display="none"
    event.preventDefault()
}
)
//select overal container, add book, bokk titile,author input,book decriptioninput
var container = document.querySelector(".container")
var addbook= document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

 
addbook.addEventListener("click",function(event){

    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    //div.innerHTML=`<h5>${bookauthorinput.value}`
    container.append(div)
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    
})

// addbook.addEventListener("click", function() {
//     var div = document.createElement("div");
//     div.setAttribute("class", "book-containers");
//     div.innerHTML = `<h2>${booktitleinput.value}</h2>`;  // Corrected variable name

//     // Appending the div to the container
//     container.appendChild(div);  // Use appendChild to add the new div
// });

function deletebook(event){
    event.target.parentElement.remove()
}
