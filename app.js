const http=new easyHTTP;
document.getElementById('get').addEventListener('click', http.get('https://jsonplaceholder.typicode.com/posts').then(data=>{
    let output = '<h2 class="mb-4">Posts</h2>';
    data.forEach(function(post){
      output += `
        <div class="card card-body mb-3">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
}));
const data = {
    name: 'Rakesh Raj',
    username: 'rrlinus',
    email: 'rrlinus5@gmail.com'
  }


  document.getElementById('post').addEventListener('click', http.post('https://jsonplaceholder.typicode.com/posts',data).then(data=>{
    let output = '<h2 class="mb-4">Posts</h2>';
      output += `
        <div class="card card-body mb-3">
          <h3>Name:${data.name}</h3>
          <p>usernae:${data.username}</p>
          <p>uemail:${data.email}</p>
        </div>
      `;
    document.getElementById('output').innerHTML = output;
}));
// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

  document.getElementById('delete').addEventListener('click', http.post('https://jsonplaceholder.typicode.com/posts',data).then(data=>{
    document.getElementById('output').innerHTML =data;
}));
