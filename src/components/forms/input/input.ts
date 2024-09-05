class Input extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.classList.add('input');
    shadow.appendChild(wrapper);
  }
}

customElements.define('input', Input);
