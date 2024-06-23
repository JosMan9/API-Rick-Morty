import { LitElement, html, nothing } from "lit-element";
import styles from "./home-page-styles";

class HomePage extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      data: { type: Array },
      character: { type: Object },
      favorites: { type: Array },
      modalOpen: { type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.data = null;
    this.character = {};
    this.favorites = [];
    this.modalOpen = false;
  }

  firstUpdated() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      this.data = data.results;
      console.log("data", data);
      this.requestUpdate();
    } catch (error) {
      console.log(error);
    }
  }

  handleToggleFavorite(event) {
    const obj = event.detail.character;
    if (!obj.favorite) {
      let newArray = this.favorites.filter(
        (objeto) => objeto.name !== obj.name
      );
      this.favorites = newArray;
    } else {
      this.favorites.push(obj);
    }

    this.requestUpdate();
    console.log("hhh", this.favorites);
  }

  openModal() {
    this.modalOpen = true;
    this.requestUpdate();
  }

  closeModal() {
    this.modalOpen = false;
    this.requestUpdate();
  }

  async getCharacter(id) {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/" + id
    );
    const data = await response.json();
    console.log("data single", data);
    this.character.name = data.name;
    this.character.img = data.image;
    this.character.specie = data.species;
    this.character.gender = data.gender;

    this.requestUpdate();
  }

  searchCharacterFavorite(item) {
    const band = this.favorites.find(objeto => objeto.name === item.name) === null ? false: true
    this.requestUpdate();
    return band
  }

  render() {
    return html`
      <h1>Rick and Morty Characters</h1>
      <div class="cards-container">
        ${this.data
          ? this.data.map(
              (item) => html`
                <character-card
                  .character=${item}
                  .favorite=${this.searchCharacterFavorite(item)}
                  @character-event=${this.handleToggleFavorite}
                ></character-card>
              `
            )
          : nothing}
      </div>
      
      <button class="favorite-button" @click="${this.openModal}">Show Favorites</button>
      <favorite-characters .favorites=${this.favorites}
      .isOpen=${this.modalOpen}
      >
      </favorite-characters>
    `;
  }
}

customElements.define("home-page", HomePage);
