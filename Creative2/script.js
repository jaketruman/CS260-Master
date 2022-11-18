
/*global fetch*/ 

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
const url ="https://api.stockdata.org/v1/data/quote?symbols="+ value +"&api_token=krqwqi9OSoW1y5hkcBWLtNMvITVRff16VWN6Minu";
fetch(url)
.then(function(response) {
      return response.json();
    }).then(function(json){
        
        document.querySelector(".name").innerText = "Company Name: " + json["data"][0].name;
         document.querySelector(".price").innerText = "Current Price: " + json["data"][0].price;
        document.querySelector(".open").innerText = "Day Open: " +  json["data"][0].day_open;
        document.querySelector(".low").innerText = "Day Low: " + json["data"][0].day_low;
        document.querySelector(".high").innerText = "Day High: " + json["data"][0].day_high;
        document.querySelector(".change").innerText = " Day Change: " + json["data"][0].day_change;
      
    });
});
/*const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=ddf87aa23cbc2e2c76d2f704d5e29ffa";
fetch(url2)

const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
console.log(value);

    .then(function(response) {
      return response.json();
    }).then(function(json) {
        let forecast = "";
      for (let i=0; i < json.list.length; i++) {
	forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
	forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      }
     
      document.getElementById("forecastResults").innerHTML = forecast;
      
    });
  
});*/