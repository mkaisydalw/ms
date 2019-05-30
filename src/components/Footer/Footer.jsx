//@flow
import React from 'react';
//$FlowFixMe
import './footer.css';

const Footer = ({
    currentIndex,
    amount,
    nextButton,
    prevButton,
    footerTitle,
}) => (
    <footer className="footer">
        {footerTitle && <div className="footer__title">{footerTitle}</div>}
        <div className="footer__counter" id="counter">
            {`${currentIndex} / ${amount}`}
        </div>
        <span className="arrow arrow--prev" href="#" onClick={prevButton} />
        <span className="arrow arrow--next" href="#" onClick={nextButton} />
    </footer>
)

export default Footer;