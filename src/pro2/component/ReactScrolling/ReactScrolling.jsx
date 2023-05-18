import "./ReactScrolling.styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const ReactScrolling = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <progress max="100" value="0"></progress>
      <nav>
        <h3>Dashboard</h3>
      </nav>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
};

export default ReactScrolling;
