const searchBtn = document.getElementById("search-btn");
const city = document.getElementById("city");
// const img = document.getElementById("vector");
const temp = document.getElementById("temp");
const lead = document.getElementById("lead");
searchBtn.addEventListener("click", function(){
    let input = document.getElementById("city-name").value;
    console.log(input)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=ee37041bb2ad802bdd7f94107aeb82fe`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
    console.log(data)
    city.innerText = data.name;
    temp.innerText = data.main.temp;
    lead.innerText = data.weather[0].main;
    });
});
