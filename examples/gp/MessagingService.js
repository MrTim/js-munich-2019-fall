
/**
 * Retrieve all posts from the server
 * 
 * @param {callback function that handles an array of posts} completionHandler 
 */
function requestPosts(completionHandler) {
    let posts = [
        {author: "Anna", message: "Hello!"},
        {author: "Harshita", message: "Hi!"},
        {author: "Ivan", message: "Servus!"},
        {author: "Abdullah", message: "Hallo!"},
        {author: "Oliver", message: "Hey!"}
    ]

    completionHandler(posts);
}

/**
 * Send a post object to the server
 * 
 * @param {the post to send to the server} post 
 * @param {callback function that handles a boolean succes value} completionHandler 
 */
function sendPost(post, completionHandler) {
    console.log("Sending post to server: " + post);
    completionHandler(true);
}