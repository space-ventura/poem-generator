function generatePoem(event) {
  event.preventDefault();

new Typewriter("#poem", {
  strings: ["ce n'est pas un poème"],
  autoStart: true,
});

}



let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);