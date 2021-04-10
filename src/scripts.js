/* old code

const data = null;

function loadRequest() {
   const xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", function () {
      if (this.readyState == 4 && this.status == 200) {
         console.log(this.responseText);
         var obj = JSON.parse(this.responseText);
         document.getElementById("stat").innerHTML = obj.org;
      }
   });

   xhr.open("GET", "https://mlb-data.p.rapidapi.com/json/named.player_teams.bam?player_id='493316'&season='2014'", true);
   //xhr.setRequestHeader("x-rapidapi-key", "0569fabd4cmshd02fbc174ebedf8p165998jsne31171fbc263");
   //xhr.setRequestHeader("x-rapidapi-host", "mlb-data.p.rapidapi.com");
   xhr.setRequestHeader("Accept", "application/json");

   xhr.send();

} */

//const data = null;

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