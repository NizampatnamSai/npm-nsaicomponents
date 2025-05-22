import React from "react";

const Modal = ({
  open = false,
  onClose = () => {},
  title,
  children,
  showBackdrop = true,
  showClose = true,
  actions,
  width = 400,
  style = {},
}) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100%",
        height: "100%",
        backgroundColor: showBackdrop ? "rgba(0,0,0,0.5)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: 24,
          width,
          maxWidth: "90%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          transform: "scale(1)",
          transition: "transform 0.3s ease",
          ...style,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {showClose && (
          <div style={{ textAlign: "right", marginBottom: 8 }}>
            <button
              onClick={onClose}
              style={{
                border: "none",
                background: "transparent",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
        )}
        {title && <h3 style={{ margin: "0 0 16px" }}>{title}</h3>}
        <div style={{ marginBottom: 16 }}>{children}</div>
        {actions && <div style={{ textAlign: "right" }}>{actions}</div>}
      </div>
    </div>
  );
};

export default Modal;
