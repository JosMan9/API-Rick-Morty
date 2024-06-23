import { LitElement, html } from "lit-element";
import styles from "./favorite-characters-styles";

class FavoriteCharacters extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      favorites: { type: Array, attribute: "favorites" },
      isOpen: { type: Boolean, attribute: "isOpen", reflect: true}
    }
    
  }

  constructor() {
    super();
    this.isOpen = false;
    this.favorites = [];
  }

  closeModal() {
    this.isOpen = false;
    this.requestUpdate();

    location.reload();
  }


  handleToggleFavorite(event) {
    const obj = event.detail.character;
    if (!obj.favorite) {
      let newArray = this.favorites.filter(
        (objeto) => objeto.name !== obj.name
      );
      this.favorites = newArray;
    } else {
      this.favorites = [...this.favorites, character];
    }

    this.requestUpdate();
  }

  render() {
    return html`
      <div class="modal ${this.isOpen ? "open" : ""}">
        <div class="modal-content">
          <span class="close-btn" @click="${this.closeModal}">&times;</span>
          <h2>Favorite Characters</h2>
          <div id="favoriteList">
            ${this.favorites.map(
              (character) => html`
                <character-card
                  .character=${character}
                  favorite=${this.favorites.find(
                    (objeto) => objeto.name === character.name
                  ) === null
                    ? false
                    : true}
                  @character-event=${this.handleToggleFavorite}
                ></character-card>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("favorite-characters", FavoriteCharacters);
