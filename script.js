document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let message = document.querySelector("#message").value;

  let encryptedMessage = btoa(message);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = linkInput.value = `${window.location}#${encryptedMessage}`;
  linkInput.select();
});
