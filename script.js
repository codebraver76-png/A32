const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const greenBtn = document.getElementById("greenBtn");
const resetBtn = document.getElementById("resetBtn");

redBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});

blueBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
});

greenBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
});

resetBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "white";
});