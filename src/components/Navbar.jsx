import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import './Navbar.css'

const AppNavbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <Navbar
            expand="lg"
            fixed="top"
            data-bs-theme="dark"                          // ← add this line
            className={`gs-navbar ${scrolled ? 'gs-navbar--scrolled' : ''}`}
        >
            <Container fluid="xxl" className="px-4">

                {/* Logo */}
                <Navbar.Brand href="/" className="gs-navbar__logo d-flex align-items-center gap-2">
                    <div className="gs-navbar__logo-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                    </div>
                    <span>GeoSmart<span className="gs-navbar__logo-dot">.City</span></span>
                </Navbar.Brand>

                {/* Hamburger toggle — Bootstrap handles this automatically */}
                <Navbar.Toggle aria-controls="main-nav" className="gs-navbar__toggle border-0" />

                <Navbar.Collapse id="main-nav">
                    {/* Nav links centered */}
                    <Nav className="mx-auto gap-lg-4">
                        <Nav.Link href="#modules" className="gs-navbar__link">Modules</Nav.Link>
                        <Nav.Link href="#about" className="gs-navbar__link">About</Nav.Link>
                        <Nav.Link href="#team" className="gs-navbar__link">Team</Nav.Link>
                        <Nav.Link href="#contact" className="gs-navbar__link">Contact</Nav.Link>
                    </Nav>

                    {/* CTA Button */}
                    <Button href="#modules" className="gs-navbar__cta d-flex align-items-center gap-2">
                        Know More
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Button>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default AppNavbar