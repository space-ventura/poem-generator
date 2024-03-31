function generatePoem(event) {
  event.preventDefault();

new Typewriter("#poem", {
  strings: ["Let's generate a ceasefire!"],
  autoStart: true,
});

}



let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);