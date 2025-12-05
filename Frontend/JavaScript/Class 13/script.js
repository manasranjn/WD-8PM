//! Callback Hell:-
// ()=>{
//     ()=>{
//         ()=>{
//             ()=>{
//                 ()=>{
//                     ()=>{

//                     }
//                 }
//             }
//         }
//     }
// }

function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("User posts fetched");
        callback([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments for post fetched");
        callback([{ commentId: 101, text: "Nice post!" }]);
    }, 1000);
}

// Nested Callbacks (Callback Hell)
// getUser(1, (user) => {
//     getUserPosts(user.id, (posts) => {
//         getPostComments(posts[0].postId, (comments) => {
//             console.log("Comments: ", comments);
//         });
//     });
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log(response);
//         response.json().then((result) => {
//             console.log(result);
//         })
//     })
//     .catch((reject) => {
//         console.log(reject);
//     })

const box = document.getElementById("box")

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((result) => {
        console.log(result);
        result.map((todo) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = todo.title;
            box.appendChild(paragraph);
        });
    })
    .catch((err) => {
        console.log(err);
    });