import React from "react";
import {
  FeaturedContainer,
  FeaturedContent,
  FeaturedDancing,
  FeaturedHour,
  FeaturedDining,
  FeaturedFood,
} from "./featuredElements.js";

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedContent />
      <FeaturedDancing />
      <FeaturedFood />
      <FeaturedDining />
      <FeaturedHour />
    </FeaturedContainer>
  );
};

export default Featured;
