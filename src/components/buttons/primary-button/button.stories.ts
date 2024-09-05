import './button'

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
}

export const Primary = () => {
  const button = document.createElement('my-button')
  button.setAttribute('label', 'Primary Button')
  return button
}

export const Secondary = () => {
  const button = document.createElement('my-button')
  button.setAttribute('label', 'Secondary Button')
  button.style.backgroundColor = 'gray'
  return button
}
