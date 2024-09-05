import './input';

describe('Input', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('input');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should be defined', () => {
    expect(customElements.get('input')).toBeDefined();
  });
});
