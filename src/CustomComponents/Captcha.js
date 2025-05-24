import React, { useEffect, useRef, useState } from "react";

/**
 * CustomCaptcha - Indian Post Style CAPTCHA
 *
 * Props:
 * @param {number} length - Number of CAPTCHA characters
 * @param {function} onChange - Receives (inputText, actualCaptcha)
 * @param {number} width - Canvas width
 * @param {number} height - Canvas height
 * @param {string} background - CAPTCHA background
 * @param {number} fontSize - Font size
 * @param {boolean} error - If true, shows error message
 */
const Captcha = ({
  length = 6,
  onChange = () => {},
  width = 120,
  height = 40,
  background = "#eef5f9",
  fontSize = 22,
  error = false,
}) => {
  const canvasRef = useRef(null);
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");

  const generateCaptchaText = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    return Array.from({ length })
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");
  };

  const drawCaptcha = (canvas, text) => {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(0,0,255,${Math.random()})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.stroke();
    }

    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#111";

    const space = width / (text.length + 1);
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const x = space * (i + 0.5);
      const y = height / 2;
      const angle = (Math.random() - 0.5) * 0.6;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(char, -fontSize / 2.5, 0);
      ctx.restore();
    }

    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = "rgba(0,0,255,0.3)";
      ctx.beginPath();
      ctx.arc(Math.random() * width, Math.random() * height, 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const regenerate = () => {
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
    setUserInput("");
  };

  useEffect(() => {
    regenerate();
  }, []);

  useEffect(() => {
    if (canvasRef.current && captchaText) {
      drawCaptcha(canvasRef.current, captchaText);
    }
  }, [captchaText]);

  useEffect(() => {
    onChange(userInput, captchaText);
  }, [userInput]);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            display: "flex",
            border: "1px solid #ccc",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <canvas ref={canvasRef} width={width} height={height} />
          <div
            onClick={regenerate}
            style={{
              cursor: "pointer",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              borderLeft: "1px solid #ccc",
            }}
            title="Refresh"
          >
            ♻️
          </div>
          {/* <div
            style={{
              background: "#fff",
              width: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderLeft: "1px solid #ccc",
            }}
            title="Audio CAPTCHA (not functional)"
          >
            🔊
          </div> */}
        </div>

        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{
            padding: "2px 10px",
            border: "1px solid #888",
            borderRadius: "6px",
            minWidth: "140px",
            height: "36px",
          }}
        />
      </div>

      {error && (
        <div style={{ color: "red", fontSize: "0.9rem", marginTop: "6px" }}>
          Enter characters as displayed in image
        </div>
      )}
    </div>
  );
};

export default Captcha;
