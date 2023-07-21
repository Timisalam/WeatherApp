const form = document.querySelector('form');
const details = document.querySelector('.details');
const img = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const card = document.querySelector('.card');



searchCity = (text) => {
    getCity(text)
        .then(data => {
            return getWeather(data.Key)
        })
        .then(data => {
            updateDetails(text, data.WeatherText, data.Temperature.Metric.Value,data.IsDayTime,data.WeatherIcon);
        })
        .catch(err => {
            console.log("oops", err);
        })
}

updateDetails = (cityName, weather,temp,daytime,weatherIcon) => {
    html = ` <div class="text-muted text-uppercase text-center details">
    <h5 class="my-3">${cityName}</h5>
    <div class="my-3">${weather}</div>
    <div class="display-4 my-4">
        <span>${temp}</span>
        <span>&deg;C</span>
    </div>
</div>`

    daytime?img.setAttribute('src',"img/day.svg"):img.setAttribute('src',"img/night.svg");
    icon.setAttribute('src', `icons/${weatherIcon}.svg`);
    details.innerHTML = html;
    card.classList.remove('d-none');

}
form.addEventListener('submit', e => {
    e.preventDefault();
    searchCity(form.city.value.trim());
    form.reset();
})


