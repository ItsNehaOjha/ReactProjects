import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");
  const [textColor, setTextColor] = useState("white");

  // Function to pick a color from the color picker
  const pickColor = () => {
    document.getElementById('colorpicker').click();
  };

  // Function to convert hex color to RGB
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

  // Function to calculate brightness from RGB
  const calculateBrightness = ({ r, g, b }) => {
    // Formula to calculate brightness
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  // Function to calculate text color based on background color brightness
  const calculateTextColor = (bgColor) => {
    const { r, g, b } = hexToRgb(bgColor);
    const brightness = calculateBrightness({ r, g, b });
    return brightness > 128 ? 'black' : 'white';  // If brightness is higher, use black text, otherwise white
  };

  useEffect(() => {
    setTextColor(calculateTextColor(color));
  }, [color]);

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

      {/* Centered Text with Dynamic Color */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ color: textColor }}>
        <h1 className="text-4xl font-bold">Background Color Changer</h1>
      </div>

      <div className="fixed flex flex-wrap text-black justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 bottom-9 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
            onClick={() => setColor("#FFB6C1")}
            className="outline-none px-4 py-1 font-bold rounded-full text-black shadow-lg" style={{ backgroundColor: "#FFB6C1" }}>
            Pink
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button
            onClick={() => setColor("#E6E6FA")}
            className="outline-none px-4 py-1 rounded-full font-bold text-black shadow-lg" style={{ backgroundColor: "#E6E6FA" }}>
            Lavender
          </button>
          <button
            onClick={() => setColor("crimson")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "crimson" }}>
            Crimson
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>
            Black
          </button>
          <button
            onClick={() => setColor("#e0b207")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "#e0b207" }}>
            Yellow
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "brown" }}>
            Brown
          </button>

          <button className="color-picker outline-none px-5 py-1 rounded-full text-white shadow-lg" onClick={pickColor} style={{ backgroundColor: "pink" }}>
            🎨
          </button>

          {/* Hidden Color Picker Input */}
          <input
            id="colorpicker"
            type="color"
            style={{ visibility: 'hidden', width: '0px', height: '0px' }}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
