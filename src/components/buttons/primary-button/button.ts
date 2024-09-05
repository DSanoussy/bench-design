// button.ts
class MyButton extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const button = document.createElement('button')
    button.classList.add('btn')
    button.textContent = this.getAttribute('label') || 'Default'
    shadow.appendChild(button)
  }
}

customElements.define('my-button', MyButton)
