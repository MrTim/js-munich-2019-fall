
let messageInput = document.getElementById("messageInput");
let postContainer = document.getElementById("postContainer");

let userName = "Anonymous";

login();
requestPosts(postsAvailable);

function login() {
  let loginName = prompt("Please enter your username:");
  if(loginName.length > 0) {
    userName = loginName;
  }
}

function makePost() {
  let message = messageInput.value;
  addPost(userName, message);
  sendPost({author: userName, message: message}, () => console.log('Done!'));
}

function postsAvailable(posts) {
  for(index in posts) {
    let post = posts[index]
    addPost(post.author, post.message);
  }
}