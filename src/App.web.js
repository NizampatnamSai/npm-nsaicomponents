// import React from "react";
// import "./App.css";

// const Skeleton = ({ width = "100%", height = 20, style = {} }) => (
//   <div
//     style={{
//       width,
//       height,
//       backgroundColor: "#e0e0e0",
//       borderRadius: 4,
//       animation: "pulse 1.5s infinite",
//       ...style,
//     }}
//   />
// );

// const App = ({
//   size = 40,
//   color,
//   loading = true,
//   speed = 1, // seconds per rotation/bounce
//   thickness = 4,
//   variant = "default", // "default" | "dots" | "skeleton"
//   children,
// }) => {
//   // Detect dark mode if no color provided
//   const resolvedColor = () => {
//     if (color) return color;
//     const isDark =
//       typeof window !== "undefined" &&
//       window.matchMedia?.("(prefers-color-scheme: dark)").matches;
//     return isDark ? "#fff" : "dodgerblue";
//   };

//   if (!loading) return null;

//   if (variant === "dots") {
//     return (
//       <div className="dots-spinner" style={{ display: "flex", gap: 4 }}>
//         {[...Array(3)].map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: size / 5,
//               height: size / 5,
//               borderRadius: "50%",
//               backgroundColor: resolvedColor(),
//               animation: `dotBounce ${speed}s infinite alternate`,
//               animationDelay: `${index * 0.2}s`,
//             }}
//           />
//         ))}
//         {children && <div>{children}</div>}
//       </div>
//     );
//   }

//   if (variant === "skeleton") {
//     return <Skeleton width={size * 2} height={size / 2} />;
//   }

//   // Default spinner
//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//     >
//       <div
//         role="status"
//         aria-label="Loading"
//         className="loading-spinner"
//         style={{
//           width: size,
//           height: size,
//           border: `${thickness}px solid ${resolvedColor()}`,
//           borderTop: `${thickness}px solid transparent`,
//           borderRadius: "50%",
//           animation: `spin ${speed}s linear infinite`,
//         }}
//       />
//       {children && <div style={{ marginTop: 8 }}>{children}</div>}
//     </div>
//   );
// };

// export default App;

// src/index.js
export { default as Loader } from "./CustomComponents/Loader";
export { default as Button } from "./CustomComponents/Button";
export { default as Modal } from "./CustomComponents/Modal";
export { default as CustomBackdrop } from "./CustomComponents/CustomBackdrop";
export { default as Dialog } from "./CustomComponents/Dialog";

// export const Loader = CustomLoader;
// export const Input = CustomInput;
