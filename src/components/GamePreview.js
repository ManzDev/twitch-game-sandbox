class GamePreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        background: #1f5768;
        height: 100%;

        @media (width <= 1200px) {
          height: 400px;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GamePreview.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("game-preview", GamePreview);
