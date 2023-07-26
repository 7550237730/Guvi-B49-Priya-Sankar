  //Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  //Define HTTP method and URL
  var method = "GET";
  var url = "https://restcountries.com/v3.1/all";

  //Open the request
  xhr.open(method, url);

  xhr.onload = function () {
    if (xhr.status === 200) {
      //Request was successful
      console.log(xhr.responseText);
      var countriesDetails = JSON.parse(xhr.responseText);
    for (var i = 0; i < countriesDetails.length; i++) {
        // console.log(countriesDetails[i].name.common);
        // console.log(countriesDetails[i].region);
        // console.log(countriesDetails[i].subregion);
        // console.log(countriesDetails[i].population);
        if(countriesDetails[i].name.official('United States of America')){
            document.getElementById('usa_Capital').innerHTML = countriesDetails[i];

        }
    
        

      }
    } else {
      //Request failed
      console.log("Request failed", xhr.status);
    }
  };

  //send the request
  xhr.send();