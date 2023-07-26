const apiUrl =  "https://restcountries.com/v3.1/all";

fetch(apiUrl)
.then((response) => {
 if(response.status === 200){
    return response.json();

 }
})
.then((val) => {
console.log(val);
for (var i = 0; i < countriesDetails.length; i++) {
    console.log
}
})