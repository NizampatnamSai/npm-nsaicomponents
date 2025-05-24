import React from "react";

export const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const containerStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const DialogTitle = ({ children }) => {
  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    padding: "16px",
    borderBottom: "1px solid #ddd",
  };
  return <div style={titleStyle}>{children}</div>;
};

export const DialogContent = ({ children }) => {
  const contentStyle = {
    padding: "16px",
  };
  return <div style={contentStyle}>{children}</div>;
};

export const DialogContentText = ({ children }) => {
  const textStyle = {
    margin: 0,
    color: "#555",
  };
  return <p style={textStyle}>{children}</p>;
};

export const DialogActions = ({ children }) => {
  const actionsStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
    padding: "8px 16px",
    borderTop: "1px solid #ddd",
  };
  return <div style={actionsStyle}>{children}</div>;
};
