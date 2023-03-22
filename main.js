document.getElementById("button").addEventListener("click", convertToFahrenheit)

function convertToFahrenheit(){
    let temperature = document.getElementById("celsius").value
    temperature = (temperature * 9/5) + 32
    document.getElementById("fahrenheit").value = temperature

}