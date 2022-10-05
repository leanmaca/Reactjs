import { QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../services/firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import "./css/animalview.css";

function AnimalView() {
  const location = useLocation();
  const navigate = useNavigate();
  const animalId = location.state.id;
  const [animalData, setAnimalData] = useState([]);
  const back = "<=";
  const openQuiz = (id) => {
    navigate("/quiz", {
      state: {
        id: id,
      },
    });
  };

  console.log(animalId);
  useEffect(() => {
    const docRef = doc(db, "animals", animalId);
    getDoc(docRef).then((doc) => {
      console.log(doc.data(), doc.id);
      const animalListReference = {
        id: doc.id,
        name: doc.data().animal_name,
        sciName: doc.data().animal_sciname,
        description: doc.data().animal_description,
        enclosure: doc.data().animal_enclosure,
        habitat: doc.data().animal_habitat,
        diet: doc.data().animal_diet,
        behavior: doc.data().animal_behavior,
        conservation: doc.data().animal_conservationstatus,
        distribution: doc.data().animal_distribution,
        nutrition: doc.data().animal_nutrition,
        imageUrl: doc.data().animal_imageurl,
      };
      setAnimalData(animalListReference);
    });
  }, []);

  const backToAnimalList = () => {
    navigate("/animallist", {
      state: {
        name: animalData.enclosure,
      },
    });
  };
  return (
    <div class="animalView">
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
      <div class="imagecontaineranimalview">
        <img class="animalViewImage" src={animalData.imageUrl}></img>
        <button class="backButton" onClick={() => backToAnimalList()}>
          {back}
        </button>
      </div>

      <div class="animalInfo">
        <h1 class="nameText">{animalData.name}</h1>
        <p class="infoSection">
          <b class="labelText">Enclosure: </b>
          <small class="infoText">{animalData.enclosure}</small>
        </p>
        <p class="infoSection">
          <b class="labelText">Scientific Name: </b>
          <small class="infoText" style={{ fontStyle: "italic" }}>
            {animalData.sciName}
          </small>
        </p>
        <p class="infoSection">
          <b class="labelText">Description: </b>
          <small class="infoText">{animalData.description}</small>
        </p>
        <p class="infoSection">
          <b class="labelText">Habitat: </b>
          <small class="infoText">{animalData.habitat}</small>
        </p>
        <p class="infoSection">
          <b class="labelText">Diet: </b>
          <small class="infoText">{animalData.diet}</small>
        </p>
        <p class="infoSection">
          <b class="labelText">Nutritional Requirements: </b>
          <small class="infoText">{animalData.nutrition}</small>
        </p>
        <p class="infoSection">
          <b class="labelText">Conservation Status: </b>
          <small class="infoText">{animalData.conservation}</small>
        </p>
        <p class="infoSection">
          <b class="labelText">Wild Behavior: </b>
          <small class="infoText">{animalData.behavior}</small>
        </p>
        <div class="quizSection" onClick={() => openQuiz(animalId)}>
          <button class="quizBtn">Take Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default AnimalView;
