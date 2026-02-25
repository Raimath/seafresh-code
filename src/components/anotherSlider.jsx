import { useState, useEffect, useCallback } from 'react';
import image1 from '../images/01.jpeg';
import image2 from '../images/02.jpeg';
import image3 from '../images/03.jpeg';

const slides = [
    {
        id: 1,
        title: "Fresh From The Ocean",
        subtitle: "Premium quality shrimp caught daily and delivered to your door.",
        label: "New Arrivals",
        bg: "slider-bg-1",
        emoji: "🦐",
        image: image1,
    },
    {
        id: 2,
        title: "Gourmet Seafood Platters",
        subtitle: "Experience the finest grilled shrimp with our chef-crafted recipes.",
        label: "Best Sellers",
        bg: "slider-bg-2",
        emoji: "🍤",
        image: image2,
    },
    {
        id: 3,
        title: "Fast & Fresh Delivery",
        subtitle: "Order now and get your favourite seafood delivered in under an hour.",
        label: "Special Offer",
        bg: "slider-bg-3",
        emoji: "🚀",
        image: image3,
    },
];

const AUTO_PLAY_INTERVAL = 4000;

export default function Slider() {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState('next');

    const goTo = useCallback((index, dir = 'next') => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(dir);
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 600);
    }, [isAnimating]);

    const goNext = useCallback(() => {
        goTo((current + 1) % slides.length, 'next');
    }, [current, goTo]);

    const goPrev = useCallback(() => {
        goTo((current - 1 + slides.length) % slides.length, 'prev');
    }, [current, goTo]);

    useEffect(() => {
        const timer = setInterval(goNext, AUTO_PLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [goNext]);

    return (
        <section className="slider-section">
            <div className="slider-wrapper">

                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${slide.bg} ${index === current ? 'slide-active' : ''} ${index === current && direction === 'next' ? 'slide-enter-next' : ''} ${index === current && direction === 'prev' ? 'slide-enter-prev' : ''}`}
                    >
                        {/* Decorative floating shapes */}
                        <div className="slide-shape slide-shape-1"></div>
                        <div className="slide-shape slide-shape-2"></div>
                        <div className="slide-shape slide-shape-3"></div>

                        <div className="slide-content container">
                            <div className="slide-text">
                                <span className="slide-label">{slide.label}</span>
                                <h2 className="slide-title">
                                    <span className="slide-emoji">{slide.emoji}</span>
                                    {slide.title}
                                </h2>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                                <button className="slide-btn">
                                    Shop Now
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Real image on the right side */}
                            <div className="slide-visual">
                                <div className="slide-img-frame">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="slide-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Prev / Next Arrow Buttons */}
                <button className="slider-arrow slider-arrow-prev" onClick={goPrev} aria-label="Previous slide">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button className="slider-arrow slider-arrow-next" onClick={goNext} aria-label="Next slide">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Dot Indicators */}
                <div className="slider-indicators" role="tablist" aria-label="Slide indicators">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            role="tab"
                            aria-selected={index === current}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`indicator-dot ${index === current ? 'indicator-dot-active' : ''}`}
                            onClick={() => goTo(index, index > current ? 'next' : 'prev')}
                        />
                    ))}
                </div>



            </div>
        </section>
    );
}
