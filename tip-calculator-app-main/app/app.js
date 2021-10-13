var billInput = document.getElementById("bill");
billInput.addEventListener("input", () => {
    document.getElementById("reset_button").style.backgroundColor = 'rgb(159, 232, 223)';
});
function changeStyles() {
    var all = document.getElementsByClassName('butt');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = 'rgb(0, 71, 76)';
        all[i].style.color = 'white';
    }
}
function calcTip(value) {
    var numbOfPeople = document.getElementById("numb_of_people").value;
    if (numbOfPeople == 0) {
        changeStyles();
        document.getElementById("validation").innerHTML = "Can't be zero";
        document.getElementById(`${value}`).style.backgroundColor = 'rgb(159, 232, 223';
        document.getElementById(`${value}`).style.color = 'rgb(1, 70, 75)';
    } else {
        changeStyles();
        document.getElementById("validation").innerHTML = "";
        let billInputVal = document.getElementById("bill").value;
        tip = billInputVal * value;
        let total = parseInt(tip) + parseInt(billInputVal);
        let divisible = total / numbOfPeople;
        document.getElementById("tip_value").innerHTML = tip.toFixed(2);
        document.getElementById("total_value").innerHTML = divisible.toFixed(2);
        document.getElementById(`${value}`).style.backgroundColor = 'rgb(159, 232, 223';
        document.getElementById(`${value}`).style.color = 'rgb(1, 70, 75)';
    }
}
document.getElementById("custom_amount").addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        let value = document.getElementById("custom_amount").value / 100;
        calcTip(value);
    };
});
function reset() {
    document.getElementById("reset_button").style.backgroundColor = 'rgb(13, 104, 109)';
    document.getElementById("tip_value").innerHTML = "0.00";
    document.getElementById("total_value").innerHTML = "0.00";
    billInput.value = "";
    document.getElementById("numb_of_people").value = "";
    document.getElementById("custom_amount").value = "";
    document.getElementById("validation").innerHTML = "";
    changeStyles();
}