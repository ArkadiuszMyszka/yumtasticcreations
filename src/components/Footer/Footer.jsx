import React, { useState } from 'react';
import icons_footer from "../../images/ui/social_media/icons_footer.svg";
import logo_mobile from "../../images/ui/logo/logo_mobile.svg";
import { FooterBox, StyledFooter, Info, InfoTextBold, SocialMedia, Icon, Svg, About, AboutItem, Nav, NavItem, Logo, LogoSvg, LogoName, Newsletter, NewsletterTitle, NewsletterTxt, Form, Input, Button, ErrorMsg } from './Footer.styled.jsx';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        setIsValidEmail(isValid);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
    };

    return (
        <FooterBox>
            <StyledFooter>
                    <Logo>
                        <a href="/main">
                            <LogoSvg><use href={`${logo_mobile}`}></use></LogoSvg> 
                            {/* note-to-self:    przerobić logo na sprite */}
                        </a>
                        <LogoName>So Yummy</LogoName>
                    </Logo>

                    <About>
                        <ul>
                            <AboutItem>Database of recipes that can be replenished </AboutItem>
                            <AboutItem>Flexible search for desired and unwanted ingredients</AboutItem>
                            <AboutItem>Ability to add your own recipes with photos</AboutItem>
                            <AboutItem>Convenient and easy to use</AboutItem>
                        </ul>
                    </About>

                    <Nav>
                        <NavItem href="/search">Ingredients</NavItem>
                        <NavItem href="/add">Add recipes</NavItem>
                        <NavItem href="/my">My recipes</NavItem>
                        <NavItem href="/favorite">Favorite</NavItem>
                        <NavItem href="/shopping-list">Shopping list</NavItem>
                    </Nav>

                    <Newsletter>
                        <NewsletterTitle>Subscribe to our Newsletter</NewsletterTitle>
                        <NewsletterTxt>Subscribe to our newsletter. Be in touch with latest news and special offers, etc.</NewsletterTxt>
                        <Form onSubmit={handleSubmit}>
                            <div className={`email_input_container ${!isValidEmail && email !== '' ? 'invalid' : ''}`}>
                                <svg width="16" height="12" src="./images/ui/input/input_email.svg" alt="Email Icon" />
                                <Input
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                {isValidEmail && email !== '' && (
                                    <svg width="16" height="12" src="/src/images/input/input_error.svg" alt="Valid Email Icon" />
                                )}
                                {!isValidEmail && email !== '' && (
                                    <svg width="16" height="12" src="./images/input/input_ok.svg" alt="Invalid Email Icon" />
                                )}
                            </div>
                            <Button
                                className='footer_button' 
                                type="submit" 
                                disabled={!isValidEmail || email === ''}
                            >
                                Subscribe
                            </Button>
                            {!isValidEmail && email !== '' && (
                                <ErrorMsg>Your email is not valid</ErrorMsg>
                            )}
                        </Form>
                    </Newsletter>
                    
                    <SocialMedia>
                        <Icon href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Svg><use href={`${icons_footer}#icon-facebook`}></use></Svg>
                        </Icon>
                        <Icon href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <Svg><use href={`${icons_footer}#icon-youtube`}></use></Svg>
                        </Icon>
                        <Icon href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <Svg><use href={`${icons_footer}#icon-twitter`}></use></Svg>
                        </Icon>
                        <Icon href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <Svg><use href={`${icons_footer}#icon-instagram`}></use></Svg>
                        </Icon>
                    </SocialMedia>
            </StyledFooter>
            <Info>
                <InfoTextBold className='footer_bottom_first_element'>© 2023 All Rights Reserved.</InfoTextBold>
                <span>Terms of Service</span>
            </Info>
        </FooterBox>
    );
}
