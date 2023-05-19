import "./WavyRouter.style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WavyContainer } from "react-wavy-transitions";
import { Nav } from "./NavWavy";
import { Main } from "./Main";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

export const WavyRouter = () => {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Main />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<>No Match</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
