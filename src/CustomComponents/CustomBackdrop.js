import React from "react";

const defaultBackdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.3s ease",
};

const spinnerStyle = {
  width: "48px",
  height: "48px",
  border: "4px solid rgba(255, 255, 255, 0.3)",
  borderTop: "4px solid white",
  borderRadius: "50%",
  animation: "custom-spin 1s linear infinite",
};

const styleTag = `
@keyframes custom-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const CustomBackdrop = ({
  open,
  onClick,
  zIndex = 1300,
  showSpinner = false,
  children,
  backgroundColor,
  opacity,
}) => {
  if (!open) return null;

  const combinedStyle = {
    ...defaultBackdropStyle,
    backgroundColor: backgroundColor ?? `rgba(0, 0, 0, ${opacity ?? 0.5})`,
    zIndex,
  };

  return (
    <>
      {/* Inject keyframes only once */}
      <style>{styleTag}</style>
      <div style={combinedStyle} onClick={onClick}>
        {showSpinner ? <div style={spinnerStyle} /> : children}
      </div>
    </>
  );
};

export default CustomBackdrop;
