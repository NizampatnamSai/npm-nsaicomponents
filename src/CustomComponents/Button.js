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

const sizeStyles = {
  small: {
    padding: "4px 10px",
    fontSize: 12,
  },
  medium: {
    padding: "8px 16px",
    fontSize: 14,
  },
  large: {
    padding: "12px 22px",
    fontSize: 16,
  },
};

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  style = {},
  fullWidth = false,
  disabled = false,
  loading = false,
  loadingPosition = "start", // 'start' | 'end' | 'center'
  hideChildrenWhenLoading = false,
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
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      onClick={onClick}
      style={{
        ...variantStyles[variant],
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
        ...style,
      }}
      {...props}
    >
      {loading && loadingPosition === "start" && Spinner}

      {!loading || !hideChildrenWhenLoading ? children : null}

      {loading && loadingPosition === "end" && Spinner}

      {loading && loadingPosition === "center" && Spinner}
    </button>
  );
};

export default Button;
