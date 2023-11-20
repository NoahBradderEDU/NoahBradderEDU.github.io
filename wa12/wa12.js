let jokeSection = document.querySelector("js-quote-text");
let generateBtn = document.querySelector("js-new-quote");

let API ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function acquireJoke() {
   
    jokeSection.classList.remove("content-fade");
    
    fetch(api)
      .then((info) => info.json())
      .then((item) => {
        jokeSection.textContent = `${item.joke}`;
        
        jokeSection.classList.add("content-fade");
      });
  }

  generateBtn.addEventListener("click", acquireJoke);