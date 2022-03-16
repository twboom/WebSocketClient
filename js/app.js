import { setPermalink, updateStatus, writeClientMessage } from "./dom.js";
import { connect } from "./ws.js";

const input = document.getElementById('input');

function sendMessage(evt) {
    if (evt.key === 'Enter') {
        if (input.value == '') { return };
        socket.send(input.value);
        writeClientMessage(input.value);
        input.value = '';
    };
};

function checkURL(url) {
    try {
        url = new URL(url);
    } catch (error) {
        console.log('Cannot parse url');
        return false
    }
    if (url.protocol != 'ws:' && url.protocol != 'wss:') {
        console.log('Invalid protocol');
        return false;
    } else if (url.host == '') {
        console.log('Invalid host')
        return false;
    }
    return true;
}

function main() {
    updateStatus('not_connected')
    let url = (new URL(document.URL)).searchParams.get('url');
    if (url == null) { url = prompt('Enter your server url:') };

    if (!checkURL(url)) {
        updateStatus('invalid_url');
        alert('Invalid url');
        location.reload();
        return;
    };
    url = new URL(url);
    setPermalink(url)
    const socket = connect(url);

    input.addEventListener('keypress', sendMessage);

    return socket
};

const socket = main();