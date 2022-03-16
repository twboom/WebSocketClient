import { updateStatus, writeSeverMessage } from "./dom.js";

function onOpen(evt) {
    console.log("Connected to server");
}

function onClose(evt) {
    console.log("Disconnected from server");
}

function onMessage(evt) {
    console.log('Message from server:', evt.data);
    writeSeverMessage(evt.data);
}

export function connect(url) {
    updateStatus('loading');
    const socket = new WebSocket(url);

    socket.addEventListener('open', onOpen);
    socket.addEventListener('close', onClose);
    socket.addEventListener('message', onMessage);

    updateStatus('connected', url);

    return socket
}