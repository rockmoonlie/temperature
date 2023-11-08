const apiKey = '923f8681e79e50c5cc3f1ff0a93a998d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const ecrireLeNom = document.getElementById('country');
const rechercheClick = document.getElementById('rechercher');
const lePays = document.getElementById('lePays');
const temperature = document.getElementById('degrees');
const leTemps = document.getElementById('temps');

rechercheClick.addEventListener('click', () => {
    const leLieu = ecrireLeNom.value;
    if (leLieu) {
        fetchWeather(leLieu);
    }
});

function fetchWeather(leLieu) {
    const url = `${apiUrl}?q=${leLieu}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            lePays.textContent = data.name;
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            leTemps.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Erreur dans la récupération des données', error);
        });
}
