// image imports
import text1 from "../assets/text.png";

function ImageSlider() {
  return (
    <div className="carousel">
      <div className="image-slider-container">
        <img src={text1} alt="text" className="image-slide" />
      </div>
    </div>
  );
}

export default ImageSlider;
