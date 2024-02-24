import styled from "styled-components";
import backgroundCenter from "../../images/graphics/spinach_2.png";
import backgroundLeft from "../../images/graphics/spinach_1.png";
import saladImage from "../../images/graphics/salad.png";
import greenTrail from "../../images/ui/other_icons/green_trail.svg";
import greenArrow from "../../images/ui/other_icons/green_arrow.svg";
import { useMediaQuery } from "react-responsive";

export const Background = styled.main`
  width: 100vw;
  // height: 100vh;
  height: 713px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-x: hidden;
  // background-color: #fafafa;
  @media (min-width: 768px) and (max-width: 1199px) {
    height: 576px;
  }
  @media (min-width: 1200px) {
    height: 736px;
  }
`;

export const CenterLeaf = styled.div`
background-repeat: no-repeat;
background-position: 35% 10%;
background-size: 750px;
`;

export const CenterImage = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundCenter});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  clip-path: polygon(20% 10%, 100% 0, 99% 99%, 0 99%);
  @media (min-width: 768px) and (max-width: 1199px) {
    background-size: contain;
    top: -20%;
    left: 150px;
  }
  @media (min-width: 1200px) {
    background-position: right;
    background-size: 944px 676px;
    top: -12%;
    border-radius: 10px;
    outline: none;
  }
`;
export const TopLeftImage = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundLeft});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: calc(7% + 20px);
  filter: blur(4px);
`;

export const BackgroundSquare = styled.div`
  position: absolute;
  width: calc(30vw + 850px);
  height: calc(30vh + 650px);
  background-color: #ebf3d4;
  transform: rotate(45deg);
  left: 80%;
  top: -5%;
  @media (min-width: 768px) and (max-width: 1199px) {
    clip-path: polygon(10% 10%, 100% 0, 99% 90%, 0 99%);
    border-radius: 0 0 0 150px;
    width: 1441px;
    height: 912px;
    left: 500px;
    top: -140px;
    background: #ebf3d4;
    transform: rotate(25.57deg);
  }
  @media (min-width: 1200px) {
    clip-path: polygon(20% 10%, 100% 0, 99% 70%, 0 99%);
    border-radius: 0 0 0 150px;
    width: 1441px;
    height: 912px;
    left: 733px;
    top: -200px;

    background: #ebf3d4;
    transform: rotate(10.57deg);
  }
`;
export const Container = styled.div`
  @media (min-width: 1200px) {
    width: 100vw;
    margin: 0 100px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 832px;
    margin: 0 32px;
    flex-direction: row;
  }
  width: 343px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  font-family: Poppins;
  font-style: normal;
  margin: 0 16px;
  z-index: 2;
`;

export const Recipes = styled.main`
  // position: relative;
  height: 296px;
  width: 320px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${saladImage});
  margin-top: 44px;
  display: flex;
  // justify-content: center;
  align-self: center;
  @media (min-width: 768px) and (max-width: 1199px) {
    height: 351px;
    width: 378px;
    margin-top: 94px;
    margin-right: -40px;
    margin-top: 97px;
  }
  @media (min-width: 1200px) {
    width: 578px;
    height: 539px;
    margin-right: 80px;
  }
`;

export const RecipesDescription = styled.p`
  @media (min-width: 1200px) {
    position: absolute;
    padding: 16px;
    width: 266px;
    font-size: 14px;
    // margin: 55% auto auto 60%;
    margin: 24% auto auto 23%;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 12px;
    width: 235px;
    text-align: auto;
    font-size: 14px;
    line-height: 1.28571;
    margin: 58% auto auto 19%;
  }
  margin: 42% auto auto 29%;
  width: 209px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  background-color: #fafafa;
  border-radius: 8px;
  padding: 8px;
  color: #3e4462;
`;

