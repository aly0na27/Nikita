let counter = 0;

const counterValue = document.getElementById("input_text");
const incrementCounter = document.getElementById("plus");
incrementCounter.addEventListener("click", () => {
    counter++;
    counterValue.innerHTML = counter;
})