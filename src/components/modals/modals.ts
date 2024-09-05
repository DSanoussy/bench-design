class Modals extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.classList.add('modals');
    shadow.appendChild(wrapper);
  }
}

customElements.define('modals', Modals);
