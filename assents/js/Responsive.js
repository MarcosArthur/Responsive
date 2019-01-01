class Responsive {
  constructor(iframe, buttons, inputURL, buttonStart) {
    this._iframe = document.querySelector(iframe);
    this._buttons = document.querySelectorAll(buttons);
    this._inputURL = document.querySelector(inputURL);
    this._buttonStart = document.querySelector(buttonStart);
    this.eventButtonResize();
    this.eventButtonUrl();
  }

  get iframe() {
    return this._iframe;
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
    this.resizeIframe(dimensions);
  }

  eventButtonResize() {
    this.buttons.forEach(e => {
      e.addEventListener('click', this._buttonResize.bind(this));
    });
  }

  resizeIframe(dimensions) {
    this.iframe.style = `width: ${dimensions[0]}px; height: ${dimensions[1]}px;`;
  }

  eventButtonUrl() {
    this.buttonStart.addEventListener('click', this.getUtlInput.bind(this));
  }

  getUtlInput() {
    this.setUtlIframe(this.inputURL.value);
  }

  setUtlIframe(url) {
    this.iframe.src = url;
  }

}