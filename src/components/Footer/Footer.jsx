import React, { useState } from "react";
import icons_footer from "../../images/ui/social_media/icons_footer.svg";
import logo from "../../images/ui/logo/logo.svg";
import icons from "../../images/ui/input/icons.svg";
import {
  FooterBox,
  StyledFooter,
  Info,
  InfoTextBold,
  SocialMedia,
  Svg,
  Box,
  AboutBox,
  About,
  AboutItem,
  Nav,
  NavItem,
  Logo,
  LogoSvg,
  LogoName,
  Newsletter,
  NewsletterTitle,
  NewsletterTxt,
  Form,
  Input,
  InputBox,
  Button,
  ErrorMsg,
  MailSvg,
} from "./Footer.styled.jsx";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setIsValidEmail(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <FooterBox>
      <StyledFooter>
        <Box>
          <AboutBox>
            <Logo>
              <a href="/main">
                <LogoSvg>
                  <use href={`${logo}#icon-logo`}></use>
                </LogoSvg>
              </a>
              <LogoName>So Yummy</LogoName>
            </Logo>
            <About>
              <ul>
                <AboutItem>
                  Database of recipes that can be replenished{" "}
                </AboutItem>
                <AboutItem>
                  Flexible search for desired and unwanted ingredients
                </AboutItem>
                <AboutItem>
                  Ability to add your own recipes with photos
                </AboutItem>
                <AboutItem>Convenient and easy to use</AboutItem>
              </ul>
            </About>
          </AboutBox>
          <Nav>
            <NavItem href="/search">Ingredients</NavItem>
            <NavItem href="/add">Add recipes</NavItem>
            <NavItem href="/my">My recipes</NavItem>
            <NavItem href="/favorite">Favorite</NavItem>
            <NavItem href="/shopping-list">Shopping list</NavItem>
          </Nav>
        </Box>

        <Newsletter>
          <NewsletterTitle>Subscribe to our Newsletter</NewsletterTitle>
          <NewsletterTxt>
            Subscribe to our newsletter. Be in touch with latest news and
            special offers, etc.
          </NewsletterTxt>
          <Form onSubmit={handleSubmit}>
            <InputBox
              className={`email_input_container ${
                !isValidEmail && email !== "" ? "invalid" : ""
              }`}
            >
              <MailSvg>
                <use href={`${icons}#icon-input_mail`}></use>
              </MailSvg>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </InputBox>
            <Button type="submit" disabled={!isValidEmail && email !== ""}>
              Subscribe
            </Button>
            {!isValidEmail && email !== "" && (
              <ErrorMsg>Your email is not valid</ErrorMsg>
            )}
          </Form>
        </Newsletter>

        <SocialMedia>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg>
              <use href={`${icons_footer}#icon-facebook`}></use>
            </Svg>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg>
              <use href={`${icons_footer}#icon-youtube`}></use>
            </Svg>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg>
              <use href={`${icons_footer}#icon-twitter`}></use>
            </Svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg>
              <use href={`${icons_footer}#icon-instagram`}></use>
            </Svg>
          </a>
        </SocialMedia>
      </StyledFooter>
      <Info>
        <InfoTextBold className="footer_bottom_first_element">
          © 2023 All Rights Reserved.
        </InfoTextBold>
        <span>Terms of Service</span>
      </Info>
    </FooterBox>
  );
};

export default Footer;
