import content from "./content.json";
import Carousel from "./Carousel";

const ModernCarousel = () => {
  return (
    <div className="App">
      <Carousel content={content} />
    </div>
  );
};

export default ModernCarousel;
