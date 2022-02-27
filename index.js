console.log("loaded")

var Greet = ['Hello!', 'Hola!', 'Howdy?', 'Hey!', 'Hi!', "Heyo!"];

window.onload = function () {

    document.getElementById('inptxt').value = '';
    let i = Math.floor(Math.random() * 6);
    document.getElementById("resp").innerText = Greet[i] + " I am a simple chatbot.";

}
function time(){
    let date = new Date();
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let suffix = date.getHours() >= 12 ? "PM" : "AM";

    return hour + ":" + minute + " " + suffix;
}

function date(){
    let date = new Date();
    let montharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dayarr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
    let dateno = date.getDate();
    let year = date.getFullYear();

    return dayarr[date.getDay()] + ', ' + dateno + ' ' + montharr[date.getMonth()] + ' ' + year;

}

async function weather(){

    let APIkey = '97226bb51b3fc6ee844773be4bcff222';
    let IPurl = 'http://ip-api.com/json/';

    let response = await fetch(IPurl);
    let data = await response.json();
    let city = data.city;
    
    let weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid='+ APIkey;

    response = await fetch(weatherURL);
    data = await response.json();
    
    let cond = data.weather[0].main;
    let temp = data.main.temp;
    let hum = data.main.humidity;

    document.getElementById("resp").innerText = 'The current weather condition in ' + city + ' is ' + cond + ' with a temperature of ' 
    + temp + ' °C, and a humidity of ' + hum + '%';
}

function clicked() {
    let response = document.getElementById("resp");
    let input = document.getElementById("inptxt");

    if(input.value == 'hello'){
        let i = Math.floor(Math.random() * 6);
        response.innerText = Greet[i];
    }
    else if(input.value == 'time'){
        response.innerText = "The time right now is " + time();
    }
    else if(input.value == 'date'){
        response.innerText = "Today's date is " + date();
    }
    else if(input.value == "weather"){
        weather()
    }
    input.value = '';
}

function QClick(){
    document.getElementById('modal').classList.add('show');
}

function CClick(){
    document.getElementById('modal').classList.remove('show');
}
