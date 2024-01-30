function updateTime() {


//Edinburgh
let edinburghElement = document.querySelector("#Edinburgh");
if(edinburghElement) {
let edinburghDateElement = edinburghElement.querySelector(".date");
let edinburghTimeElement = edinburghElement.querySelector(".time");
let edinburghTime = moment().tz("Europe/Edinburgh");

edinburghDateElement.innerHTML = edinburghTime.format("MMMM Do YYYY");
edinburghTimeElement.innerHTML = edinburghTime.format("h:mm:ss[<small>]A[</small>");

}
//Athens
let athensElement = document.querySelector("#Athens");
if (athensElement){
let athensDateElement = athensElement.querySelector(".date");
let athensTimeElement = athensElement.querySelector(".time");
let athensTime = moment().tz("Europe/Athens");

athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
athensTimeElement.innerHTML = athensTime.format(
  "h:mm:ss[<small>]A[</small>"); }}

  function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess(); }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
      citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;}

  updateTime();
  setInterval(updateTime, 1000);
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);