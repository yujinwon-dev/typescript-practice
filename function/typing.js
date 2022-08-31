function sendGreeting(message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    console.log("".concat(message, ", ").concat(userName));
}
sendGreeting();
sendGreeting('Good morning');
sendGreeting('Good afternoon', 'Jenny');
