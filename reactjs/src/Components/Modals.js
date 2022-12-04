import React from "react";
import "./css/MapScreen.css";
import { Route, Link, useNavigate } from "react-router-dom";
const elephantEnclosureImage = require("./images/elephantenclosure.jpg");
const hyenaEnclosureImage = require("./images/hyenaenclosure.jpg");
const apexPredatorsEnclosureImage = require("./images/apexpredatorsenclosure.jpg");
const aviaryEnclosureImage = require("./images/aviaryenclosure.jpg");
const savannaEnclosureImage = require("./images/savannaenclosure.jpg");
const endemicEnclosureImage = require("./images/endemicenclosure.jpg");
const outReptileEnclosureImage = require("./images/outreptileenclosure.jpg");
const inReptileEnclosureImage = require("./images/inreptileenclosure.jpg");
const primatesEnclosureImage = require("./images/primatesenclosure.jpg");
const butterflyEnclosureImage = require("./images/butterflyenclosure.jpg");
const botanicalEnclosureImage = require("./images/botanicalenclosure.jpg");

export function ElephantModal({ closeModalElephant }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Elephant",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Elephant");
  };
  return (
    <div class="elephantModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalElephant(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Elephant</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={elephantEnclosureImage}
            alt="elephants"
          />
        </div>
        <br /> <br />
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function HippopotamusModal({ closeModalHippopotamus }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Hippopotamus",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Hippopotamus");
  };
  return (
    <div class="hippopotamusModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalHippopotamus(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Hippopotamus</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={elephantEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function AviaryModal({ closeModalAviary }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Aviary",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Aviary");
  };
  return (
    <div class="aviaryModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalAviary(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Aviary</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={aviaryEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function HyenaModal({ closeModalHyena }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Hyena",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Hyena");
  };
  return (
    <div class="hyenaModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalHyena(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Hyena</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={hyenaEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function SavannaModal({ closeModalSavanna }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Savanna",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Savanna");
  };
  return (
    <div class="savannaModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalSavanna(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Savanna</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={savannaEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function ApexModal({ closeModalApex }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Apex Predators",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Apex Predators");
  };
  return (
    <div class="apexModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalApex(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Apex Predators</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={apexPredatorsEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function EndemicModal({ closeModalEndemic }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Philippine Endemic",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Philippine Endemic");
  };
  return (
    <div class="endemicModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalEndemic(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Philippine Endemic</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={endemicEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function ReptileModal({ closeModalReptile }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Outdoor Reptile",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Outdoor Reptiles");
  };
  return (
    <div class="reptileModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalReptile(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Outdoor Reptiles</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function MuseumModal({ closeModalMuseum }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Outdoor Reptile",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Outdoor Reptile");
  };
  return (
    <div class="museumModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalMuseum(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Museum</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          />
        </div>
      </div>
    </div>
  );
}

export function InReptileModal({ closeModalInReptile }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Indoor Reptiles",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Indoor Reptiles");
  };
  return (
    <div class="inreptileModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalInReptile(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Indoor Reptiles</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={inReptileEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function LagoonModal({ closeModalLagoon }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Lagoon",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Lagoon");
  };
  return (
    <div class="lagoonModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalLagoon(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Lagoon</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={elephantEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function Lagoon2Modal({ closeModalLagoon2 }) {
  return (
    <div class="lagoon2Modal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalLagoon2(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Lagoon</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={elephantEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function IslandModal({ closeModalIsland }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Center Island",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Center Island");
  };
  return (
    <div class="islandModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalIsland(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Center Island</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={elephantEnclosureImage}
            alt="elephants"
          />
        </div>
      </div>
    </div>
  );
}

export function PrimatesModal({ closeModalPrimates }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Primates",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Primates");
  };
  return (
    <div class="primatesModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalPrimates(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Primates</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={primatesEnclosureImage}
            alt="elephants"
          />
        </div>
        <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div>
      </div>
    </div>
  );
}

