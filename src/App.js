import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import MenuBarComponent from './components/MenuBarComponent';
import FooterComponent from './components/FooterComponent';
import { useEffect, useState } from 'react';
import { colors } from './assets/colors';

function App() {
  const [currentRoute, setCurrentRoute] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location])

  function getNavbarStyle() {
    switch (currentRoute) {
      case '/':
        return { backgroundColor: colors.white, color: 'black'};
      case '/about':
        return { backgroundColor: colors.primary, color: colors.white};
    }
  }

  return (
    <div>
      <MenuBarComponent backgroundColor={getNavbarStyle().backgroundColor} textColor={getNavbarStyle().color} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
