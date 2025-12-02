'use client';

import HeroPage from './HeroPage';
import NavBar from './NavBar';;

const Header = () => {

  return (
    <div className="relative w-full overflow-hidden customizecollro">
      <div className="relative z-30">
        <NavBar />
        <HeroPage />
      </div>
    </div>
  );
};

export default Header;
