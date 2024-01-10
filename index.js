const buttonAdvice = document.getElementById("buttonAdvice");
const adviceNumber = document.getElementById("adviceNumber");
const textAdvice = document.getElementById("textAdvice");

buttonAdvice.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.innerText = data.slip.id;
      textAdvice.innerText = data.slip.advice;
    })
    .catch((error) => console.error("Error:", error));
});
