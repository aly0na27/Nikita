var counter;

if (!localStorage.getItem("counter")) {
    localStorage.setItem("counter", (0).toString());
    // console.log(9);
} else {
  counter = parseInt(localStorage.getItem("counter"));
}
const counterValue = document.getElementById("input_text");
const incrementCounter = document.getElementById("plus");
incrementCounter.addEventListener("click", () => {
    counter++;
    counterValue.innerHTML = counter;
})
localStorage.setItem("counter", counter.toString());