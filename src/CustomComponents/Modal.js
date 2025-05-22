import React, { useEffect } from "react";

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
  className = "",
  closeOnBackdropClick = true,
  closeOnEscape = false, // default = false (same as MUI's disableEscapeKeyDown)
  maxWidth = "md", // sm | md | lg
  fullWidth = false,
  position = "center", // center | top | bottom | left | right
}) => {
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, closeOnEscape, onClose]);

  if (!open) return null;

  const maxWidths = {
    sm: 360,
    md: 600,
    lg: 960,
  };

  const alignment =
    {
      center: { alignItems: "center", justifyContent: "center" },
      top: { alignItems: "flex-start", justifyContent: "center" },
      bottom: { alignItems: "flex-end", justifyContent: "center" },
      left: { alignItems: "center", justifyContent: "flex-start" },
      right: { alignItems: "center", justifyContent: "flex-end" },
    }[position] || alignment.center;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        backgroundColor: showBackdrop ? "rgba(0, 0, 0, 0.5)" : "transparent",
        display: "flex",
        ...alignment,
        overflowY: "auto",
        padding: 24,
      }}
      onClick={closeOnBackdropClick ? onClose : undefined}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 8,
          padding: 24,
          width: fullWidth ? "100%" : width,
          maxWidth: maxWidths[maxWidth] || maxWidths.md,
          maxHeight: "90vh",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          overflowY: "auto",
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
              aria-label="Close modal"
              style={{
                background: "transparent",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
        )}
        {title && (
          <h3 id="modal-title" style={{ margin: "0 0 16px" }}>
            {title}
          </h3>
        )}
        <div id="modal-content" style={{ marginBottom: 16 }}>
          {children}
        </div>
        {actions && <div style={{ textAlign: "right" }}>{actions}</div>}
      </div>
    </div>
  );
};

export default Modal;
