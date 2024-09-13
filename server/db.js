const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatbot', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conversationSchema = new mongoose.Schema({
  user: String,
  bot: String,
  timestamp: { type: Date, default: Date.now }
});

const Conversation = mongoose.model('Conversation', conversationSchema);

function saveConversation(conversation) {
  const newConversation = new Conversation(conversation);
  newConversation.save(err => {
    if (err) {
      console.error('Error saving conversation:', err);
    }
  });
}

module.exports = { saveConversation };
