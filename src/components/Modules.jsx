import { Container, Row, Col } from 'react-bootstrap'
import './Modules.css'

// Replace these with your actual image imports once you drop them in src/assets/
import imgUrbanGrowth from '../assets/urbanization.png'
import imgCrimeOps    from '../assets/crimeops.png'
import imgTaxVision   from '../assets/smartaudit.png'

const MODULES = [
  {
    id: '01',
    tag: "Forecast Tomorrow's City",
    title: 'UrbanGrowth',
    desc: 'Utilizes all historical satellite imagery using mathematical algorithms to predict where Nagpur will expand next — guiding planners, infrastructure and zoning decisions.',
    cta: 'Open module',
    url: 'https://urban-cast.vercel.app/',   // ← replace with your deployed URL
    image: imgUrbanGrowth,
    color: '#00e676',
    gradient: 'linear-gradient(160deg, #1a6b3a 0%, #0d4f2a 100%)',
    cardClass: 'module-card--green',
  },
  {
    id: '02',
    tag: 'Smarter Patrols, Safer Streets',
    title: 'CrimeOps',
    desc: 'Analyze every historical crime in Nagpur using DBSCAN spatial clustering to recommend optimal placement of patrol routes, kobans and surveillance cameras.',
    cta: 'Open module',
    url: 'https://crimeops.onrender.com',       // ← replace with your deployed URL
    image: imgCrimeOps,
    color: '#00b4ff',
    gradient: 'linear-gradient(160deg, #0d3a6b 0%, #091f45 100%)',
    cardClass: 'module-card--blue',
  },
  {
    id: '03',
    tag: 'Honest Floors, Honest Taxes',
    title: 'TaxVision',
    desc: 'Using 3D building footprint data and satellite imagery to detect illegal construction, flag tax evaders and reward properties with green cover through NDVI scoring.',
    cta: 'Open module',
    url: 'https://tax-vision-frontend.onrender.com/',      // ← replace with your deployed URL
    image: imgTaxVision,
    color: '#ff6b35',
    gradient: 'linear-gradient(160deg, #7a2a10 0%, #5a1a08 100%)',
    cardClass: 'module-card--orange',
  },
]

const Modules = () => {
  return (
    <section className="modules" id="modules">
      <Container fluid="xxl" className="px-4">

        {/* Section header */}
        <div className="modules__header">
          <span className="modules__eyebrow">The Suite</span>
          <h2 className="modules__title">Three modules. One mission.</h2>
          <p className="modules__sub">
            Each module is independent, production-ready, and data driven by its civic
            mission — growth, safety, and accountability. Click on any card to explore the live module and see how it can help Nagpur become a smarter, safer, and more sustainable city. 
            Get ready to dive into the data and discover insights that can transform urban life in Nagpur!  
          </p>
        </div>

        {/* Cards grid */}
        <Row className="g-4">
          {MODULES.map((mod, i) => (
            <Col key={mod.id} md={6} lg={4}>
              <a
                href={mod.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`module-card ${mod.cardClass}`}
                style={{ '--card-color': mod.color }}
              >
                {/* Top image area */}
                <div className="module-card__visual" style={{ background: mod.gradient }}>
                  <div className="module-card__badge-left">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.5 18.5l6-6 4 4L22 6.92"/>
                    </svg>
                    Module {mod.id}
                  </div>
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="module-card__img"
                  />
                </div>

                {/* Bottom content area */}
                <div className="module-card__body">
                  <span className="module-card__tag">{mod.tag}</span>
                  <h3 className="module-card__title">{mod.title}</h3>
                  <p className="module-card__desc">{mod.desc}</p>
                  <div className="module-card__cta">
                    {mod.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>

                {/* Bottom glow border */}
                <div className="module-card__glow-border" />
              </a>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  )
}

export default Modules