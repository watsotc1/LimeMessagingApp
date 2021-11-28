<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/watsotc1/LimeMessagingApp">
    <img src="public/logo192.png" alt="Logo" width="192" height="192">
  </a>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

Lime is a web-based chat room service that provides users with end-to-end encryption for all messages between users. This is done using JavaScript and the Web Crypto API which is a native browser application programming interface. 

### What is End-to-End Encryption?
End-to-End Encryption is a communication system where only those who are communicating can read the messages being sent. Third-parties are unable to intercept messages without the cryptographic keys. Read more about End-to-End Encryption [here](https://www.preveil.com/blog/end-to-end-encryption/)!

<!-- ### Application Breakdown

#### Components

* `Chat.js`
* `EncryptedMessage.js`
* `EncryptedMessageInput.js`
* `KeyDriver.js`
* `Recipient.js`
* `Sender.js`

#### Library

* `chatClient.js`
* `decrypt.js`
* `deriveKey.js`
  * This script 
* `encrypt.js`
* `generateKeyPair.js`
  * This script handles the generation of the user's unique Key Pair, which includes both a public and private key. I chose the ECDH algorithm with the P-256 elliptic curve on the recommendation of Stream as it is well supported and the right balance between security and performance. 
* `setUser.js` -->


### Built With

* [Java Script](https://www.javascript.com/)
* [Stream](https://getstream.io/accounts/signup/)
* [Web Crypto](https://www.w3.org/TR/WebCryptoAPI/)
* [Yarn](https://yarnpkg.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

1. Clone the repo:
    ```
    git clone https://github.com/watsotc1/LimeMessagingApp.git
    ```
2. Update Stream Chat credentials in [src/lib/chatClient.js](https://github.com/watsotc1/LimeMessagingApp/blob/main/src/lib/chatClient.js). 
3. To install all dependencies, run the following within the root folder.
    ```
    yarn install
    ```
4. To deploy web application, run the following within the root folder.
    ```
    yarn start
    ```

