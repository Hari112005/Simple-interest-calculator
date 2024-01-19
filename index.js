function calculate() {
  console.log('hello');
  let result = document.getElementById("result");
  let p = document.getElementById('principle').value;
  let t = document.getElementById('Time').value;
  let r = document.getElementById('interest').value;
  result.innerHTML = ("₹ " + ((p * t * r) / 100) + "/-");

}
