function appendValue(value) {
  document.querySelector("#display").value += value;
}

function clearDisplay() {
  document.querySelector("#display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(document.querySelector("#display").value);
    document.querySelector("#display").value = result;
  } catch (error) {
    alert("Invalid Expression");
    clearDisplay();
  }
}
