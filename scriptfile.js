let input = document.querySelector("#inputTextArea");
let output = document.querySelector("#outputTextArea");
let generate = document.querySelector("#click");
generate.addEventListener("click", e => {
  generate.style.boxShadow = "none";
  let Input;
  let dup = [];
  let xml;
  try {
    Input = JSON.parse(input.value);
  } catch (error) {
    alert("entered data is not a valid json");
  }
  if (Input) {
    xml = Input.map((obj, i, arr) => {
      dup.push(obj.id);
      let { id, username, video_name, action } = obj;
      return `<div class="root" data-id=${id}>
            <span class="username">${username}</span>
            <span class="video_name">${video_name}</span>
            <span class="additional_details">
              <span class="type">${action}</span>
            </span>
          </div>
          `;
    });
  }
  let set = new Set(dup);
  if (dup.length != set.size) {
    alert("The JSON is having some duplicate");
  } else {
    output.innerHTML = xml;
  }
});
