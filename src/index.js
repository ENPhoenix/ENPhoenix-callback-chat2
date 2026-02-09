import './css/style.css';
import CallbackChat from './js/CallbackChat';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('callback-chat-container');
  if (container) {
    new CallbackChat(container);
  }
});
