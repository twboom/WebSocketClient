export function updateStatus(status, data) {
    const container = document.getElementById('status');
    switch (status) {
        case 'loading':
            container.innerHTML = 'Loading...';
            break;
        
        case 'connected':
            const url = `<code>${data}</code>`;
            container.innerHTML = 'Connected to ' + url;
            break;
        
        case 'disconnected':
            container.innerHTML = 'Disconnected';
            break;
        
        case 'not_connected':
            container.innerHTML = 'Not connected';
    }
}

function createMessage(message, parentId) {
    const container = document.createElement('div');
    const element = document.createElement('p');
    element.classList.add('message');
    element.innerText = message;
    container.appendChild(element);
    document.getElementById(parentId).appendChild(container);
    container.scrollIntoView()
    return container;
};

export function writeSeverMessage(message) {
    createMessage(message, 'output');
};

export function writeClientMessage(message) {
    createMessage(message, 'messages');
}