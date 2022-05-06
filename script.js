function checkPolarity(event) {
    let polarityNumber = event.target.value;
    if (polarityNumber >= 0) {
        alert("That number is positive");
    } else {
        alert("That number is negative");
    }
}

function daysToAge(event) {
    let days = event.target.value;
    let years = Math.floor(days / 365);
    let remainder = (days - (years * 365))

    if (years == 1) {
        alert ("You would be " + years + " year old, and " + remainder + " days");
    } else {
        alert ("You would be " + years + " years old, and " + remainder + " days");
    }
}

function largestOfThree(event) {
    let threeNumbers = event.target.value;
    let threeArray = threeNumbers.split(" ");
    // have to cast the array values back into integers for the calculation to work
    for (let index = 0; index < threeArray.length; index++ ) {
        threeArray[index] = parseInt(threeArray[index]);
    }

    // using a loop to account flexibly for more than three numbers
    let largestNumber = 0;
    for (let index = 1; index < threeArray.length + 1; index++) {
        if (threeArray[index] > threeArray[largestNumber]) {
            largestNumber = index;
        }
    }
    alert ("The largest of those numbers is " + threeArray[largestNumber]);
}

function lastName(event) {
    pass;
}

function allNumbersPositive(event) {
    pass;
}