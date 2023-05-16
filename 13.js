function addNewElement(p1) {
  // let parentTag = document.querySelector("input").parentElement.children[2];
  // let parentTag = p1.parentElement.children[2];
  let parentTag = p1.nextElementSibling;

  let existingValue = parentTag.innerHTML;

  // let message = p1.previousElementSibling.value;
  let message = document.querySelector("#messageId").value;
  let date = new Date();
  let formatedTimestamp = `${date.getHours()}:${date.getMinutes()}`;

  let newValue = `<div
                      style="
                        font-size: 28px;
                        margin-top: 8px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <div>${message} <span class="badge text-bg-primary fs-6">${formatedTimestamp}</span> </div>
                      <input type="button" value="Delete" onclick="deleteTheMessage(this)" />
                    </div>`;

  parentTag.innerHTML = newValue + existingValue;

  // clear the input
  p1.previousElementSibling.value = "";
}

function deleteTheMessage(p1) {
  p1.parentElement.remove();
}
