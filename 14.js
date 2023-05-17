async function makeAjaxCall() {
  let postTag = document.querySelector("#postid");
  let postid = postTag.value;
  let url = `https://jsonplaceholder.typicode.com/posts/${postid}`;

  // 1. AJAX CALL
  let result = await fetch(url);

  // 2. GET THE JSON DATA
  let data = await result.json();

  console.log(data);

  // 3. PRESENT THE DATA TO UI
  let parentTag = document.querySelector("#parent");
  let newElement = `
                <h1>Userid: ${data.userId}</h1>
                <h1>${data.title}</h1>
                <p style="font-size:21px">${data.body}</p>
                `;
  parentTag.innerHTML = newElement;
}
