import { QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../services/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./css/animallist.css";

function AnimalList() {
  const location = useLocation();
  const navigate = useNavigate();
  const enclosure = location.state.name;
  const [animalData, setAnimalData] = useState([]);

  const openAnimalView = (id) => {
    navigate("/animalview", {
      state: {
        id: id,
      },
    });
  };
  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    console.log(animalData);
    console.log(enclosure);
  }, [animalData]);

  const queryConstants = [];
  queryConstants.push(where("animal_enclosure", "==", enclosure));
  queryConstants.push(where("animal_archive", "==", false));

  function getAnimals() {
    const animalCollectionRef = query(
      collection(db, "animals"),
      where("animal_enclosure", "==", enclosure)
    );
    getDocs(animalCollectionRef).then((response) => {
      const animals = response.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().animal_name,
        imageUrl: doc.data().animal_imageurl,
        enclosure: doc.data().animal_enclosure,
      }));
      setAnimalData(animals);
    });
  }

  return (
    <div class="animalList">
      <h1 class="enclosuretitle">{enclosure}</h1>
      <button onClick={() => navigate("/")}>Back</button>
      {animalData.map((item, index) => {
        return (
          <span
            onClick={() => {
              openAnimalView(item.id);
            }}
            className="list"
            key={index}
          >
            <div class="imagecontainer">
              <img class="animalimage" src={item.imageUrl} />

              <h3 class="animalname">{item.name}</h3>
            </div>

            {/* <h3>{item.name}</h3> */}
          </span>
        );
      })}
    </div>
  );
}

export default AnimalList;
