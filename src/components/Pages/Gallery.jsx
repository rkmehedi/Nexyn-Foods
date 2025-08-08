import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryImg1 from "../../assets/galleryimg (1).jpg";
import galleryImg2 from "../../assets/galleryimg (2).jpg";
import galleryImg3 from "../../assets/galleryimg (3).jpg";
import galleryImg4 from "../../assets/galleryimg (4).jpg";
import galleryImg5 from "../../assets/galleryimg (5).jpg";
import galleryImg6 from "../../assets/galleryimg (6).jpg";
import galleryImg7 from "../../assets/galleryimg (7).jpg";
import galleryImg8 from "../../assets/galleryimg (8).jpg";
import galleryImg9 from "../../assets/galleryimg (9).jpg";
import galleryImg10 from "../../assets/galleryimg (10).jpg";
import galleryImg11 from "../../assets/galleryimg (11).jpg";
import galleryImg12 from "../../assets/galleryimg (12).jpg";

const galleryImages = [
  { src: galleryImg1, alt: "Delicious Food 1" },
  { src: galleryImg2, alt: "Delicious Food 2" },
  { src: galleryImg3, alt: "Delicious Food 3" },
  { src: galleryImg4, alt: "Delicious Food 4" },
  { src: galleryImg5, alt: "Delicious Food 5" },
  { src: galleryImg6, alt: "Delicious Food 6" },
  { src: galleryImg7, alt: "Delicious Food 7" },
  { src: galleryImg8, alt: "Delicious Food 8" },
  { src: galleryImg9, alt: "Delicious Food 9" },
  { src: galleryImg10, alt: "Delicious Food 10" },
  { src: galleryImg11, alt: "Delicious Food 11" },
  { src: galleryImg12, alt: "Delicious Food 12" },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (imageIndex) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  return (
    <div>
      <div className="hero h-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Gallery</h1>
            <p className="mb-5 text-lg">
              A visual feast of our finest culinary creations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages}
        index={index}
      />
    </div>
  );
};

export default Gallery;
