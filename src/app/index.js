const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');

require('./index.css');

const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data);
    ui.reder(data);
}
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    const newLocation = weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});
document.addEventListener('DOMContentLoaded', fetchWeather);