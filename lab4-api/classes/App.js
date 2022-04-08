export default class App{
    constructor(API_KEY_WEATHER, API_KEY_MEAL){
        this.API_KEY_WEATHER = API_KEY_WEATHER;
        this.API_KEY_MEAL = API_KEY_MEAL;
        this.lat=0;
        this.long=0;
        this.temp=0;
        this.time=0;
        this.timeNow=0;
        this.getLocation();
        this.getTime();
    }

    getLocation(){
        console.log("getLocation");
        navigator.geolocation.getCurrentPosition(
            this.locationSuccess.bind(this),
            this.locationError.bind(this)
            )
    }

    getTime(){
        let time = new Date();
        this.timeNow=time.getHours();
        console.log(this.timeNow);
    }

    locationSuccess(location){//want krijgt parameter binnen (de locatie die gevonden wordt in getLocation)
        this.lat = location.coords.latitude;
        this.long = location.coords.longitude;
        this.getWeather();
    }

    locationError(err){
        console.log('LocationError')
    }

    getWeather(){
        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${this.lat}&lon=${this.long}&appid=${this.API_KEY_WEATHER}`;
        console.log(url);
        fetch(url).then(res => {//arrow syntax, verwerk res functie in array
            return res.json(); //zonder return krijgt die volgende then niets terug (als zonder akolades dan zou het ook werken)
        }).then( (json) => {
            console.log(json);
            this.temp = Math.round(json.main.temp);
            this.printWeather(json); //json of enkel wat je wil van json kan ook
        }).catch( err => { //als then niet werkt
            console.log(err);
        }).finally(() => { //laatste stap zoizo, kan bv ook refreshen zijn in browser, versturen, actie, ...
            console.log("finally done");
        }); 
    }

    printWeather(json){
        let summary = json.weather[0].description;
        console.log(this.temp);
        document.querySelector("h1").innerHTML = summary;
        document.querySelector("h2").innerHTML = this.temp + " °C";

        this.getMeal();


    }

    getMeal(){
        let url = `https://www.themealdb.com/api/json/v${this.API_KEY_MEAL}/${this.API_KEY_MEAL}/categories.php`;
        console.log(url);
        fetch(url).then(res => {
            return res.json();
        }).then( (json) => {
            console.log(json);
            this.printMeal(json);
        }).catch( err => {
            console.log(err);
        }).finally(() => {
            console.log("finally done");
        }); 
    }

    printMeal(json){
        let meal = 0;
        let mealPic; 
        
        console.log(meal);
    }
}