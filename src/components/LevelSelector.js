class LevelSelector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --bgcolor: #8ec691;
      }

      .container {
        display: flex;
        border-radius: 5px;
        font-family: Jost, sans-serif;
        color: #fff;
        padding: 0.2rem 1rem;

        & div {
          background: var(--bgcolor);
          padding: 0.25rem 1rem;
        }

        & button {
          appearance: none;
          border: 0;
          color: currentColor;
          background: var(--bgcolor);
          padding: 0.25rem 0.5rem;

          &:first-child {
            border-right: 1px solid #fff5;
            border-radius: 5px 0 0 5px;
          }
          &:last-child {
            border-left: 1px solid #fff5;
            border-radius: 0 5px 5px 0;
          }
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${LevelSelector.styles}</style>
    <div class="container">
      <button class="prev">◄</button>
      <div>Nivel <span class="current">1</span> de <span class="max">20</span></div>
      <button class="next">►</button>
    </div>`;
  }
}

customElements.define("level-selector", LevelSelector);
