function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    let postLayout = document.getElementById('post-layout')
    userPost = data
    let html = '';
    userPost.forEach(e => {
      // console.log(element)
      html += `
      <div class="col-md-4 mb-3">
      <div class="card h-100 bg-danger text-white">
      <div class="card-body">
      <h5 class="post-title mb-4 text-center text-info">${e.id}</h5>
      <h3 class="post-title mb-4" id="">${e.title}</h3>
      <p class="post-body fs-5">${e.body}</p>
      </div>
      <div class="d-flex justify-content-between mx-2 mb-2">
      <button class="btn btn-primary" onclick="deletePost( ${e.id} )">Delete</button>

      <button class="btn btn-success" onclick="updatePost(${e.id})">Update</button>
      </div>
      </div>
      </div>`
      postLayout.innerHTML = html;
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
  // console.log('Post Title', pTitle)
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: pTitle,
      body: pBody,
      userId: 001
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    // console.log('post', data);
    // console.log(userPost)
    userPost.push(data);
    console.log(userPost)
    let postLayout = document.getElementById('post-layout');
    let html = '';
    userPost.forEach(e => {
      html += `
      <div class="col-md-4 mb-3">
        <div class="card h-100 bg-danger text-white">
          <div class="card-body">
            <h5 class="post-title mb-4 text-center text-info">${e.id}</h5>
          <h3 class="post-title mb-4" id="">${e.title}</h3>
          <p class="post-body fs-5">${e.body}</p>
          <div class="d-flex justify-content-between mx-1">
            <button class="btn btn-primary" onclick="deletePost( ${e.id} )">Delete</button>
            <button class="btn btn-success" onclick="updatePost(${e.id})">Update</button>
            </div>
            </div>
        </div>
      </div>`
      postLayout.innerHTML = html
    })
    alert('Congratulations! You have successfully created your post.')

  })
}


/* Update function
The function below is written to allow the updating of the data. */

function updatePost(postId) {
  console.log(postId)
  let pTitle = postTitle.value;
  let pBody = postBody.value;
  fetch('https://jsonplaceholder.typicode.com/posts/${postId}', {
    method: 'PUT',
    body: JSON.stringify({
      id: postId,
      title: pTitle,
      body: pBody,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let myPostTitle = document.querySelectorAll('.post-title');
    let myPostBody = document.querySelectorAll('.post-body');
    myPostTitle.forEach((title, index) => {
      if(index + 1 === postId) {
        title.textContent = data.title
      }
  })
  myPostBody.forEach((body, index) => {
    if (index + 1 === postId) {
      body.textContent = data.body
    }
  })
})
}


/* Delete function
The function below is written to allow deleting the data. */

function deletePost(postId) {
  console.log(postId)
  fetch('https://jsonplaceholder.typicode.com/posts/${ postId }', {
    method: 'DELETE',
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    console.log(userPost)
    userPost = userPost.filter(post => post.id !== postId)
    console.log(userPost)
    console.log('post', data)
    let postLayout = document.getElementById('post-layout');
    let html = '';
    userPost.forEach(e => {
      html += `
      <div class="col-md-4 mb-3">
        <div class="card h-100 bg-danger text-white">
          <div class="card-body">
            <h5 class="post-title mb-4 text-center text-info">${e.id}</h5>
          <h3 class="post-title mb-4" id="">${e.title}</h3>
          <p class="post-body fs-5">${e.body}</p>
          <div class="d-flex justify-content-between mx-1">
            <button class="btn btn-primary" onclick="deletePost( ${e.id} )">Delete</button>
            <button class="btn btn-success" onclick="updatePost(${e.id})">Update</button>
            </div>
            </div>
        </div>
      </div>` 

    })
  })
}