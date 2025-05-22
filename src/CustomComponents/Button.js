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
  loading = false,
  loadingPosition = "start", // 'start' | 'end' | 'center'
  hideChildrenWhenLoading = true,
  onClick,
  ...props
}) => {
  const isDisabled = disabled || loading;

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
    <button
      style={{
        padding: "8px 16px",
        fontSize: 14,
        borderRadius: 4,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.5 : 1,
        ...variantStyles[variant],
        ...style,
      }}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {loading && loadingPosition === "start" && Spinner}
      {!hideChildrenWhenLoading && children}
      {loading && loadingPosition === "end" && Spinner}
      {loading && loadingPosition === "center" && Spinner}
    </button>
  );
};

export default Button;
