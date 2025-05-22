import React from "react";

const defaultColors = {
  primary: "#1976d2",
  secondary: "#9c27b0",
  inherit: "inherit",
  success: "green",
};

const variantStyles = (variant, colorValue) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: colorValue,
        color: "#fff",
        border: "none",
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
      };
    case "outlined":
      return {
        backgroundColor: "transparent",
        color: colorValue,
        border: `1px solid ${colorValue}`,
      };
    case "text":
    default:
      return {
        backgroundColor: "transparent",
        color: colorValue,
        border: "none",
      };
  }
};

const sizeStyles = {
  small: {
    padding: "4px 10px",
    fontSize: 13,
    minWidth: 64,
    height: 32,
  },
  medium: {
    padding: "8px 14px",
    fontSize: 14,
    minWidth: 64,
    height: 36,
  },
  large: {
    padding: "8px 22px",
    fontSize: 15,
    minWidth: 64,
    height: 40,
  },
};

const Button = ({
  children,
  variant = "contained", // 'text' | 'outlined' | 'contained'
  color = "primary", // can be a string like 'primary' or custom like '#f44336'
  size = "medium", // 'small' | 'medium' | 'large'
  type = "button",
  style = {},
  fullWidth = false,
  disabled = false,
  loading = false,
  loadingPosition = "start", // 'start' | 'end' | 'center'
  hideChildrenWhenLoading = false,
  textDecoration = "none",
  textTransform = "uppercase",
  onClick,
  ...props
}) => {
  const isDisabled = disabled || loading;

  // Resolve color value
  const colorValue = defaultColors[color] || color;

  const Spinner = (
    <span
      style={{
        width: 16,
        height: 16,
        border: "2px solid currentColor",
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        display: "inline-block",
        flexShrink: 0,
        margin:
          loadingPosition === "start"
            ? "0 8px 0 0"
            : loadingPosition === "end"
            ? "0 0 0 8px"
            : "0",
      }}
    />
  );

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <button
        type={type}
        disabled={isDisabled}
        aria-busy={loading}
        onClick={onClick}
        style={{
          ...variantStyles(variant, colorValue),
          ...sizeStyles[size],
          display: "inline-flex",
          alignItems: "center",
          justifyContent:
            loading && loadingPosition === "center" ? "center" : "center",
          width: fullWidth ? "100%" : "auto",
          borderRadius: 4,
          cursor: isDisabled ? "not-allowed" : "pointer",
          opacity: isDisabled ? 0.5 : 1,
          transition: "all 0.2s ease",
          textDecoration,
          textTransform,
          lineHeight: 1.5,
          fontFamily: "inherit",
          ...style,
        }}
        {...props}
      >
        {loading && loadingPosition === "start" && Spinner}
        {!loading || !hideChildrenWhenLoading ? children : null}
        {loading && loadingPosition === "end" && Spinner}
        {loading && loadingPosition === "center" && Spinner}
      </button>
    </>
  );
};

export default Button;
