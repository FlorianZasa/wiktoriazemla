// applyColors.js
import { colors } from '../assets/colors';

const applyColors = () => {
  Object.keys(colors).forEach(key => {
    document.documentElement.style.setProperty(`--${key}-color`, colors[key]);
  });
};

export default applyColors;