class Textarea extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.classList.add('textarea');
    shadow.appendChild(wrapper);
  }
}

customElements.define('textarea', Textarea);
