import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../common/consts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryPicker = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 20
    },
  };
  return (
    <div className="mt-5 px-8">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        itemClass=""
        centerMode
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {CATEGORIES.map((category) => (
          <div className="text-center" key={category.cat}>
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
