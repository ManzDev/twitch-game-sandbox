import "./GameEditor.js";

class GameBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        background: var(--bgcolor);
      }

      .container {
        display: grid;
        justify-items: center;
        padding: 0 2rem;
      }

      .text {
        font-family: Jost, sans-serif;
        font-size: 1.15rem;
        line-height: 1.3;
        color: #fff;
      }

      .instructions {
        margin: 0.5rem 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  setInstructions() {
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameBoard.styles}</style>
    <div class="container">
      <div class="instructions text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dolorem dignissimos distinctio amet! Omnis dolore eaque minus officiis, rem vitae fugiat accusantium! Fugiat odio voluptatum at incidunt repellendus ab cumque.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero tempore distinctio cum dolore! Eos sint nihil itaque! Eos architecto, ipsum quisquam, quidem aut odio ab quae id tempore placeat ut!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aut iure quis. Nihil eligendi ipsa veniam magnam id quasi quis mollitia unde? Magnam ut ex, alias vel at minus soluta.</p>
      </div>
      <game-editor></game-editor>
      <footer class="text">
        <p>Desarrollado por ManzDev, bla bla bla bla bla...</p>
      </footer>
    </div>`;
  }
}

customElements.define("game-board", GameBoard);
