// show the value
function cal(num) {
    var input = document.getElementById('cal-screen');
    input.value += num;

}


// calculate the value
function calculate() {

    var input = document.getElementById('cal-screen');
    var output = document.getElementById("cal-answer")
    output.value = eval(input.value);

}


// clear screen
function clear_screen() {
    var input = document.getElementById('cal-screen');
    var output = document.getElementById('cal-answer');
    input.value = "";
    output.value = "";


}

// del value
function del() {
    var value = document.getElementById("cal-screen").value;
    document.getElementById("cal-screen").value = value.substr(0, value.length - 1);
}





