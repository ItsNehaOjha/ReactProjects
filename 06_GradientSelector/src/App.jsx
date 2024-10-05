import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State variables to hold color values, gradient type, direction, opacity, etc.
  const [color1, setColor1] = useState('#FFB6C1');
  const [color2, setColor2] = useState('#E6E6FA');
  const [gradientType, setGradientType] = useState('linear');
  const [gradientDirection, setGradientDirection] = useState('to right');
  const [opacity, setOpacity] = useState(1);
  const [textColor, setTextColor] = useState('white');
  const [savedColors, setSavedColors] = useState([]); // Store saved color combos

  // Handle color input changes
  const handleColor1Change = (e) => {
    setColor1(e.target.value);
  };

  const handleColor2Change = (e) => {
    setColor2(e.target.value);
  };

  const calculateTextColor = (bgColor) => {
    // Function to automatically set contrasting text color based on the background
    const isLight = (bgColor === 'beige' || bgColor === '#E6E6FA');
    return isLight ? 'black' : 'white';
  };

  useEffect(() => {
    setTextColor(calculateTextColor(color1));
  }, [color1, color2]);

  // Function to save the selected color combination
  const saveColorCombination = () => {
    const colorCombo = {
      color1,
      color2,
      gradientType,
      gradientDirection,
    };
    setSavedColors([...savedColors, colorCombo]);
  };

  // Function to copy the current gradient as CSS
  const copyGradientToClipboard = () => {
    const gradientCss = `${gradientType}-gradient(${gradientDirection}, ${color1}, ${color2})`;
    navigator.clipboard.writeText(gradientCss);
    alert('Gradient CSS copied to clipboard: ' + gradientCss);
  };

  // Convert Hex to RGBA for opacity control
  const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return { r, g, b };
  };

  const colorWithOpacity1 = `rgba(${hexToRgb(color1).r}, ${hexToRgb(color1).g}, ${hexToRgb(color1).b}, ${opacity})`;
  const colorWithOpacity2 = `rgba(${hexToRgb(color2).r}, ${hexToRgb(color2).g}, ${hexToRgb(color2).b}, ${opacity})`;

  return (
    <div className="App"
      style={{
        background: gradientType === 'linear'
          ? `linear-gradient(${gradientDirection}, ${colorWithOpacity1}, ${colorWithOpacity2})`
          : `radial-gradient(circle, ${colorWithOpacity1}, ${colorWithOpacity2})`,
      }}>
      <h1 style={{ color: textColor }}>Gradient Background Changer</h1>

      <div className="controls">
        <div>
          <label>Color 1:</label>
          <input type="color" value={color1} onChange={handleColor1Change} />
        </div>
        <div>
          <label>Color 2:</label>
          <input type="color" value={color2} onChange={handleColor2Change} />
        </div>

        <div>
          <label>Gradient Type:</label>
          <select value={gradientType} onChange={(e) => setGradientType(e.target.value)}>
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </div>

        <div>
          <label>Gradient Direction:</label>
          <select value={gradientDirection} onChange={(e) => setGradientDirection(e.target.value)}>
            <option value="to right">To Right</option>
            <option value="to left">To Left</option>
            <option value="to top">To Top</option>
            <option value="to bottom">To Bottom</option>
          </select>
        </div>

        <div>
          <label>Opacity:</label>
          <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(e.target.value)} />
        </div>

        <button onClick={saveColorCombination}>Save Color Combination</button>
        <button onClick={copyGradientToClipboard}>Copy Gradient as CSS</button>

        <div className="gradient-preview" 
          style={{
            background: gradientType === 'linear'
              ? `linear-gradient(${gradientDirection}, ${colorWithOpacity1}, ${colorWithOpacity2})`
              : `radial-gradient(circle, ${colorWithOpacity1}, ${colorWithOpacity2})`,
            height: '100px',
            marginTop: '20px',
          }}>
          <p>Gradient Preview</p>
        </div>
      </div>

      <div className="saved-combinations">
        <h3>Saved Combinations</h3>
        <ul>
          {savedColors.map((combo, index) => (
            <li key={index}>
              {combo.color1} and {combo.color2} ({combo.gradientType}, {combo.gradientDirection})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
