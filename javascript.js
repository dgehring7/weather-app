$(document).ready(function() {
    window.addEventListener('load', function() {
        let history=(!JSON.parse(localStorage.getItem("Search-history")))?
        JSON.parse(localStorage.getItem("Search-history")):[];
    });
    let cities=[];
   function getWeatherForcast(city) {
       if (!city){
           return;
       }
       let owmEndpoint="http://api.openweathermap.org/data/2.5/weather?id={cityid}&APPID=60123747790be0a2e989708c4e9c45d6";
       fetch(owmEndpoint)
       .then((response)=>response.json())
       .then((data)=>{
           let futureForcastElem = document.querySelector("future-forcast");
           futureForcastElem.innerHTML = <h4 class="mt-2">5-Day Future Forcast</h4>

           futureForcastRowElm = document.createElement("div");
           futureForcastRowElm.className = '"row"';

        //    Process data from endpoint
            for (let i=0; i<data.list.length; i++) {
                if (data.list[i].dt_txt.indexOff('15:00:00') !== -1){
                    let columnElm = document.createElement('div');
                    columnElm.classList.add("col-md-2")
                    let cardElm = document.createElement('div');
                    
                    cardElm.classList.add('card', 'bg-primary', 'text-white');
                }
            }
       })
   }
// Load local storage
localStorage.getItem('name', 'weather')
// Get users location
// User clicks in search box and searches for city
// Results appear next to search with City: name, date, an icon representation of weather conditions
//      the temperature, the humidity, the wind speed, and the UV index for current weather
// fetch (api.openweathermap.org/data/2.5/weather?id={cityid}&APPID=60123747790be0a2e989708c4e9c45d6)
//    api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=60123747790be0a2e989708c4e9c45d6
// A color code let the user know if the conditions are favorable, moderate, or severe
// Along with current weather, a five day forcast is displayed
// Local storage collects search history, and when user clicks on previously searched it redisplays weather info
});