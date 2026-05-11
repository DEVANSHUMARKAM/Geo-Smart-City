import { Container, Row, Col } from 'react-bootstrap'
import './About.css'

const MODULES = [
  {
    id: '01',
    title: 'UrbanGrowth',
    subtitle: 'Urbanization Prediction Engine',
    tag: "Forecast Tomorrow's City",
    tagColor: '#00e676',
    description:
      'UrbanGrowth uses mathematical modeling and decades of historical satellite imagery from Microsoft Planetary Computer to simulate how Nagpur will expand over the next 10–30 years. By analyzing land-use patterns, population density, and vegetation loss, it produces growth probability maps that planners can act on today.',
    impact: [
      { icon: '🏗️', title: 'Infrastructure Planning', text: 'Helps civic bodies decide where to build roads, water lines and power grids before urban sprawl reaches those zones.' },
      { icon: '🌿', title: 'Green Zone Protection', text: 'Flags areas at risk of encroachment so forests, wetlands and parks can be legally protected in advance.' },
      { icon: '📐', title: 'Zoning Decisions', text: 'Assists MRSAC and NMC in rezoning agricultural land to residential or commercial before informal settlements appear.' },
    ],
    stat: { value: '10+', label: 'Years of satellite data analyzed' },
    cardClass: 'about-module--green',
  },
  {
    id: '02',
    title: 'CrimeOps',
    subtitle: 'Spatial Crime Intelligence Platform',
    tag: 'Smarter Patrols, Safer Streets',
    tagColor: '#00b4ff',
    description:
      'CrimeOps processes every historical crime record logged in Nagpur and runs DBSCAN spatial clustering using PostGIS to identify high-density hotspots. The platform recommends exactly where patrol routes should go, where kobans should be placed, and where surveillance cameras will have the highest impact — before crime escalates.',
    impact: [
      { icon: '🚔', title: 'Optimized Patrol Routes', text: 'Police resources are directed to statistically high-risk zones instead of being spread thin across the entire city.' },
      { icon: '📍', title: 'Koban Placement', text: 'Identifies the precise intersections where a permanent police post reduces response time the most.' },
      { icon: '📊', title: 'Daily Intelligence Reports', text: 'Auto-generates PDF reports with charts and cluster maps every day so commanders have data at morning briefing.' },
    ],
    stat: { value: '11', label: 'Police station jurisdictions mapped' },
    cardClass: 'about-module--blue',
  },
  {
    id: '03',
    title: 'TaxVision',
    subtitle: 'Smart City Audit & Governance System',
    tag: 'Honest Floors, Honest Taxes',
    tagColor: '#ff6b35',
    description:
      'TaxVision cross-references 3D building footprint data extracted from Google Open Buildings with the NMC tax registry. Using area-mismatch detection, it flags properties with illegal extensions, double-sold plots, and tax evaders — while rewarding properties with healthy vegetation through an NDVI-based green scoring system.',
    impact: [
      { icon: '🏛️', title: 'Illegal Construction Detection', text: 'Automatically flags any building whose satellite footprint is 20% larger than what is registered with the municipality.' },
      { icon: '💰', title: 'Tax Revenue Recovery', text: 'Identifies chronic tax defaulters and fraud cases so NMC can recover lost revenue without manual audits.' },
      { icon: '🌱', title: 'Green Reward System', text: 'Properties with high NDVI vegetation scores receive tax incentives, encouraging residents to maintain gardens and trees.' },
    ],
    stat: { value: '11,542', label: 'Buildings audited in Ward 31' },
    cardClass: 'about-module--orange',
  },
]

const About = () => {
  return (
    <section className="about" id="about">
      <Container fluid="xxl" className="px-4">

        {/* Section header */}
        <div className="about__header">
          <span className="about__eyebrow">About the Platform</span>
          <h2 className="about__title">Built for the city. Powered by data.</h2>
          <p className="about__sub">
            GeoSmart.City is a unified geospatial intelligence suite developed at the Maharashtra
            Remote Sensing Application Centre (MRSAC), Nagpur. Each module targets a specific
            urban governance problem — and together they form a complete civic intelligence layer
            for the city of tomorrow.
          </p>
        </div>

        {/* Module deep-dives — alternating layout */}
        <div className="about__modules">
          {MODULES.map((mod, i) => (
            <div key={mod.id} className={`about-module ${mod.cardClass} ${i % 2 !== 0 ? 'about-module--reverse' : ''}`}>

              {/* Left: Info panel */}
              <div className="about-module__info">
                <div className="about-module__id">MODULE {mod.id}</div>
                <span className="about-module__tag" style={{ color: mod.tagColor }}>
                  {mod.tag}
                </span>
                <h3 className="about-module__title">{mod.title}</h3>
                <p className="about-module__subtitle">{mod.subtitle}</p>
                <p className="about-module__desc">{mod.description}</p>

                {/* Stat pill */}
                <div className="about-module__stat" style={{ borderColor: mod.tagColor + '33', background: mod.tagColor + '0d' }}>
                  <span className="about-module__stat-value" style={{ color: mod.tagColor }}>
                    {mod.stat.value}
                  </span>
                  <span className="about-module__stat-label">{mod.stat.label}</span>
                </div>
              </div>

              {/* Right: Impact cards */}
              <div className="about-module__impacts">
                {mod.impact.map((item, j) => (
                  <div
                    key={j}
                    className="impact-card"
                    style={{ '--impact-color': mod.tagColor }}
                  >
                    <div className="impact-card__icon">{item.icon}</div>
                    <div>
                      <div className="impact-card__title">{item.title}</div>
                      <div className="impact-card__text">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default About