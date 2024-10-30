import React from 'react';
import PokemonDetails from '../../components/PokemonDetails';

const PokemonPage = ({ pokemon }) => {
  return <PokemonDetails pokemon={pokemon} />;
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await response.json();

  const stats = pokemonData.stats.map(stat => ({
    name: stat.stat.name,
    value: stat.base_stat,
    width: (stat.base_stat / 255) * 100,
  }));

  const pokemon = {
    id: pokemonData.id,
    name: pokemonData.name,
    imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`,
    stats: stats,
    abilities: pokemonData.abilities.map(ability => ability.ability.name),
    types: pokemonData.types.map(type => type.type.name),
  };

  return {
    props: {
      pokemon,
    },
  };
}

export default PokemonPage;