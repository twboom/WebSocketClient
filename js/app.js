import { updateStatus, writeClientMessage } from "./dom.js";
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


function main() {
    updateStatus('not_connected')
    // const url = prompt('Enter the server url');
    const url = "ws://localhost:8080";
    const socket = connect(url);

    input.addEventListener('keypress', sendMessage);

    return socket
};

const socket = main();