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

        case 'false_url':
            container.innerHTML = 'URL is invalid';
    }
}

export function setPermalink(url) {
    let { protocol, host } = new URL(document.location);
    const current = `${protocol}//${host}`;
    console.log(current)
    url = current.toString() + '?url=' + url;
    url = new URL(url);
    console.log(url)
    url = encodeURI(url);
    const permalink = document.getElementById('permalink');
    permalink.innerText = url;
    permalink.href = url;
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