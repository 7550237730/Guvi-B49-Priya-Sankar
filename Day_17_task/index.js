const apiUrl =  "https://restcountries.com/v3.1/all";

fetch(apiUrl)
.then((response) => {
 if(response.status === 200){
    return response.json();

 }
})
.then((val) => {
console.log(val);
for (var i = 0; i < val.length; i++) {
    if (val[i].name.common == "United States") {
        console.log(val[i].flag);
        console.log(val[i].capital);
        console.log(val[i].region);
        console.log(val[i].region);

        const capitalValue = val[i].capital;
        const capital = document.getElementById('usa_Capital');
        capital.textContent = capitalValue;

        const regionValue = val[i].region;
        const region = document.getElementById('usa_Region');
        region.textContent = regionValue;

        const codeValue = val[i].idd.root;
        const code = document.getElementById('usa_code');
        code.textContent = codeValue;

      var lat = -14.33333333;
      var long = -170.0;
      var urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3f87b34e2050eefbd7043bb85eed6e4e`;



      }
    }
  })
  .catch((err) => {
    console.log("Error: ", err);
  });