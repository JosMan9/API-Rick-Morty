import { css } from "lit-element";

export default css`
  .favorite-button {
    background-color: #ffcc00;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s;
  }

  .favorite-button:hover {
    background-color: #ffb700;
  }

  .favorite-button .fas {
    margin-right: 8px;
  }

  .favorite-button.active {
    background-color: #ff9933;
  }

  .favorite-btn {
    margin-top: 15px;
      padding: 10px 20px;
      background-color: #ff4081;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease;
  }

  .favorite-btn:hover {
    background-color: #ff1a67;
  }


  .favorite-btn.remove {
    background-color: #ff1a67;
  }

  .favorite-btn.remove:hover {
    background-color: #ff4081;
  }
  
  

  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    text-align: center;
    margin: 10px;
  }

  .character-image {
    width: 100%;
    height: auto;
  }

  .card-content {
    padding: 20px;
  }

  .character-name {
    font-size: 24px;
    margin: 10px 0;
    color: #333;
  }

  .character-species,
  .character-gender {
    font-size: 18px;
    margin: 5px;
    color: #666;
  }
`;
