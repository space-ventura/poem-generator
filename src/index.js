function displayPoem(response) {
  event.preventDefault();
new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
});

}

function generatePoem(event) {
  let userPrompt= document.querySelector("#user-prompt")
let apiKey = "0ocfta5c0e4602a2a90c32a9a4bbf5b9";
let prompt = `Generate a poem about ${userPrompt.value}`;
let context = "You are a poetry expert. Generate a short poem in basic HTML and separate each line with a <br />";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(displayPoem);
}



let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);