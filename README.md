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
- A new URL is generated with the encoded message as a query parameter.
- The user can copy and share the URL with a friend.

### 2. Viewing the Secret Message

- The recipient opens the shared URL in their browser.
- The app extracts the encoded message from the URL.
- The encoded message is decoded using `atob()`.
- The decoded message is displayed on the screen.

## How to Run the App

To use the application:

1. Visit this link: [Secret Message Sharing App.](https://secret-message-sharing-app-phi.vercel.app/)
2. Enter a message in the input field and click the Generate Secret URL button.
3. Copy the generated URL and share it with a friend.
4. When your friend opens the URL in their browser, the secret message will be displayed.

## Technologies Used

- **HTML:** For structuring the web page.
- **JavaScript:** For encoding/decoding messages and DOM manipulation.
- **Materalize CSS:** For a responsive and clean UI.

## Future Enhancements

1. Add a button to automatically copy the generated URL to the clipboard.
2. Improve the UI design by adding more animations and styles.
3. Add validation to handle incorrect or empty inputs more gracefully.
4. Implement password-protected encryption for additional security.

## Conclusion

This simple Secret Message Sharing App demonstrates how to use Base64 encoding/decoding, URL query parameters, and DOM manipulation in a practical project. It’s a fun and educational way to learn about web development and secure communication.
