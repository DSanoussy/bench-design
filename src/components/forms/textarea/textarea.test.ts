import './textarea';

describe('Textarea', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('textarea');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should be defined', () => {
    expect(customElements.get('textarea')).toBeDefined();
  });
});
