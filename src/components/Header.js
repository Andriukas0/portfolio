import React from 'react';
//nuotraukos
import Logo from '../assets/LGblue.svg';

const Header = () => {
  return(
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between itme'>
        { /* logo */ }
        <a href="https://www.linkedin.com/in/andrius-globys-03242a1aa/">
          <img src={Logo} alt='' />
        </a>
        { /* button */ }
        <a href="mailto:andrius.z2000@gmail.com">
        <button className='btn btn-sm'>Work with me</button>
        </a>
      </div>
    </div>
  </header>
  );
};

export default Header;
