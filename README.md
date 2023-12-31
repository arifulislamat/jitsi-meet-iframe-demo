# Jitsi Meet Integration Demo

This is a simple demo website showcasing the integration of Jitsi Meet video conferencing into a web application.

## Getting Started

### Prerequisites

1. **Jitsi Meet Server:**
   - Make sure you have a Jitsi Meet server instance set up and running. You can either use the public Jitsi Meet instance or set up your own server. Instructions for setting up your server can be found on the [official Jitsi GitHub repository](https://github.com/jitsi/jitsi-meet).

2. **Domain:**
   - If you are using your own server, make sure you have a domain pointing to your Jitsi Meet server.

### Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/arifulislamat/jitsi-meet-demo.git
    ```

2. Open the `index.html` file in your preferred text editor.

3. Locate the following section in the HTML file:

    ```html
    <!-- Jitsi Meet API script -->
    <script src="https://meet.firora.io/external_api.js"></script> 
    ```
4. Replace `'meet.firora.io'` with the domain of your Jitsi Meet instance.
   
5. Open the `jitsi-script.js` file and find the following line:

    ```javascript
    const domain = 'jitsi-jitsi-domain'; // Replace with your Jitsi Meet domain
    ```

6. Replace `'jitsi-jitsi-domain'` with the domain of your Jitsi Meet instance.

7. Save the changes.

8. Open the `index.html` file in a web browser to test the Jitsi Meet integration.

## Screenshot
<img width="1417" alt="image" src="https://github.com/arifulislamat/jitsi-meet-iframe-demo/assets/17812057/69c3a9dc-dc8a-4179-b008-19aa58b5c906">


## Customization

Feel free to customize the styles and configurations in the HTML, CSS, and JavaScript files according to your requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
