const sendGreeting = (message = 'Hello', userName = 'there'): void => {
  console.log(`${message}, ${userName}`);
};

sendGreeting();
sendGreeting('Good morning');
sendGreeting('Good afternoon', 'Jenny');
