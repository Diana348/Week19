const buttonSubmit = document.querySelector(".button");

buttonSubmit.addEventListener("click", () => {
  const contentTitle = document.getElementById("title-value").value;
  const contentBody = document.getElementById("body-value").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: contentTitle,
      body: contentBody,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      createPost(data.title, data.body);
    })
    .catch((error) => {
      console.log(error);
    });
});

const createPost = (title, text) => {
  const postsContainer = document.getElementById("container");
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  const postTitle = document.createElement("h2");
  postTitle.textContent = title;
  const postDesc = document.createElement("p");
  postDesc.textContent = text;
  postDiv.appendChild(postTitle);
  postDiv.appendChild(postDesc);
  postsContainer.appendChild(postDiv);
};
