import './modals';

describe('Modals', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('modals');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should be defined', () => {
    expect(customElements.get('modals')).toBeDefined();
  });
});
