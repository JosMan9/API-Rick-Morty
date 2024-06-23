import { css } from "lit-element";

export default css`
  h1 {
    font-size: 1.2rem;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
  }

  .favorite-button {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #ff4081;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    padding: 15px 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
    z-index: 1000;
  }

  .favorite-button:hover {
    background-color: #ff1a67;
    transform: scale(1.1);
  }
`;
