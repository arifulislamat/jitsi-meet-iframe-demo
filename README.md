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
    git clone https://github.com/your-username/jitsi-meet-demo.git
    ```

2. Open the `index.html` file in your preferred text editor.

3. Locate the following section in the HTML file:

    ```html
    <!-- Your custom script to initialize Jitsi Meet -->
    <script src="your-script.js"></script>
    ```

4. Open the `your-script.js` file and find the following line:

    ```javascript
    const domain = 'your-jitsi-domain'; // Replace with your Jitsi Meet domain
    ```

5. Replace `'your-jitsi-domain'` with the domain of your Jitsi Meet instance.

6. Save the changes.

7. Open the `index.html` file in a web browser to test the Jitsi Meet integration.

## Customization

Feel free to customize the styles and configurations in the HTML, CSS, and JavaScript files according to your requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
