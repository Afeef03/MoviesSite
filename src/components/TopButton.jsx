import React, { useState, useEffect } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const buttonStyle = {
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1,
    };

    return (
        <div>
            <button onClick={handleScrollToTop} style={buttonStyle}>
                <BsArrowUpCircleFill />
            </button>
        </div>
    );
};

export default TopButton;
