import React, { useEffect } from "react";

const Modal = ({
  open = false,
  onClose = () => {},
  title,
  children,
  showBackdrop = true,
  showClose = true,
  actions,
  className = "",
  style = {},
  closeOnBackdropClick = false,
  closeOnEscape = false,
  position = "center", // center | top | bottom | left | right
  size = "md", // sm | md | lg
  fullScreen = false,
}) => {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closeOnEscape, onClose]);

  if (!open) return null;

  const sizeWidths = {
    sm: 360,
    md: 600,
    lg: 960,
  };

  const alignStyles = {
    center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    top: { top: "10%", left: "50%", transform: "translateX(-50%)" },
    bottom: { bottom: "10%", left: "50%", transform: "translateX(-50%)" },
    left: { top: "50%", left: "10%", transform: "translateY(-50%)" },
    right: { top: "50%", right: "10%", transform: "translateY(-50%)" },
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1300,
        backgroundColor: showBackdrop ? "rgba(0, 0, 0, 0.5)" : "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={closeOnBackdropClick ? onClose : undefined}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: 1400,
          backgroundColor: "#fff",
          borderRadius: fullScreen ? 0 : 8,
          padding: 0,
          width: fullScreen ? "100%" : sizeWidths[size] || sizeWidths.md,
          height: fullScreen ? "100%" : "auto",
          maxHeight: fullScreen ? "100vh" : "90vh",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          overflow: "hidden",
          ...alignStyles[position],
          ...style,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showClose) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 24px",
              borderBottom: "1px solid #ddd",
              flexShrink: 0,
            }}
          >
            {title ? (
              <h3 id="modal-title" style={{ margin: 0, fontSize: 20 }}>
                {title}
              </h3>
            ) : (
              <div />
            )}
            {showClose && (
              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: 24,
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                &times;
              </button>
            )}
          </div>
        )}

        {/* Scrollable Content */}
        <div
          id="modal-content"
          style={{
            flexGrow: 1,
            overflowY: "auto",
            padding: "16px 24px",
          }}
        >
          {children}
        </div>

        {/* Footer Actions */}
        {actions && (
          <div
            style={{
              padding: "16px 24px",
              borderTop: "1px solid #ddd",
              textAlign: "right",
              flexShrink: 0,
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
