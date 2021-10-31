

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postLayout = document.getElementById('post-layout')
        let html = '';
        data.forEach(e => {
            // console.log(element)
            html += `
            <div class="col-md-4 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <h6 class="post-title mb-4 text-center text-info">${e.id}</h6>
                    <h5 class="post-title mb-4">${e.title}</h5>
                    <p class="post-body">${e.body}</p>
                </div>
            </div>
            </div>`
        postLayout.innerHTML =html;
        });
    })
}
getPosts();


let postTitle = document.getElementById('post-title');
let postBody = document.getElementById('post-body');
let postForm = document.querySelector('#post-form')

postForm.addEventListener('submit', createPost)

 function createPost(e) {
    e.preventDefault();
    let pTitle = postTitle.value;
    let pBody = postBody.value;
    console.log('Post Title', pTitle)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: pTitle,
            body: pBody,
            userId: 5
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('post', data);
        console.log(userPost)
        userPost.push(data);
        console.log(userPost)
    alert('Congratulations! You have successfully created your posts.')
        
    })
}

function deletePost(postId) {
    console.log(postId)

}