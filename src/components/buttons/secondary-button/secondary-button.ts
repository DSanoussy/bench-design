class Secondary-button extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.classList.add('secondary-button');
    shadow.appendChild(wrapper);
  }
}

customElements.define('secondary-button', Secondary-button);
