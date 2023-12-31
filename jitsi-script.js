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
    configOverwrite: { 
        // Add configOverwrite to enable close detection
        enableClosePage: true,
    },
    interfaceConfigOverwrite: {
        // Add interfaceConfigOverwrite to customize UI
        TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
            'fodeviceselection', 'hangup', 'profile', 'info', 'chat', 'recording',
            'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
            'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
            'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
        ],
    },
};

const api = new JitsiMeetExternalAPI(domain, options);

// Event listener for meeting end
api.addListener('readyToClose', () => {
    // Redirect to your desired page when the meeting is closed
    window.location.href = 'https://arifulislamat.com';
});
