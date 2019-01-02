class Responsive {
  
  constructor(iframe, buttons, inputURL, buttonStart, buttonContainer) {
    this._iframe = document.querySelector(iframe);
    this._buttons = document.querySelectorAll(buttons);
    this._inputURL = document.querySelector(inputURL);
    this._buttonStart = document.querySelector(buttonStart);
    this._buttonContainer = document.querySelector(buttonContainer);
    this.eventButtonResize();
    this.eventButtonUrl();
  }

  get iframe() {
    return this._iframe;
  }

  get buttonContainer() {
    return this._buttonContainer;
  }

  get buttons() {
    return this._buttons;
  }

  get inputURL() {
    return this._inputURL;
  }

  get buttonStart() {
    return this._buttonStart;
  }

  _buttonResize(e) {
    let dimensions = e.target.textContent.split('x');
    this.resizeIframe(...dimensions);
  }

  eventButtonResize() {
    this.buttons.forEach(e => {
      e.addEventListener('click', this._buttonResize.bind(this));
    });
  }

  resizeIframe(width, height) {
    this.iframe.style = `width: ${width}px; height: ${height}px;`;
  }

  eventButtonUrl() {
    this.buttonStart.addEventListener('click', this.getUtlInput.bind(this));
  }

  getUtlInput() {
    this.setUtlIframe(this.inputURL.value);
    this.IsIframeReady();
  }

  scrolling() {
    let buttonOffetTop = this.buttonContainer.offsetTop;
    window.scrollTo({
      top: buttonOffetTop,
      behavior: 'smooth'
    })
  }

  IsIframeReady() {
    this.iframe.addEventListener('load', this.scrolling.bind(this));
  }

  setUtlIframe(url) {
    this.iframe.src = url;
    this.iframe.parentNode.style = `height: 100vh;`;
  }

}