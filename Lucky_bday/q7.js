//Lucky Birthday

var lno = document.querySelector("#lno");
var btn = document.querySelector("#submit");
var result = document.querySelector("#result");
var bday = document.querySelector("#bday");

function getResult() {
    var date_sum = bday.value.split("-");
    var dob, lucky_number, date = 0;

    dob = date_sum[0] + date_sum[1] + date_sum[2];
    dob = Number(dob);
    console.log(dob);
    
    while(dob >=1 ){
        date += dob%10;
        dob = Math.floor( dob/10);
    }

    lucky_number = Number(lno.value);
    
    if(date % lucky_number === 0){
        result.innerHTML = "You are Lucky!!!";
    } else {
        result.innerHTML = "You are not Lucky!!!";
    }
}

btn.addEventListener("click", getResult);