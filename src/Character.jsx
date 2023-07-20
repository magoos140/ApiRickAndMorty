import { useFetch } from "./hooks/useFetch";
import { Link } from 'react-router-dom';


export const Character = () => {
  const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character');

  const { results } = !!data && data;

  return (
    <>
      <div className="flex items-center justify-end gap-20 mt-4">
        <h1 className="text-4xl font-bold">Rick And Morty</h1>
        <Link to="/filter-character">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 ml-auto mr-80">Filter Character</button>
        </Link>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="bg-blue-200 rounded-lg p-8 h-full w-full">
            <p className="text-xl font-bold">Loading....</p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {results && results.map((character) => (
              <div key={character.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={character.image} alt={character.name} className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-lg" />
                <div className="p-2">
                  <p className="text-lg font-semibold">{character.name}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
