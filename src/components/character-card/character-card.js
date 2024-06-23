import { LitElement, html } from "lit-element";
import styles from "./character-card-styles";

class CharacterCard extends LitElement {
  static get styles() {
    return [styles];
  }
  static get properties() {
    return {
      /*name: { type: String, attribute: "name", reflect: true },
      image: {
        type: String,
        attribute: "img",
        reflect: true,
      },
      specie: {
        type: String,
        attribute: "specie",
        reflect: true,
      },
      gender: {
        type: String,
        attribute: "gender",
        reflect: true,
      },
      isFavorite: {
        attribute: "favorite",
        type: Boolean
      },*/
      character: {
        type: Object,
        attribute: "character",
        reflect: true,
      },
      onToggleFavorite: {
        type: Function,
        attribute: false,
      },
      isFavorite: {
        attribute: "favorite",
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.name = "";
    this.specie = "";
    this.img = "";
    this.gender = "";
    this.isFavorite = false;
    this.onToggleFavorite = () => {};
  }

  handleToggleFavorite() {
    this.isFavorite = !this.isFavorite;
    const character = {
      name: this.character.name,
      image: this.character.image,
      species: this.character.species,
      gender: this.character.gender,
      favorite: this.isFavorite,
    };

    const eventData = {
      detail: { character: character },
      bubbles: true,
      composed: true
    };
    this.dispatchEvent(new CustomEvent("character-event", eventData));
    this.requestUpdate();
  }

  firstUpdated() {
    if (this.character.name == null) {
      this.isFavorite = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <img
          class="character-image"
          src=${this.character.image}
          alt=${this.name}
        />

        <div class="card-content">
          <h2 class="character-name">${this.character.name}</h2>
          <p class="character-species">${this.character.species}</p>
          <p class="character-gender">${this.character.gender}</p>

          <button
            class="favorite-btn ${this.isFavorite ? "remove" : ""}"
            @click="${this.handleToggleFavorite}"
          >
            ${this.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("character-card", CharacterCard);
