import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../common/consts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryPicker = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 42
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 36
    },
  };
  return (
    <div className="mt-5 px-8">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        itemClass="h-12 flex items-center"
        partialVisible={true}
        containerClass="mx-auto"
        sliderClass="mx-auto"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {CATEGORIES.map((category) => (
          <div className="w-full text-center" key={category.cat}>
            <Link to={`/category/${category.cat}`} className="text-sm">
            {category.display}
          </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryPicker;
