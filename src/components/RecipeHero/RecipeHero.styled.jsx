import styled from "styled-components";
import recipeMobile1 from "../../images/RecipeHero/recipe-page-hero-mobile@1x.jpg";
import recipeMobile2 from "../../images/RecipeHero/recipe-page-hero-mobile@2x.jpg";
import recipeTablet1 from "../../images/RecipeHero/recipe-page-hero-tablet@1x.jpg";
import recipeTablet2 from "../../images/RecipeHero/recipe-page-hero-tablet@2x.jpg";
import recipeDesktop1 from "../../images/RecipeHero/recipe-page-hero-desktop@1x.jpg";
import recipeDesktop2 from "../../images/RecipeHero/recipe-page-hero-desktop@2x.jpg";

export const RecipeHeroWrap = styled.div`
  width: 100%;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 144px 38px 90px;
  text-align: center;

  background-image: url(${recipeMobile1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${recipeMobile2});
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    background-image: url(${recipeTablet1});
    height: 495px;
    padding: 136px 131px 32px;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipeTablet2});
    }
  }

  @media (min-width: 1200px) {
    background-image: url(${recipeDesktop1});
    height: 493px;
    padding: 164px 392px 32px;
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${recipeDesktop2});
    }
  }
`;

export const RecipeTitle = styled.h1`
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #8baa36;
  font-feature-settings: "liga" off;

  @media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 24px;
    font-size: 44px;
  }
`;

export const RecipeDescription = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  text-align: center;

  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;

  color: #22252a;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 30px;
  }
`;

export const RecipeAddFavoriteButton = styled.button`
  cursor: pointer;

  width: fit-content;
  padding: 10px 18px;
  height: 35px;
  max-width: 150px;
  font-size: 10px;
  line-height: 1.5;
  color: #22252a;
  border-color: #8baa36;
  text-align: center;

  background-color: transparent;
  border-radius: 24px 44px;
  box-shadow: inset 0px 0px 0px 2px #8baa36;

  transition: color 250ms, border-color 250ms;

  &:hover,
  &:focus {
    color: white;

    background-color: #8baa36;
    box-shadow: none;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 18px 44px;
    color: #23262a;
    font-size: 16px;
    height: 59px;
    max-width: 278px;
  }

  @media (min-width: 1200px) {
    height: 59px;
    max-width: 270px;
  }
`;

export const RecipeTime = styled.span`
  --icon-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;

  margin-top: auto;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.2em;

  color: #23262a;

  & > svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    --icon-size: 20px;
    column-gap: 8px;

    font-size: 14px;
    line-height: 1.4;

    & > svg {
      width: var(--icon-size);
      height: var(--icon-size);
    }
  }
`;

export const Clock = styled.p`
  width: 14px;
  height: 14px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 20px;
    height: 20px;
  }
`;
export const RecipeHeroLoader = styled.span`
  display: block;

  transform: scale(0.5);

  @media (min-width: 768px) and (max-width: 1199px) {
    margin-top: 15px;

    transform: scale(1);
  }
`;
