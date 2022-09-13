import React from "react";
import "./css/MapScreen.css";
import { Route, Link, useNavigate } from "react-router-dom";

export function ElephantModal({ closeModalElephant }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Elephants",
      },
    });
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
          <p>Elephants</p>
        </div>
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function HippopotamusModal({ closeModalHippopotamus }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Hippopotamus",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function AviaryModal({ closeModalAviary }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Aviary",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function HyenaModal({ closeModalHyena }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Hyena",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function SavannaModal({ closeModalSavanna }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Savanna",
      },
    });
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
        <div class="modaldescription">
          <p>
            The species of animals in a savanna depends upon the geographic
            location of the biome. The African savannah, the savannah with which
            most people are familiar, is home to a wide variety of animals.
          </p>
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

export function ApexModal({ closeModalApex }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Apex Predators",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function EndemicModal({ closeModalEndemic }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Philippine Endemic",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function ReptileModal({ closeModalReptile }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Outdoor Reptile",
      },
    });
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
          <p>Outdoor Reptile</p>
        </div>
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function MuseumModal({ closeModalMuseum }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Outdoor Reptile",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function InReptileModal({ closeModalInReptile }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Indoor Reptile",
      },
    });
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
          <p>Indoor Reptile</p>
        </div>
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function LagoonModal({ closeModalLagoon }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Lagoon",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function IslandModal({ closeModalIsland }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Center Island",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function PrimatesModal({ closeModalPrimates }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Primates",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function ButterflyModal({ closeModalButterfly }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Butterfly Garden",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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

export function BotanicalModal({ closeModalBotanical }) {
  const navigate = useNavigate();
  const openAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: "Botanical",
      },
    });
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
        <div class="modaldescription">
          <p>
            elephant, the largest living land animal, characterized by its long
            trunk (elongated upper lip and nose), columnar legs, and huge head
            with temporal glands and wide, flat ears.
          </p>
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
