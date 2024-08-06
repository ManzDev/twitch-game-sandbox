class GameEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --margin-numbers: 50px;

        display: grid;
        background: #bbb;
        background-image: linear-gradient(
          to right,
          #666 0 var(--margin-numbers),
          transparent var(--margin-numbers)
        );
        width: 90%;
        height: 400px;
        border-radius: 10px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameEditor.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("game-editor", GameEditor);
