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

        const flagValue = val[i].flag;
        const paragraphElement = document.getElementById('p');
        paragraphElement.textContent = flagValue;
      }
    }
  })
  .catch((err) => {
    console.log("Error: ", err);
  });