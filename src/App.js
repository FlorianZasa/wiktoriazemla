import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import MenuBarComponent from './components/MenuBarComponent';
import FooterComponent from './components/FooterComponent';
import { useEffect, useState } from 'react';
import { colors } from './assets/colors';
import Project from './screens/Project';
import { PageViews } from '@piwikpro/react-piwik-pro';


function App() {
  const [currentRoute, setCurrentRoute] = useState("/");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
    setCurrentRoute(location.pathname)
  }, [])

  useEffect(() => {
    PageViews.trackPageView();
    setCurrentRoute(location.pathname)
    getNavbarStyle()
  }, [location]);

  function getNavbarStyle() {
    const defaultColors = { white: '#ffffff', primary: '#000000' }; // Define fallback colors
    const safeColors = colors || defaultColors;
    const border = 'none';
    
    switch (currentRoute) {
      case '/':
        return { backgroundColor: safeColors.background, color: 'black', border: border };
      case '/about':
        return { backgroundColor: safeColors.primary, color: safeColors.white, border: '2px solid white' };
      default:
        return { backgroundColor: safeColors.background, color: 'black', border: border };
    }
  }

  return (
    <div>
      <MenuBarComponent backgroundColor={getNavbarStyle().backgroundColor} textColor={getNavbarStyle().color} border={getNavbarStyle().border} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proj/:id" element={<Project />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