export function ButterflyModal({ closeModalButterfly }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Butterfly Garden",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Butterfly Garden");
  };
  return (
    <div class="butterflyModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalButterfly(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Butterfly Garden</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={butterflyEnclosureImage}
            alt="elephants"
          />
        </div>
        {/* <div class="seeAnimalsBtnDiv">
          <button class="seeAnimalsBtn" onClick={openReactNative}>
            View Animals
          </button>
        </div> */}
      </div>
    </div>
  );
}

export function BotanicalModal({ closeModalBotanical }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Botanical",
      },
    });
  };
  const openReactNative = () => {
    window.ReactNativeWebView.postMessage("Botanical");
  };
  return (
    <div class="botanicalModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalBotanical(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Botanical Museum</p>
        </div>
        <div class="enclosureImageContainer">
          <img
            class="enclosureImage"
            src={botanicalEnclosureImage}
            alt="elephants"
          />
        </div>
      </div>
    </div>
  );
}

export function FountainModal({ closeModalFountain }) {
  const navigate = useNavigate();

  return (
    <div class="fountainModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalFountain(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Interactive Fountain</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function ParkModal({ closeModalPark }) {
  const navigate = useNavigate();

  return (
    <div class="parkModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalPark(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Children's Park</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function FoodModal({ closeModalFood }) {
  const navigate = useNavigate();

  return (
    <div class="foodModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalFood(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Food Court</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function Food2Modal({ closeModalFood2 }) {
  const navigate = useNavigate();

  return (
    <div class="food2Modal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalFood2(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Food Court</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function TicketModal({ closeModalTicket }) {
  const navigate = useNavigate();

  return (
    <div class="ticketModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalTicket(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Entrance & Ticket Booth</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function ParkingModal({ closeModalParking }) {
  const navigate = useNavigate();

  return (
    <div class="parkingModal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalParking(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Parking Area</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function Parking2Modal({ closeModalParking2 }) {
  const navigate = useNavigate();

  return (
    <div class="parking2Modal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalParking2(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Parking Area</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function EModal({ closeModalE }) {
  const navigate = useNavigate();

  return (
    <div class="eModal" id="modalId">
      <div class="firstModal-content">
        <span class="closeBtn" id="closeBtn" onClick={() => closeModalE(false)}>
          &times;
        </span>
        <div class="modaltitle">
          <p>Material Recovery Facility</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function FModal({ closeModalF }) {
  const navigate = useNavigate();

  return (
    <div class="fModal" id="modalId">
      <div class="firstModal-content">
        <span class="closeBtn" id="closeBtn" onClick={() => closeModalF(false)}>
          &times;
        </span>
        <div class="modaltitle">
          <p>Veterinary Hospital</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}

export function GModal({ closeModalG }) {
  const navigate = useNavigate();

  return (
    <div class="gModal" id="modalId">
      <div class="firstModal-content">
        <span class="closeBtn" id="closeBtn" onClick={() => closeModalG(false)}>
          &times;
        </span>
        <div class="modaltitle">
          <p>Administration Building</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}
export function CModal({ closeModalC }) {
  const navigate = useNavigate();

  return (
    <div class="cModal" id="modalId">
      <div class="firstModal-content">
        <span class="closeBtn" id="closeBtn" onClick={() => closeModalC(false)}>
          &times;
        </span>
        <div class="modaltitle">
          <p>Shop</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}
export function C2Modal({ closeModalC2 }) {
  const navigate = useNavigate();

  return (
    <div class="c2Modal" id="modalId">
      <div class="firstModal-content">
        <span
          class="closeBtn"
          id="closeBtn"
          onClick={() => closeModalC2(false)}
        >
          &times;
        </span>
        <div class="modaltitle">
          <p>Shop</p>
        </div>
        <div class="enclosureImageContainer">
          {/* <img
            class="enclosureImage"
            src={outReptileEnclosureImage}
            alt="elephants"
          /> */}
        </div>
      </div>
    </div>
  );
}
