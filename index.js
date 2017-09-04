var showScreen = document.getElementById('display');

function addToScreen(x) {
  showScreen.value  += x;
  if (x === "c") {
    showScreen.value = "";
  }

}

function answer() {
  x = showScreen.value;
  x = eval(x);
  showScreen.value=x;
}

function power() {
  x = showScreen.value;
  x = eval(x * x);
  showScreen.value = x;
}

function backspace() {
  var num = showScreen.value;
  var len = num.length - 1;
  var newNum = num.substring(0, len);
  showScreen.value = newNum;
}
