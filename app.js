//declare variables
var totalItems = document.getElementById("totalItems");
var loMein = document.getElementById("loMein");
var rice = document.getElementById("rice");
var generalTsoChicken = document.getElementById("generalTsoChicken");
var teryakiBeef = document.getElementById("teryakiBeef");
var submitBtn = document.getElementById("mySubmit");
var field = document.forms["wokForm"]["wokItem"].value;

var order = {};
var wokItemSummary = [];
var arrayString;
var objectString;

// this function adds and removes values from the wokItemSummary array literal, then it displays the array index values
function registerItem(event) {
    // IE8 compatibility
    if (event === undefined) {
       event = window.event;
    }
    var callerElement = event.target || event.srcElement;
    var wokItem = callerElement.value;

    // add input value to array when checkbox is checked
    if (callerElement.checked) {
       wokItemSummary.push(wokItem);

       // add checkbox value to list in profile section
       var newWokItem = document.createElement("li");
       newWokItem.innerHTML = wokItem;
       document.getElementById("items").appendChild(newWokItem);
       // make profile section and lodging section visible
       document.getElementById("orderSummary").style.display = "block";
       document.getElementById("orderSection").style.display = "block";
    } else { // if box has just been unchecked
       var listItems = document.querySelectorAll("#items li");
       for (var i = 0; i < listItems.length; i++) {
          if (listItems[i].innerHTML === wokItem) {
             // remove element at index i from array
             wokItemSummary.splice(i, 1); 
             // remove lodging from profile list
             listItems[i].parentNode.removeChild(listItems[i]);
             break;
          }
       }
    }
}

// convert form input to strings for submission
function convertToString() {
    // convert lodging array to string
    arrayString = wokItemSummary.toString();
    // convert profile object to string
    objectString = JSON.stringify(order);
}

function createEventListeners() {
var wokItem = document.getElementsByName("wokItem");
   if (wokItem[0].addEventListener) {
      for (var i = 0; i < wokItem.length; i++) {
         wokItem[i].addEventListener("change", registerItem, false);
      }
   } else if (wokItem[0].attachEvent) {
      for (var i = 0; i < wokItem.length; i++) {
         wokItem[i].attachEvent("onchange", registerItem);
      }
   }

   var button = document.getElementById("mySubmit");
   if (button.addEventListener) {
      button.addEventListener("click", convertToString, false);
   } else if (button.attachEvent) {
      button.attachEvent("onclick", convertToString);
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}