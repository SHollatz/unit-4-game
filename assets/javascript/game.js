
// set up global variables and initialize them
var numbers = [];
for (var i = 19; i <= 120; i++) {
    numbers.push(i);
}
console.log(numbers);
var xtalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var xtalVal = [];
var numWins = 0;
var numLosses = 0;
var compNum = numbers[Math.floor(Math.random() * numbers.length)];
var score = 0;
console.log("function: " + Math.floor(Math.random() * numbers.length));
console.log("compNum: " + compNum);

//display random number
$('#compNum').text(compNum);

console.log("xtalNumbers: " + xtalNumbers);

function initializer() {
    xtalVal = [];
    $('#score, compNum').empty();
    var compNum = numbers[Math.floor(Math.random() * numbers.length)];
    $('#compNum').text(compNum);
    score = 0;
    for (var i = 1; i <= 4; i++) {
        var num = xtalNumbers[Math.floor(Math.random() * (xtalNumbers.length - 1))];
        console.log("num: " + num);
        console.log("xtalNumbers[num]: " + xtalNumbers[num]);
        while (xtalVal.includes(xtalNumbers[num])) {
            num = xtalNumbers[Math.floor(Math.random() * (xtalNumbers.length - 1))];
            console.log("inside loop, num: " + num);
        }
        xtalVal.push(xtalNumbers[num]);
        console.log("xtalVal: " + xtalVal);
    }
}


function add(num) {
    score = score + num;
    $('#score').text(score);
    if (score == compNum) {
        numWins++;
        $('#wins').text(numWins);
        initializer();
    }
    if(score > compNum) {
        numLosses++;
        $('#losses').text(numLosses);
        initializer()
    }
}

initializer();

$('#xtal1').on('click', function () {
    console.log("xtalVal[0]: " + xtalVal[0]);
    add(xtalVal[0]);
});

$('#xtal2').on('click', function () {
    console.log("xtalVal[1]: " + xtalVal[1]);
    add(xtalVal[1]);
});

$('#xtal3').on('click', function () {
    console.log("xtalVal[2]: " + xtalVal[2]);
    add(xtalVal[2]);
});

$('#xtal4').on('click', function () {
    console.log("xtalVal[3]: " + xtalVal[3]);
    add(xtalVal[3]);
});

