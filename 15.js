async function getAllThePosts() {
  let url = "https://jsonplaceholder.typicode.com/posts/";
  let result = await fetch(url);
  let list = await result.json();

  for (let item of list) {
    let parentTag = document.querySelector("#parent");
    let existingElement = parentTag.innerHTML;
    let newElement = `
                <div class="alert alert-primary">
                <h1>${item.title}</h1>
                <p style="font-size:21px">${item.body}</p>
                </div>
                `;
    parentTag.innerHTML = newElement + existingElement;
  }
}
