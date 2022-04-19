var input = document.querySelector("#input");
var output = document.querySelector("#output");
var btn = document.querySelector("#submit");
var baseUrl = "https://api.funtranslations.com/translate/yoda.json";

 function clickHandler() {
     var url = baseUrl + "/?text=" + input.value;

     fetch(url)
         .then((response) => response.json())
        .then((data) => (output.innerHTML = data.contents.translated));
 }

btn.addEventListener("click", clickHandler);