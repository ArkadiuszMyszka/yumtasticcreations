import React, { useState } from 'react';
import './Footer.styled.css';

const Footer = () => {
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
        <div>
            <footer className="footer_container">
                <div className="container">
                    <div className="footer_logo">
                        <a href="/main">
                            <svg
                                width="44"
                                height="44"
                                alt="Website Logo"
                                src="/images/ui/logo/logo_mobile.svg" 
                                srcSet="./images/ui/logo/logo_desktop_tablet.svg 500w, ./images/ui/logo/logo_desktop_tablet.svg 1000w" 
                                sizes="(max-width: 767px) 500px, (min-width: 768px) and (max-width: 1439px) 768px, (min-width: 1440px) 1000px" 
                            />
                            <span className="footer_title">So Yummy</span>
                        </a>
                    </div>

                    <div className="footer_description">
                        <ul>
                            <li>Database of recipes that can be replenished </li>
                            <li>Flexible search for desired and unwanted ingredients</li>
                            <li>Ability to add your own recipes with photos</li>
                            <li>Convenient and easy to use</li>
                        </ul>
                    </div>

                    <nav className="footer_links">
                        <a className="footer_link_nav" href="/search">Ingredients</a>
                        <a className="footer_link_nav" href="/add">Add recipes</a>
                        <a className="footer_link_nav" href="/my">My recipes</a>
                        <a className="footer_link_nav" href="/favorite">Favorite</a>
                        <a className="footer_link_nav" href="/shopping-list">Shopping list</a>
                    </nav>

                    <div className="footer_newsletter">
                        <span className='footer_description_newsletter'><h3>Subscribe to our Newsletter</h3></span>
                        <span className='footer_description_newsletter'><p>Subscribe to our newsletter. Be in touch with latest news and special offers, etc.</p></span>
                        <form className='footer_form' onSubmit={handleSubmit}>
                            <div className={`email_input_container ${!isValidEmail && email !== '' ? 'invalid' : ''}`}>
                                <svg width="16" height="12" src="./images/ui/input/input_email.svg" alt="Email Icon" />
                                <input 
                                    className='footer_input' 
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
                            <button 
                                className='footer_button' 
                                type="submit" 
                                disabled={!isValidEmail || email === ''}
                            >
                                Subscribe
                            </button>
                            {!isValidEmail && email !== '' && (
                                <p className="footer_error_message">Your email is not valid</p>
                            )}
                        </form>
                    </div>
                    
                    <div className="footer_social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="16" src="./images/ui/social_media/facebook.svg" alt="Facebook"/>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="16" src="./images/ui/social_media/youtube.svg" alt="Youtube"/>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="16" src="./images/ui/social_media/twitter.svg" alt="Twitter"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="16" src="./images/ui/social_media/instagram.svg" alt="Instagram"/>
                        </a>
                    </div>
                </div>
            </footer>
            <div className="footer_bottom_text">
                <span className='footer_bottom_first_element'>© 2023 All Rights Reserved.</span>
                <span> Terms of Service</span>
            </div>
        </div>
    );
}

export default Footer;