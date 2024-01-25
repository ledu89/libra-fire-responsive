import { useEffect, useState } from "react";
import "./image-slider.scss";
function ImagesSlider() {
  const photos = [
    "../assets/image1.png",
    "../assets/image2.png",
    "../assets/image3.png",
  ];
  const [images, setImages] = useState(photos);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, images]);
  return (
    <>
      <div className="image-slider">
        <div className="slider">
          {photos.map((image, imageIndex) => {
            let position = "previous";
            if (imageIndex === index) {
              position = "active";
            }
            if (imageIndex === (index - 1 + images.length) % images.length) {
              position = "next";
            }
            if (imageIndex === (index + 1) % images.length) {
              position = "previous";
            }

            return (
              <img src={image} className={position} alt="" key={imageIndex} />
            );
          })}
        </div>
        <div className="carousel-btn-container">
          <img
            src="../assets/Group_34.png"
            alt="left"
            onClick={() => {
              setIndex(index - 1);
            }}
          />
          <img
            src="../assets/Group_35.png"
            alt="left"
            onClick={() => {
              setIndex(index + 1);
            }}
          />
        </div>{" "}
      </div>
    </>
  );
}

export default ImagesSlider;
