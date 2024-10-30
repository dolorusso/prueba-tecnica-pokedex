import React from 'react';
import Image from 'next/image';
import styles from './PokemonDetails.module.css';
import { typeStyles } from './typeStyles';

const PokemonDetails = ({ pokemon }) => {
  return (
    <>
      <div className={styles.backgroundContainer}></div>
      <div className={styles.container}>
        <h2 className={styles.name}>{pokemon.name.toUpperCase()}</h2>
        <Image
          src={pokemon.imageUrl}
          alt={pokemon.name}
          width={200}
          height={200}
          className={styles.image}
        />

        <div className={styles.typeContainer}>
          {pokemon.types.map((type) => (
            <div
              key={type} 
              className={styles.typeBadge}
              style={{ backgroundColor: typeStyles[type]?.color || '#ddd' }} 
            >
              <span className={styles.icon}>{typeStyles[type]?.icon}</span>
              <span className={styles.typeName}>{type.toUpperCase()}</span>
            </div>
          ))}
        </div>
        
        <div className={styles.statsContainer}>
          {pokemon.stats.map((stat) => (
            <div key={stat.name} className={styles.stat}>
              <span className={styles.statName}>{stat.name.toUpperCase()}</span>
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ width: `${stat.width}%` }}
                />
              </div>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.abilitiesContainer}>
        <h2 className={styles.abilitiesTitle}>ABILITIES</h2>
            {pokemon.abilities.map((ability) => (
              <div key={ability} className={styles.ability}>
                {ability.toUpperCase()}
              </div>
            ))}
        
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;

