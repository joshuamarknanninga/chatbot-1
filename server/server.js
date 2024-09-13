const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const chatbotLogic = require('./chatbotLogic');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint for chatbot messages
app.post('/api/message', (req, res) => {
  const userMessage = req.body.message;
  const botReply = chatbotLogic.getReply(userMessage);

  // Save conversation to the database
  db.saveConversation({ user: userMessage, bot: botReply });

  res.json({ reply: botReply });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

