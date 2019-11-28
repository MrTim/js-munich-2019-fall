let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let a = document.getElementById("answer");

function b1Click(event) {
  a.textContent = "That's great 😊";
}

function b2Click(event) {
  a.textContent = "Oh that sucks 😥";
}

b1.addEventListener("click", b1Click);
b2.addEventListener("click", b2Click);