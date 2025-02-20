const display = document.querySelector("#display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function caculateResult() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    alert("Invalid Expression");
    clearDisplay();
  }
}
