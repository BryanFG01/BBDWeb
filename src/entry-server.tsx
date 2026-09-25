import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

/** Used only at build time by scripts/prerender.mjs to produce static HTML for crawlers. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
