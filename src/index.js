import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { App } from "./components/App";
// import App from "./pro2/App";
import App from "./pract3GoIt/App";

// import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

//"./pro2/App";

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>

//"./pract3GoIt/App";

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
