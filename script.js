const {hash} = window.location;
const message = atob(hash.replace("#", ""));
// comnsole.log(message);

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  let message = document.querySelector("#message").value;

  let encryptedMessage = btoa(message);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = linkInput.value = `${window.location}#${encryptedMessage}`;
  linkInput.select();
});
