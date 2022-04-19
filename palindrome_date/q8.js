//Palindrome Birthday
var bday = document.querySelector("#dob");
var btn = document.querySelector("#submit");
var output = document.querySelector("#output");
var count = 0;

function isPalindrome(dob) {
    var i = 0;
    while(i <= 3) {
        if(dob[i] === dob[7-i]){
            count = 0;
            i++;
        } else {
            count = 1;
            break;
        }
    }
    return count;
}

function isValid(d, m, y){
    if(m < 1 || m > 12){
        return false;
    } 
    if(d < 1 || d >31){
        return false;
    }

    if(m === 2){
        if(isLeap(y)){
            return (d < 29);
        } else {
            return (d < 28);
        }
    }

    if(m === 4 || m === 6 || m === 9 || m === 11) {
        return (d < 30);
    }

    return true;
}
function closestLargePalindrome(date_sum) {
    var yr, month, day, mm, yy, dd, large = 1, lPDate;
    while(large === 1){
        yr = date_sum.split("");
        yy = Number(yr[0] + yr[1] + yr[2] + yr[3]);

        month = yr[3] + yr [2];
        mm = Number(month);

        day = yr[1] + yr[0];
        dd = Number(day);
        if(isValid(dd, mm, yy)){
            lPDate = yr[0] + yr[1] + yr[2] + yr[3] + "-" +month + "-" + day;
            console.log(lPDate);
            large = 0;
        } else {
            yy++;
            date_sum = yy.toString();
        }
    }
    return lPDate;
}

function closestSmallPalindrome(date_sum) {
    var yr, month, day, mm, yy, dd, small = 1, sPDate;

    while(small === 1){
        yr = date_sum.split("");
        yy = Number(yr[0] + yr[1] + yr[2] + yr[3]);

        month = yr[3] + yr [2];
        mm = Number(month);

        day = yr[1] + yr[0];
        dd = Number(day);
        if(isValid(dd, mm, yy)){
            sPDate = yr[0] + yr[1] + yr[2] + yr[3] + "-" +month + "-" + day;
            console.log(sPDate);
            small = 0;
        } else {
            yy--;
            date_sum = yy.toString();
        }
    }
    return sPDate;
}

function closestPalindrome(date_sum){
    var sP, lP, sPDiff, lPdiff, date, sPDate, lPDate;
    date = new Date(bday.value);


    sPDate = closestSmallPalindrome(date_sum[0]);
    lPDate = closestLargePalindrome(date_sum[0]);

    sP = new Date(sPDate);
    lP = new Date(lPDate);

    sPDiff = (date.getTime() - sP.getTime()) / (1000 * 60 * 60 * 24);
    lPdiff = (lP.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

    console.log(sPDiff);
    console.log(lPdiff);
    
    if(sPDiff > lPdiff){
        return lPDate;
    } else {
        return sPDate;
    }
}

function getResult(){
    var date_sum = bday.value.split("-");
    var dob, result, newPNum;

    dob = date_sum[0] + date_sum[1] + date_sum[2];
    console.log(dob);
    
    result = isPalindrome(dob);
   
    if(result === 0 ){
        output.innerHTML = "Your birthday is a palindrome!!!";
    } else {
        newPNum = closestPalindrome(date_sum);
        output.innerHTML = "Your birthday is not a palindrome!!! <br> The closest Palindrome date is " + newPNum;
    }
}

btn.addEventListener("click", getResult);