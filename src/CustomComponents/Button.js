// src/components/Button.js
import React from "react";

const variantStyles = {
  primary: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
  },
  secondary: {
    backgroundColor: "#e0e0e0",
    color: "#000",
    border: "none",
  },
  outlined: {
    backgroundColor: "transparent",
    color: "#1976d2",
    border: "1px solid #1976d2",
  },
};

const Button = ({
  children,
  variant = "primary",
  style = {},
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        fontSize: 14,
        borderRadius: 4,
        cursor: "pointer",
        opacity: disabled ? 0.6 : 1,
        ...variantStyles[variant],
        ...style,
      }}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
