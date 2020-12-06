import styled from "styled-components";
import felicityImg from "../../images/featured.jpg";
import dancingImg from "../../images/dancing.jpg";
import hourImg from "../../images/happyHour-1.jpg";
import foodImg from "../../images/foodImg.jpg";
import diningImg from "../../images/dining.jpg";

export const FeaturedContainer = styled.div`
  max-height: 100%;
  width: 100vw;
  padding: 0;
  margin: 1rem auto;
`;

export const FeaturedContent = styled.div`
  background-color: #000;
  background: url(${felicityImg}) no-repeat;
  background-position: center;
  background-size: contain;
  height: 100vh;
  max-height: 100%;
  width: auto;
  padding: 1rem;
`;

export const FeaturedDancing = styled.div`
  background-color: #000;
  background: url(${dancingImg}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  padding: 0;
`;

export const FeaturedHour = styled.div`
  background-color: #e62e2d !important;
  background: url(${hourImg}) no-repeat;
  background-position: center;
  background-size: contain;
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  padding: 5vh 0;
  margin: 0;
`;

export const FeaturedDining = styled.div`
  background-color: #000;
  background: url(${diningImg}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  padding: 0;
`;

export const FeaturedFood = styled.div`
  background-color: #000;
  background: url(${foodImg}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  padding: 0;
`;
