import { css } from "lit-element";

export default css`
  .modal {
    display: none;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }

  .modal.open {
    display: flex;
  }

  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #888;
    width: 90%;
    max-width: 600px;
    max-height: 80%;
    overflow-y: auto;
  }

  .close-btn {
    background-color: #ff4081;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    float: right;
  }

  .close-btn:hover,
  .close-btn:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
