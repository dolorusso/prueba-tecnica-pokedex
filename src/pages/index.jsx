import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import styles from './index.module.css';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const limit = 40; // Esto lo hago para cargar de a 40 por pagina para que no se sobrecargue, con la paginacion infinita se van cargando mas a medida que se scrollea

  const fetchPokemons = async () => {
    setLoading(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    // Obtiene los Pokemones
    const fetchedPokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        return await pokemonResponse.json();
      })
    );

    // Actualiza la lista de Pokemones y evita duplicados
    setPokemons((prev) => {
      const existingIds = new Set(prev.map(p => p.id)); 
      const newPokemons = fetchedPokemons.filter(p => !existingIds.has(p.id)); 
      return [...prev, ...newPokemons]; 
    });

    setOffset((prev) => prev + limit); 
    setLoading(false); 
  };

  useEffect(() => {
    fetchPokemons(); 
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loading 
      ) {
        fetchPokemons(); // Llama a la funcion para cargar más Pokemones
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]); 

  // Filtrar pokemones por busqueda
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className={styles.searchContainer}>
      <SearchBar onSearch={setSearchTerm} />
      <div className={styles.backgroundContainer}></div>
      <div className={styles.cardContainer}>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
            types={pokemon.types} 
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;