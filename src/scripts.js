// hides title border style until JSON has been parsed and content appears on the screen
$(document).ready(function() {
   $('#title').hide();
   $("#btn").click(function() {
      $("#title").fadeIn(7000);
      $("#images").fadeIn(7000);
   });
})

// AJAX HTTP request to API to load JSON data into document
function loadRequest() {

   const xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", function () {
      if (this.readyState == 4 && this.status == 200) {
         var obj = JSON.parse(this.responseText);
         var imgHTML = "<img src = '" + obj.titles[0].image + "'/>";
         document.getElementById("title").innerHTML = obj.companies[0].title;
         document.getElementById("images").innerHTML = imgHTML;
      }
   });

   xhr.open("GET", "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception", true);
   xhr.setRequestHeader("x-rapidapi-key", "0569fabd4cmshd02fbc174ebedf8p165998jsne31171fbc263");
   xhr.setRequestHeader("x-rapidapi-host", "imdb-internet-movie-database-unofficial.p.rapidapi.com");

   xhr.send();

}