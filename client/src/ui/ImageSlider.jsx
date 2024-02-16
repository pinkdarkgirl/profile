import text from "../assets/text.png";

function ImageSlider() {
  return (
    <div className="image-slider-container">
      <div className="full-width-animation">
        <img src={text} alt="text" />
        <img src={text} alt="text" />
      </div>
    </div>
  );
}

export default ImageSlider;
