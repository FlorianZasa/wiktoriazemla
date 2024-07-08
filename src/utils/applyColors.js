// applyColors.js
import { colors } from '../assets/colors';

const applyColors = () => {
  Object.keys(colors).forEach(key => {
    document.documentElement.style.setProperty(`--${key}-color`, colors[key]);
  });

  console.log("Applied colors");
};

export default applyColors;