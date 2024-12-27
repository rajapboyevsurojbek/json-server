const BASE_URL = "http://localhost:3000";
const wrapperEL = document.querySelector(".control");
const formEL = document.querySelector(".form");
const inputEL = document.querySelector(".input");
const input1EL = document.querySelector(".input1");
const btnEL = document.querySelector(".btn");

async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  response.json().then((res) => {
    createPost(res);
  });
}

window.onload = () => {
  fetchPosts();
};
function createPost(data) {
  data.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("card");
    console.log(post);

    postEl.innerHTML = ` 
       <h2>${post.title}</h2> 
       <p>${post.author}</p> 
       `;
    wrapperEL.appendChild(postEl);
    console.log(postEl);
  });
}
formEL.addEventListener("submit", (e) => {
  e.preventDefault();
  let newPost = {
    title: inputEL.value,
    author: input1EL.value,
  };
  console.log(newPost);

  fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
``;
