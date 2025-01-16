# Secret Message Sharing App

This project is a simple web-based Secret Message Sharing App built using HTML, JavaScript, Materialize CSS, and JavaScript functions `btoa()` and `atob()` for encoding and decoding messages. The app allows users to create an encrypted message, generate a URL containing the message, and share it with a friend. When the recipient opens the URL, the secret message will be decrypted and displayed on their screen.

### Features

1. **Message Encryption:** Converts a plain text message into a Base64-encoded string>
2. **URL Generation:** Embeds the encrypted messsage in a shareable URL.
3. **Message Decryption:** Decodes the Base64-encoded message from the URL and displays it.
4. **DOM Manipulation:** Uses JavaScript to dynamically update the DOM to show the secret message.
5. **Responsive UI:** Built using Materialize CSS to ensure a clean and responsive user interface.

## How It Works

### 1. Creating a Secret Message

- The user types a message in the input box.
  - The message is encoded using `btoa()`.
