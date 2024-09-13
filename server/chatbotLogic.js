function getReply(message) {
    const lowerCaseMessage = message.toLowerCase();
  
    if (lowerCaseMessage.includes('hello')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerCaseMessage.includes('help')) {
      return 'Sure, I am here to help you. Please tell me more.';
    } else if (lowerCaseMessage.includes('weather')) {
      return 'The current weather is sunny with a chance of code!';
    } else {
      return 'I am not sure I understand. Can you please rephrase?';
    }
  }
  
  module.exports = { getReply };
  