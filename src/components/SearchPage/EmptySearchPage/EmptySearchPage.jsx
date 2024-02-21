import searchVegBg from "../../../images/graphics/look_for_sth_else_veggies.png";

import {
  EmptyImgWrapper,
  EmptyText,
  EmptyWrapper,
} from "./EmptySearchPage.styled.js";

const EmptyPage = () => {
  return (
    <EmptyWrapper>
      <EmptyImgWrapper>
        <picture>
          <source media="(min-width: 1440px)" srcSet={`${searchVegBg}`} />
          <source media="(min-width: 768px)" srcSet={`${searchVegBg}`} />
          <img
            src={searchVegBg}
            srcSet={`${searchVegBg}`}
            alt="no items found"
          />
        </picture>
      </EmptyImgWrapper>
      <EmptyText>Try looking for something else...</EmptyText>
    </EmptyWrapper>
  );
};

export default EmptyPage;
