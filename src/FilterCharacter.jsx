import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Link } from 'react-router-dom';

export const FilterCharacter = () => {
  const { data } = useFetch('https://rickandmortyapi.com/api/character');
  const results = data?.results || []; // Si data no está disponible, results se inicializa como un array vacío.
  console.log("🚀 ~ file: FilterCharacter.jsx:7 ~ FilterCharacter ~ results:", results)

  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  }

  const addName = () => {
    if (inputValue.length <= 1) return;
    setName(inputValue);
    setInputValue("");
  };

  const characterToShow = results.find(character => character.name === name);

  return (
    <>
      <div>

        <div className="mt-6 ml-6">
        <Link to="/">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Volver</button>
        </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-bold">Character Filter</h1>
          <input
            type="text"
            placeholder="Escribe el nombre del personaje"
            value={inputValue}
            onChange={handleChange}
            className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300 w-1/5"
          />

          <button 
          onClick={addName}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Buscar
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          {characterToShow ? (
            <div className="border border-black rounded bg-white w-1/4 flex flex-col" key={characterToShow.id}>
              <p className="text-xl font-bold">{characterToShow.name}</p>
              <img src={characterToShow.image} alt={characterToShow.name}/>
            </div>
          ) : (
            <p>Ingresa un Nombre de Personaje Valido</p>
          )}
        </div>
      </div>
    </>
  )
};
