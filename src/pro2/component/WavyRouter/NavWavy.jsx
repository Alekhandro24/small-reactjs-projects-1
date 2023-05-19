import { WavyLink } from "react-wavy-transitions";

export const Nav = () => {
  return (
    <nav>
      <WavyLink to="/" color="#ff44fd">
        Home
      </WavyLink>
      <WavyLink to="/about" color="#8f44fd">
        About
      </WavyLink>
      <WavyLink to="/contact" color="#2f44fd">
        Contatc
      </WavyLink>
    </nav>
  );
};
