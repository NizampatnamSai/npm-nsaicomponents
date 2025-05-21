import App from "./App"; // ✅ Auto-resolves .web.js or .native.js

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
