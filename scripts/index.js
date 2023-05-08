const postsContainer = document.getElementById("container");

const createPost = (post) => {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  const postTitle = document.createElement("h2");
  postTitle.textContent = post.title;
  const postDesc = document.createElement("p");
  postDesc.textContent = post.body;
  postDiv.appendChild(postTitle);
  postDiv.appendChild(postDesc);
  postsContainer.appendChild(postDiv);
};
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((element) => {
      createPost(element);
    });
  });
