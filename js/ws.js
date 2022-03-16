import { updateStatus, writeSeverMessage } from "./dom.js";

function onOpen(evt) {
    console.log("Connected to server");
    updateStatus('connected', evt.currentTarget.url);
}

function onClose(evt) {
    console.log("Disconnected from server");
}

function onError(evt) {
    console.log('Error:', evt.data);
    updateStatus('disconnected');
}

function onMessage(evt) {
    console.log('Message from server:', evt.data);
    writeSeverMessage(evt.data);
}

export function connect(url) {
    updateStatus('loading');
    const socket = new WebSocket(url);

    socket.addEventListener('open', onOpen);
    socket.addEventListener('error', onError)
    socket.addEventListener('close', onClose);
    socket.addEventListener('message', onMessage);

    return socket
}