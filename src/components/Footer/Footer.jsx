//@flow
import React from 'react';
//$FlowFixMe
import './footer.css';

const Footer = ({
    currentIndex,
    amount,
    nextButton,
    prevButton,
}) => (
    <footer className="footer">
        <div className="footer__title">Disco Cry</div>
        <div className="footer__counter" id="counter">
            {`${currentIndex} / ${amount}`}
        </div>
        <span className="arrow arrow--prev" href="#" onClick={prevButton} />
        <span className="arrow arrow--next" href="#" onClick={nextButton} />
    </footer>
)

export default Footer;