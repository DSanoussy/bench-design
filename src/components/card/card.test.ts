import './card';

describe('Card', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('card');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should be defined', () => {
    expect(customElements.get('card')).toBeDefined();
  });
});
