export default class CallbackChat {
  constructor(container) {
    this.container = container;
    this.isOpen = false;
    
    this.render();
    this.init();
  }

  render() {
    this.container.innerHTML = `
      <div class="callback-chat">
        <button class="chat-button">
          <svg class="chat-icon" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            <path d="M7 9h10v2H7zm0-3h10v2H7z"/>
          </svg>
        </button>
        <div class="chat-form">
          <button class="close-btn">×</button>
          <h3>Напишите нам</h3>
          <textarea placeholder="Ваше сообщение"></textarea>
          <button type="submit">Отправить</button>
        </div>
      </div>
    `;
  }

  init() {
    this.chatButton = this.container.querySelector('.chat-button');
    this.chatForm = this.container.querySelector('.chat-form');
    this.closeButton = this.container.querySelector('.close-btn');

    this.chatButton.addEventListener('click', () => this.open());
    this.closeButton.addEventListener('click', () => this.close());
  }

  open() {
    this.isOpen = true;
    this.chatButton.classList.add('hidden');
    this.chatForm.classList.add('visible');
  }

  close() {
    this.isOpen = false;
    this.chatForm.classList.remove('visible');
    this.chatButton.classList.remove('hidden');
  }
}
