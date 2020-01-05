const baseURL = 'https://twitter-gp.firebaseio.com';

/**
 * Retrieve all posts from the server
 *
 * @param {Function} completionHandler callback function that handles an array of posts
 */
function requestPosts(completionHandler) {
    fetch(`${baseURL}/posts.json`)
        .then((response) => response.json())
        .then((posts) => completionHandler(posts))
        .catch(() => console.log("Booo"));
}

/**
 * Send a post object to the server
 *
 * @param {Object} post the post to send to the server
 * @param {Function} completionHandler callback function that handles a boolean succes value
 */
function sendPost(post, completionHandler) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    };
    fetch(`${baseURL}/posts.json`, params)
        .then((response) => response.json())
        .then((data) => completionHandler(data))
        .catch(() => console.log("Booo"));
}

/**
 * Delete post object with specific id from the server
 *
 * @param {String} postId
 * @param {Function} completionHandler callback function that handles a boolean succes value
 */
function deletePost(postId, completionHandler) {
    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(`${baseURL}/posts/${postId}.json`, params)
        .then((response) => response.json())
        .then((data) => completionHandler(data))
        .catch(() => console.log("Booo"));
}
