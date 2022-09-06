import React from "react";
import "./css/MapScreen.css";
import { Route, Link, useNavigate } from "react-router-dom";

export function Modal1({ closeModal1 }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Elephants",
      },
    });
  };
  return (
    <div class="modal" id="modalId">
      <div class="firstModal-content">
        <span class="closeBtn" id="closeBtn" onClick={() => closeModal1(false)}>
          &times;
        </span>
        <div class="modaltitle">
          <p>Elephants</p>
        </div>
        <div class="modaldescription">
          <p>Sample Description</p>
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openAnimalList}>
            See Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function Modal2({ closeModal2 }) {
  return (
    <div class="modal" id="modalId">
      <div class="firstModal-content">
        <button
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModal2(false)}
        >
          &times;
        </button>
        <p>Enclosure 2</p>
      </div>
    </div>
  );
}

export function Modal3({ closeModal3 }) {
  return (
    <div class="modal" id="modalId">
      <div class="firstModal-content">
        <button
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModal3(false)}
        >
          &times;
        </button>
        <p>Enclosure 3</p>
      </div>
    </div>
  );
}

export function Modal4({ closeModal4 }) {
  return (
    <div class="modal" id="modalId">
      <div class="firstModal-content">
        <button
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModal4(false)}
        >
          &times;
        </button>
        <p>Enclosure 4</p>
      </div>
    </div>
  );
}
