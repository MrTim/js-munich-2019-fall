let myTweets = document.getElementById("myTweets");
let newTweetInput = document.querySelector(".newTweet .newTweetInput");
let newTweetButton = document.querySelector(".newTweet .newTweetButton");
let counter = document.querySelector(".newTweet .counter");
let noTweets = document.getElementById("noTweets");

let MAX_LENGTH = 80;

function onInput() {
  let inputText = newTweetInput.value;
  let count = inputText.length;
  counter.textContent = Math.max(MAX_LENGTH - count, 0);

  if (count === 0) {
    newTweetButton.setAttribute("disabled", true);
  } else if (count > MAX_LENGTH) {
    counter.classList.add("error");
    newTweetButton.setAttribute("disabled", true);
  } else {
    counter.classList.remove("error");
    newTweetButton.removeAttribute("disabled");
  }
}

function onAddClick() {
  // Read input text:
  let inputText = newTweetInput.value;

  // Create new element with text:
  let newItem = document.createElement("li");
  let newContent = document.createTextNode(inputText);
  newItem.append(newContent);

  // Hide "no-tweets-yet" text:
  noTweets.classList.add("hidden");

  // Add new element to list:
  myTweets.appendChild(newItem);

  // Clear input:
  newTweetInput.value = '';
  onInput();
}

function onInputKeyDown(event) {
  if (event.key === "Enter") {
    newTweetButton.click()
  }
}

newTweetButton.addEventListener("click", onAddClick);
newTweetInput.addEventListener("input", onInput);
newTweetInput.addEventListener("keydown", onInputKeyDown);
onInput();
