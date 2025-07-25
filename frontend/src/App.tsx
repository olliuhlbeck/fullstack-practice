import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderContainer from '../src/components/HeaderComponents/HeaderContainer';
import { useState } from 'react';
import Footer from '../src/components/FooterComponents/Footer';

const App = () => {
  const [footerVisible, setFooterVisible] = useState<boolean>(true);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);
  return (
    <div
      className={`flex flex-col w-full min-h-screen text-center font-mono bg-cover bg-center bg-[url('./assets/background.png')] text-slate-900`}
    >
      <HeaderContainer
        title='Sky Listings'
        link='home'
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
      />
      <main className='flex-grow pt-18'>
        <Outlet />
      </main>
      <Footer
        footerVisible={footerVisible}
        setFooterVisible={setFooterVisible}
      />
    </div>
  );
};

export default App;
