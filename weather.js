// let Key="bc77905d334df99814e13c26a6abed71"
// let url="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"



let input=document.getElementById("location");
let btn=document.getElementById("btn");
let temperature=document.getElementById("temperature");
let humidity=document.getElementById("humidity");
let description=document.getElementById("description");


console.log(location)
console.log(btn)
console.log(temperature)
console.log(humidity)

let checkWeatherdetails=async(city)=>{
    let Key="bc77905d334df99814e13c26a6abed71"
}
let url="https://api.openweathermap.org/data/2.5/weather?q={city}&appid={ key}"

let weather1=await fetch
(url)
let weather2=await
weather1.json()

console.log(weather2)


//*accessing the weather through the data present inside the main 
console.log(weather2.main.temperature)


console.log(weather2.main.humidity)

console.log(weather2.weather[0].main)

description.innerHTML`${
    console.log(weather2.weather[0].main)}`

let celsius=Math.round
(weather2.main.temperature-273)
temperature.innerHTML=`$ {celsius}
<sup>0</sup> C`

humidity.innerHTML`${
    (weather2.main.humidity)}`

console.log(description)

switch((weather2.weather[0].main)){
    case:'Haze'
    Image.src='./'
    break;
    case:'Snow'
    Image.src='./'
    break;
    case:'Cloudy'
    Image.src='./'
    break;
    case:'Clear'
    Image.src='./'
    break;
    case:`Rainy`
    Image.src='./'
    break;

    default:
        Image.src='./'
        break

}
btn.addEventListener("click",()=>{
    checkWeatherdetails(input.value)
})



