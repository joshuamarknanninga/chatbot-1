document.getElementById('send').addEventListener('click', sendMessage);
document.getElementById('message').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const messageField = document.getElementById('message');
  const message = messageField.value.trim();

  if (message !== '') {
    displayMessage('You', message);
    fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
      .then(response => response.json())
      .then(data => {
        displayMessage('Bot', data.reply);
      })
      .catch(error => console.error('Error:', error));

    messageField.value = '';
  }
}

function displayMessage(sender, message) {
  const outputDiv = document.getElementById('output');
  const messageParagraph = document.createElement('p');
  messageParagraph.innerHTML = `<strong>${sender}:</strong> ${message}`;
  outputDiv.appendChild(messageParagraph);
  outputDiv.scrollTop = outputDiv.scrollHeight;
}
