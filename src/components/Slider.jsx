import { useState, useEffect, useCallback, useRef } from 'react';
import image1 from '../images/01.jpeg';
import image2 from '../images/02.jpeg';
import image3 from '../images/03.jpeg';
import { Link } from 'react-router-dom';

const originalSlides = [
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
        emoji: "",
        image: image3,
    },
];


const extendedSlides = [
    { ...originalSlides[originalSlides.length - 1], _key: 'clone-last' },
    ...originalSlides.map(s => ({ ...s, _key: `real-${s.id}` })),
    { ...originalSlides[0], _key: 'clone-first' },
];

const REAL_COUNT = originalSlides.length;         // 3
const TRACK_LEN = extendedSlides.length;          // 5
const TRANSITION_MS = 650;
const AUTO_PLAY_INTERVAL = 4000;

export default function Slider() {
    // trackIndex 1..3 = real slides; 0 = clone-last; 4 = clone-first
    const [trackIndex, setTrackIndex] = useState(1);
    const [animated, setAnimated] = useState(true);
    const isJumping = useRef(false);

    // Which dot to highlight (0-based into originalSlides)
    const dotIndex = Math.min(Math.max(trackIndex - 1, 0), REAL_COUNT - 1);

    // Move track, with or without CSS transition
    const moveTo = useCallback((index, withAnim = true) => {
        setAnimated(withAnim);
        setTrackIndex(index);
    }, []);

    const goNext = useCallback(() => {
        if (isJumping.current) return;
        moveTo(trackIndex + 1);
    }, [trackIndex, moveTo]);

    const goPrev = useCallback(() => {
        if (isJumping.current) return;
        moveTo(trackIndex - 1);
    }, [trackIndex, moveTo]);

    // After the CSS transition finishes on a clone, jump silently to the real slide
    useEffect(() => {
        // Landed on clone-of-first (end of track) → jump to real first
        if (trackIndex === TRACK_LEN - 1) {
            isJumping.current = true;
            const t = setTimeout(() => {
                moveTo(1, false);          // no animation
                setTimeout(() => { isJumping.current = false; }, 50);
            }, TRANSITION_MS);
            return () => clearTimeout(t);
        }
        // Landed on clone-of-last (start of track) → jump to real last
        if (trackIndex === 0) {
            isJumping.current = true;
            const t = setTimeout(() => {
                moveTo(REAL_COUNT, false); // no animation
                setTimeout(() => { isJumping.current = false; }, 50);
            }, TRANSITION_MS);
            return () => clearTimeout(t);
        }
    }, [trackIndex, moveTo]);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(goNext, AUTO_PLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [goNext]);

    return (
        <section className="slider-section">
            <div className="slider-wrapper">

                {/* Sliding track */}
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${trackIndex * 100}%)`,
                        transition: animated
                            ? `transform ${TRANSITION_MS}ms cubic-bezier(0.56, 0.03, 0.12, 1.04)`
                            : 'none',
                    }}
                >
                    {extendedSlides.map((slide, i) => (
                        <div key={slide._key} className={`slide ${slide.bg}`}>

                            {/* Decorative floating shapes */}
                            <div className="slide-shape slide-shape-1"></div>
                            <div className="slide-shape slide-shape-2"></div>
                            <div className="slide-shape slide-shape-3"></div>

                            <div className="slide-content container">
                                <div className="slide-text">
                                    <span className="slide-label">{slide.label}</span>
                                    <h2 className="slide-title">
                                        {slide.emoji && <span className="slide-emoji">{slide.emoji}</span>}
                                        {slide.title}
                                    </h2>
                                    <p className="slide-subtitle">{slide.subtitle}</p>
                                    <Link to="/order" className="slide-btn">
                                        Shop Now
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>

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
                </div>

                {/* Arrows */}
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

                {/* Dot Indicators (only 3 dots for real slides) */}
                <div className="slider-indicators" role="tablist" aria-label="Slide indicators">
                    {originalSlides.map((slide, index) => (
                        <button
                            key={slide.id}
                            role="tab"
                            aria-selected={index === dotIndex}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`indicator-dot ${index === dotIndex ? 'indicator-dot-active' : ''}`}
                            onClick={() => moveTo(index + 1)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
