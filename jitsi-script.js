const domain = 'meet.firora.io'; // Replace with your Jitsi Meet domain
const options = {
    roomName: 'your-room-name', // You can generate a unique room name dynamically
    width: '100%',
    height: '95%',
    userInfo: {
        email: 'ariful@firora.com',
        displayName: 'Ariful Islam'
    },
    lang: 'en',
    parentNode: document.querySelector('#jitsi-container'),
};

const api = new JitsiMeetExternalAPI(domain, options);
