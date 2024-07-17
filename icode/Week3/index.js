let apiKey = "438ad8e2efc8td06cfeo7a401294e7b4";
let city = "Sdney"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;

function displayTemperature(response) {

    let temperature = Math.round(response.data.temperature.current);
    let city = response.data.city;

    let headingElement = document.querySelector("#heading");
    headingElement.innerHTML = `It is ${temperature} degrees in ${city}`
}

axios.get(apiUrl).then(displayTemperature);
