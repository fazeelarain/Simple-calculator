var input = document.getElementById("cal-screen");
var output = document.getElementById("cal-answer");

// show the value
function cal(num) {
    var flag = false
    var lastChar = input.value[input.value.length-1];
    var opt = ["+" , "-" ,"*" ,"/" ,"%"];
    for(var i = 0; i < opt.length; i++){
    }
    if(opt.indexOf(lastChar) !== -1 && opt.indexOf(num) !== -1){
            del()
            flag = true
            input.value += num
       }
       if(flag == false){
        input.value += num;
       }
    }




// calculate the value
function calculate() {
  output.value = eval(input.value);
}

// clear screen
function clear_screen() {
  input.value = "";
  output.value = "";
}

// del value
function del() {
  var value = input.value;
  input.value = value.substr(
    0,
    value.length - 1
  );
}



