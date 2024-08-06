import "./GameBoard.js";
import "./GamePreview.js";
import "./LevelSelector.js";

class GameSandbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --bgcolor: #43a047;

        display: grid;
        background: var(--bgcolor);
      }

      .container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (width <= 1200px) {
          grid-template-columns: 1fr;
          grid-template-rows: min-content 1fr;

          game-preview {
            order: -1;
          }
        }
      }

      .sandbox-code {
        display: grid;
        grid-template-rows: min-content 1fr;

        & header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;

          @media (width <= 640px) {
            flex-direction: column;
            align-items: center;
          }

          & h1 {
            margin: 0;
            font-family: Jost, sans-serif;
            color: #fff;
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
    <style>${GameSandbox.styles}</style>
    <div class="container">
      <div class="sandbox-code">
        <header>
          <h1>TITLE GAME</h1>
          <level-selector></level-selector>
        </header>
        <game-board></game-board>
      </div>
      <game-preview></game-preview>
    </div>`;
  }
}

customElements.define("game-sandbox", GameSandbox);
