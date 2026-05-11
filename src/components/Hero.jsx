import { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Hero.css'
// import heroBg from '../assets/hero-city.jpg'

const STATS = [
    { end: 3, suffix: '', label: 'Integrated Modules' },
    { end: 10, suffix: '+ yrs', label: 'Historical Data' },
    { end: 100, suffix: '%', label: 'Geo-Driven' },
]

function StatItem({ end, suffix, label, active, delay }) {
    const [val, setVal] = useState(0)

    useEffect(() => {
        if (!active) return
        let start = null
        const duration = 1400 + delay * 150

        const animate = (ts) => {
            if (!start) start = ts
            const progress = Math.min((ts - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setVal(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
            else setVal(end)
        }
        requestAnimationFrame(animate)
    }, [active])

    return (
        <div className="hero__stat">
            <span className="hero__stat-value">{val}{suffix}</span>
            <span className="hero__stat-label">{label}</span>
        </div>
    )
}

const Hero = () => {
    const [statsActive, setStatsActive] = useState(false)
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStatsActive(true) },
            { threshold: 0.5 }
        )
        if (statsRef.current) observer.observe(statsRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="hero">

            <div className="hero__bg">
                {/* <div
                    className="hero__bg-image"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className="hero__bg-overlay" />   dark overlay on top */}
                <div className="hero__glow hero__glow--1" />
                <div className="hero__glow hero__glow--2" />
                <div className="hero__grid" />
            </div>

            <Container fluid="xxl" className="px-4">
                <Row>
                    <Col lg={8} xl={7}>

                        {/* Badge */}
                        <div className="hero__badge">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#00d9e8">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            Geo-Intelligent Smart City Platform · Nagpur
                        </div>

                        {/* Headline */}
                        <h1 className="hero__heading">
                            <span className="hero__heading-white">One platform.</span>
                            <span className="hero__heading-cyan">Three intelligent modules.</span>
                        </h1>

                        {/* Subtext */}
                        <p className="hero__sub">
                            Predict urban growth, optimize public safety and audit civic taxes —
                            unified under a single geospatial intelligence umbrella for the city of tomorrow.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex gap-3 flex-wrap hero__btns">
                            <Button href="#modules" className="hero__btn hero__btn--primary d-flex align-items-center gap-2">
                                View modules
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Button>
                            <Button href="#about" className="hero__btn hero__btn--secondary">
                                Learn more
                            </Button>
                        </div>

                    </Col>
                </Row>

                {/* Stats bar */}
                <div className="hero__stats" ref={statsRef}>
                    {STATS.map((s, i) => (
                        <StatItem key={i} {...s} active={statsActive} delay={i} />
                    ))}
                </div>

            </Container>
        </section>
    )
}

export default Hero