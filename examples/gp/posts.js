function addPost(author, message) {
    if(author.length == 0 || message.length == 0) {
      return;
    }

    let divElement = document.createElement("div");
    divElement.className = "message";

    addAuthorNodeToDiv(divElement, author);
    addMessageTextNodeToDiv(divElement, message);
    addDeleteButtonToDiv(divElement);

    postContainer.appendChild(divElement);

    messageInput.value = "";
  }

  function addAuthorNodeToDiv(divElement, author) {
    let bElement = document.createElement("b");
    bElement.textContent = author + ": ";
    divElement.appendChild(bElement);
  }

  function addMessageTextNodeToDiv(divElement, message) {
    let paragraphElement = document.createElement("p");
    paragraphElement.textContent = message;
    divElement.appendChild(paragraphElement);
  }

  function addDeleteButtonToDiv(divElement) {
    let buttonElement = document.createElement("button");

    buttonElement.textContent = "Delete";

    buttonElement.addEventListener("click", deletePost);

    divElement.appendChild(buttonElement);
  }

  function deletePost() {
    let divElement = this.parentNode;
    divElement.parentNode.removeChild(divElement);
  }