function checkPolarity(event) {
    let polarityNumber = event.target.value;
    if (polarityNumber >= 0) {
        alert("That number is positive");
    } else {
        alert("That number is negative");
    }
}

function daysToAge(event){
    let days = event.target.value;
    let years = Math.floor(days / 365);
    let remainder = (days - (years * 365))

    if (years == 1) {
        alert ("You would be " + years + " year old, and " + remainder + " days");
    } else {
        alert ("You would be " + years + " years old, and " + remainder + " days");
    }
}

function largestOfThree(event){
    pass;
}

function lastName(event){
    pass;
}

function allNumbersPositive(event){
    pass;
}