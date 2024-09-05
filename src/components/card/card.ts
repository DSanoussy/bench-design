class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.classList.add('card');
    shadow.appendChild(wrapper);
  }
}

customElements.define('card', Card);
