// let billInput = document.getElementById("bill");

// billInput.addEventListener("input", () => {
//     document.getElementById("reset_button").style.backgroundColor = 'rgb(159, 232, 223)';
// });

// var fivePercent = document.getElementById("five_percent");

// var tenPercent = document.getElementById("ten_percent");

// var fifteenPercent = document.getElementById("fifteen_percent");

// var twentyFivePercent = document.getElementById("twentyfive_percent");

// var fiftyPercent = document.getElementById("fifty_percent");

// var customAmount = document.getElementById("custom_amount");

// var resetButton = document.getElementById("reset_button");

// customAmount.addEventListener("keydown", function (event) {
//     if (event.code === "Enter") {
//         calculateCustom(event);
//     }
// });

// function calculateFive(event) {
//     event.preventDefault();

//     let numbOfPeople = document.getElementById("numb_of_people").value;

//     document.getElementById("five_percent").style.backgroundColor = 'rgb(159, 232, 223)';

//     document.getElementById("five_percent").style.color = 'rgb(1, 70, 75)';

//     if (numbOfPeople == 0) {
//         document.getElementById("validation").innerHTML = "Can't be zero";
//     } else {
//         document.getElementById("validation").innerHTML = "";

//         let billInput = document.getElementById("bill").value;

//         let tip = billInput * .05;

//         let total = parseInt(tip) + parseInt(billInput);

//         let divisible = total / numbOfPeople;

//         document.getElementById("tip_value").innerHTML = tip.toFixed(2);

//         document.getElementById("total_value").innerHTML = divisible.toFixed(2);
//     }
// }

// function calculateTen(event) {
//     event.preventDefault();

//     let numbOfPeople = document.getElementById("numb_of_people").value;

//     if (numbOfPeople == 0) {
//         document.getElementById("validation").innerHTML = "Can't be zero";
//     } else {
//         document.getElementById("ten_percent").style.backgroundColor = 'rgb(159, 232, 223)';

//         document.getElementById("ten_percent").style.color = 'rgb(1, 70, 75)';

//         document.getElementById("validation").innerHTML = "";

//         let billInput = document.getElementById("bill").value;

//         let tip = billInput * .10;

//         let total = parseInt(tip) + parseInt(billInput);

//         let divisible = total / numbOfPeople;

//         document.getElementById("tip_value").innerHTML = tip.toFixed(2);

//         document.getElementById("total_value").innerHTML = divisible.toFixed(2);
//     }
// }

// function calculateFifteen(event) {
//     event.preventDefault();

//     let numbOfPeople = document.getElementById("numb_of_people").value;

//     if (numbOfPeople == 0) {
//         document.getElementById("validation").innerHTML = "Can't be zero";
//     } else {
//         document.getElementById("fifteen_percent").style.backgroundColor = 'rgb(159, 232, 223)';

//         document.getElementById("fifteen_percent").style.color = 'rgb(1, 70, 75)';

//         document.getElementById("validation").innerHTML = "";

//         let billInput = document.getElementById("bill").value;

//         let tip = billInput * .15;

//         let total = parseInt(tip) + parseInt(billInput);

//         let divisible = total / numbOfPeople;

//         document.getElementById("tip_value").innerHTML = tip.toFixed(2);

//         document.getElementById("total_value").innerHTML = divisible.toFixed(2);
//     }
// }

// function calculateTwentyFive(event) {
//     event.preventDefault();

//     let numbOfPeople = document.getElementById("numb_of_people").value;

//     if (numbOfPeople == 0) {
//         document.getElementById("validation").innerHTML = "Can't be zero";
//     } else {
//         document.getElementById("twentyfive_percent").style.backgroundColor = 'rgb(159, 232, 223)';

//         document.getElementById("twentyfive_percent").style.color = 'rgb(1, 70, 75)';

//         document.getElementById("validation").innerHTML = "";

//         let billInput = document.getElementById("bill").value;

//         let tip = billInput * .25;

//         let total = parseInt(tip) + parseInt(billInput);

//         let divisible = total / numbOfPeople;

//         document.getElementById("tip_value").innerHTML = tip.toFixed(2);

//         document.getElementById("total_value").innerHTML = divisible.toFixed(2);
//     }
// }

// function calculateFifty(event) {
//     event.preventDefault();

//     let numbOfPeople = document.getElementById("numb_of_people").value;

//     if (numbOfPeople == 0) {
//         document.getElementById("validation").innerHTML = "Can't be zero";
//     } else {
//         document.getElementById("fifty_percent").style.backgroundColor = 'rgb(159, 232, 223)';

//         document.getElementById("fifty_percent").style.color = 'rgb(1, 70, 75)';

//         document.getElementById("validation").innerHTML = "";

//         let billInput = document.getElementById("bill").value;

//         let tip = billInput * .50;

//         let total = parseInt(tip) + parseInt(billInput);

//         let divisible = total / numbOfPeople;

//         document.getElementById("tip_value").innerHTML = tip.toFixed(2);

//         document.getElementById("total_value").innerHTML = divisible.toFixed(2);
//     }
// }

// function calculateCustom(event) {
//     event.preventDefault();

//     let custom = document.getElementById("custom_amount").value;

//     let numbOfPeople = document.getElementById("numb_of_people").value;

//     if (numbOfPeople == 0) {
//         document.getElementById("validation").innerHTML = "Can't be zero";
//     } else {
//         document.getElementById("validation").innerHTML = "";

//         let billInput = document.getElementById("bill").value;

//         let tip = (custom / 100) * billInput;

//         let total = parseInt(tip) + parseInt(billInput);

//         let divisible = total / numbOfPeople;

//         document.getElementById("tip_value").innerHTML = tip.toFixed(2);

//         document.getElementById("total_value").innerHTML = divisible.toFixed(2);
//     }}

// function resetValues(event) {
//     event.preventDefault();

//     document.getElementById("bill").value = "";

//     document.getElementById("custom_amount").value = "";

//     document.getElementById("numb_of_people").value = "";

//     document.getElementById("reset_button").style.backgroundColor = "rgb(13, 104, 109)";

//     document.getElementById("validation").innerHTML = "";

//     document.getElementById("tip_value").innerHTML = "0.00";

//     document.getElementById("total_value").innerHTML = "0.00";

//     document.querySelectorAll("#five_percent, #ten_percent, #fifteen_percent, #twentyfive_percent, #fifty_percent").style.backgroundColor = "rgb(0, 71, 76)";
// }

// fivePercent.addEventListener("click", calculateFive);

// tenPercent.addEventListener("click", calculateTen);

// fifteenPercent.addEventListener("click", calculateFifteen);

// twentyFivePercent.addEventListener("click", calculateTwentyFive);

// fiftyPercent.addEventListener("click", calculateFifty);

// resetButton.addEventListener("click", resetValues);

