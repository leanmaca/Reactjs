import { useLocation } from "react-router-dom";
import { db } from "../services/firebase-config";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
//import "tailwindcss/tailwind.css";

const AnimalList = () => {
  //const location = useLocation();
  //console.log(location.state.name);
  const [animals, setAnimals] = useState([]);
  const getAnimals = async () => {
    let temp = [];
    const querySnapshot = await getDocs(collection(db, "animals"));
    querySnapshot.forEach((doc) => {
      temp.push({ ...doc.data(), id: doc.id });
    });
    setAnimals(temp);
  };

  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    console.log("Animals", animals);
  }, [animals]);

  return (
    <div className="h-full w-full flex flex-col bg-white justify-center">
      <div className="sticky bg-white p-2 top-0 z-50 text-2xl font-bold shadow-md w-full flex justify-center">
        {" "}
        Animal List{" "}
      </div>
      {/* MAIN */}
      <div className="grid grid-cols-2 p-5 gap-4 pb-14">
        {animals.slice(0, 6).map((animal, index) => (
          <span className="flex flex-col justify-center">
            <div className="w-full border-[1px] border-gray-600 rounded-lg shadow-2xl overflow-hidden">
              <div className="w-full overflow-hidden border-white border-8 rounded-lg">
                <img src={animal.animal_imageurl} className="rounded-lg" />
              </div>
            </div>
            <div className="text-lg text-center">{animal.animal_name}</div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
