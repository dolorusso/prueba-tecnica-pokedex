import Link from 'next/link';
import styles from './PokemonCard.module.css';
import { typeStyles } from './typeStyles';

const PokemonCard = ({ id, name, imageUrl, types }) => (
  <div className={styles.pokemonCard}>
    <img src={imageUrl} alt={name} className={styles.pokemonImage}/>
    <h3>{name.toUpperCase()}</h3>
    
    <div className={styles.typeContainer}>
      {types.map((type) => (
        <div
          key={type.type.name} 
          className={styles.typeBadge}
          style={{ backgroundColor: typeStyles[type.type.name]?.color || '#ddd' }}
        >
          <span className={styles.icon}>{typeStyles[type.type.name]?.icon}</span>
          <span className={styles.typeName}>{type.type.name.toUpperCase()}</span>
        </div>
      ))}
    </div>

    <Link href={`/pokemon/${id}`}>
      <button className={styles.button}>Ver más</button>
    </Link>
  </div>
);

export default PokemonCard;