import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import MenuBarComponent from './components/MenuBarComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <MenuBarComponent />
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
