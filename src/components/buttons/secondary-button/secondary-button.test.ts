import './secondary-button';

describe('Secondary-button', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('secondary-button');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should be defined', () => {
    expect(customElements.get('secondary-button')).toBeDefined();
  });
});
