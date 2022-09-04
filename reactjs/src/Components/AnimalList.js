import { QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {db} from '../services/firebase-config';
import { collection, query, where, getDocs } from "firebase/firestore";
import "./css/animallist.css";

function AnimalList() {
  const location = useLocation();
  const navigate = useNavigate();
  const enclosure = location.state.name;
  const [animalData, setAnimalData] = useState([]);

  useEffect(() => {
    getAnimals()
  }, []);

  useEffect(() => {
    console.log(animalData);
  }, [animalData])

  function getAnimals(){
    const animalCollectionRef = query(collection(db, "animals"), where("animal_enclosure", "==", enclosure));
    getDocs(animalCollectionRef).then(response => {
      const animals = response.docs.map(doc => ({
        name: doc.data().animal_name,
        imageUrl: doc.data().animal_imageurl,
        enclosure: doc.data().animal_enclosure,
      }))
      setAnimalData(animals)
    })
  }
  
  return (
    <div class="animalList">
      <h1>Animal List Page</h1>
      <h2>{location.state.name}</h2>
      <button onClick={() => navigate(-1)}>Back</button>
      {animalData.map((item, index)=>{
        return(
          <div className="list" key={index}>
            
            <div class="imagecontainer">
            <img class="animalimage" src={item.imageUrl}/>
            
            </div>
            <h3>{item.name}</h3>
            </div>
        )
      })}
    </div>
  );
}

export default AnimalList;
