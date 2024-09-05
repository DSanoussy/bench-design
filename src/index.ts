class MyButton extends HTMLElement {
    constructor() {
      super()
      const shadow = this.attachShadow({ mode: 'open' })
      const button = document.createElement('button')
      button.textContent = 'Click me'
      shadow.appendChild(button)
    }
  }
  
  customElements.define('my-button', MyButton)  