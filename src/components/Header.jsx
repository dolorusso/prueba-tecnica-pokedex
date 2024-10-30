import React from 'react';
import Image from 'next/image'; 
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerStyle}>
      <Image
        src="/poketitle.png" 
        alt="Pokedex"
        width={400} 
        height={200} 
        className={styles.titleImage} 
      />
      <Image
        src="https://raw.githubusercontent.com/FallenDeity/PokeDex-Website/refs/heads/master/public/logo.png"
        alt="Pokedex"
        width={100} 
        height={100}
        className={styles.imageStyle}
      />
    </header>
  );
};

export default Header;