export const RecipesButton = styled.button`
  margin-top: 4px;
  margin-left: auto;
  background: none;
  display: flex;
  align-items: center;
  border: none;
  font-size: 10px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  padding: 0;
  color: #3e4462;
  transition: 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

export const ArrowSVG = styled.img`
  width: 19px;
  height: 18px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.01em;
  margin-top: 68px;
  margin-bottom: 14px;
  text-align: center;
  color: #22252a;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 72px;
    margin-top: 140px;
    margin-bottom: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 100px;
    margin-top: 162px;
  }
`;
export const TitleLeft = styled.text`
  color: #8baa36;
`;

export const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
   margin-left: 100px;
  }
`;

export const TitleDescription = styled.text`
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 248px;
  color: #23262a;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 362px;
    text-align: left;
  }
  @media (min-width: 1200px) {
    width: 465px;
    font-size: 18px;
  }
`;

export const Highlight = styled.text`
  color: #8baa36;
`;

export const LabelContainer = styled.div`
display: isTablet ? "none" : "block" 
`

export const LabelStyled = () => {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1199px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width:1200px)" });

  const Label = {
    position: "relative",
    display: "flex",
    flexDirection: "rowReverse",
    justifyContent: "center",
    transform: "skewX(20deg)",
    background: "#FFFFFF",
    borderRadius: "50px",
    width: isDesktop ? 510 : isTablet ? 365 : 295,
    marginTop: 24,
  };

  const Input = {
    padding: "17px 0 17px 32px",
    border: "none",
    background: "none",
    outline: "none",
    marginRight: "auto",
  };
  const Button = {
    borderRadius: "50px",
    background: "#22252a",
    color: "white",
    width: isTablet || isDesktop ? "161px" : "113px",
    height: isDesktop ? "70px" : isTablet ? "59px" : "52px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",

    left: isDesktop ? "78%" : isTablet ? "57%" : "63%",
    border: "none",
  };

  const InputText = {
    transform: "skewX(-20deg)",
    fontSize: isDesktop || isTablet ? "16px" : "12px",
    fontFamily: "Poppins",
    letterSpacing: "0%",
  };
  const ButtonText = {
    transform: "skewX(-20deg)",
    fontFamily: "Poppins",
    fontSize: isDesktop || isTablet ? "16px" : "14px",
    letterSpacing: "0%",
  };
  const Flex = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={Flex}>
      <label style={Label}>
        <input
          type="text"
          placeholder="Beef |"
          style={{ ...Input, ...InputText }}
        />

        <button style={{ ...Button }} type="submit">
          <p style={ButtonText}>Search</p>
        </button>
      </label>
    </div>
  );
};

export const TrailedArrow = () => {
  const TabletUp = useMediaQuery({ query: "(min-width:768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1199px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width:1200px)" });
  const TrailContainer = {
    width: isDesktop ? "167px" : "136px",
    height: isDesktop ? "89px" : "72px",
    position: "relative",
    transform: isDesktop
      ? "rotate(-8deg)"
      : isTablet
      ? "rotate(6deg)"
      : "rotate(5deg)",
    zIndex: 1,
  };
  const TrailSVG = {
    zIndex: 1,
    position: "absolute",
    overflow: "visible",
    width: "100%",
    height: "100%",
    top: isDesktop ? "30px" : isTablet ? "10px" : "30px",
    left: isDesktop ? "30px" : isTablet ? "60px" : "30px",
  };

  const GreenArrowSVG = {
    zIndex: 1,
    position: "absolute",
    top: isDesktop ? "45px" : isTablet ? "20px" : "40px",
    left: isDesktop ? "180px" : isTablet ? "182px" : "130px",
    width: isDesktop ? "32px" : isTablet ? "25px" : "0",
    transform: isTablet ? "rotate(-10deg)" : "0",
  };
  const EmptyDiv = {
    position: "absolute",
  };
  return (
    <div style={EmptyDiv}>
      {TabletUp && (
        <div style={TrailContainer}>
          <img src={greenTrail} style={TrailSVG} alt="green trail"></img>
          <img src={greenArrow} style={GreenArrowSVG} alt="green arrow"></img>
        </div>
      )}
    </div>
  );
};
