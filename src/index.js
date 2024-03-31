function generatePoem(event) {
  event.preventDefault();

new Typewriter("#poem", {
  strings: ["Let's generate a ceasefire instead!"],
  autoStart: true,
});

}



let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);