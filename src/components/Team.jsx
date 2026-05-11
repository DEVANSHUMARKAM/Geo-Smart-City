import { Container, Row, Col } from 'react-bootstrap'
import './Team.css'

// Add your passport photos to src/assets/ and update these imports
import photoKhandare   from '../assets/dev-sign.jpg'
import photoDevanshu   from '../assets/dev-sign.jpg'
import photoDivyanshu  from '../assets/dev-sign.jpg'
import photoAyush      from '../assets/dev-sign.jpg'

const GUIDE = {
  name: 'Shri Srinivas Khandare',
  role: 'Associate Scientist',
  org: 'MRSAC, Nagpur',
  photo: photoKhandare,
  bio: 'Project supervisor and domain expert at the Maharashtra Remote Sensing Application Centre. Guided the research direction, validated geospatial methodologies and provided institutional support throughout the internship.',
  badge: 'Project Guide',
}

const TEAM = [
  {
    name: 'Devanshu Markam',
    role: 'Backend Development and Database Management',
    photo: photoDevanshu,
    skills: ['FastAPI', 'Spring Boot', 'PostGIS', 'PostgreSQL'],
    color: '#00d9e8',
  },
  {
    name: 'Divyanshu Tayde',
    role: 'Project Planner & Frontend Developer',
    photo: photoDivyanshu,
    skills: ['React', 'UI/UX', 'Project Management', 'Leaflet.js'],
    color: '#00e676',
  },
  {
    name: 'Ayush Chandekar',
    role: 'Frontend Developer and Data Engineer',
    photo: photoAyush,
    skills: ['React', 'Bootstrap', 'CSS Animations', 'Figma'],
    color: '#ff6b35',
  },
]

const Team = () => {
  return (
    <section className="team" id="team">
      <Container fluid="xxl" className="px-4">

        {/* Header */}
        <div className="team__header">
          <span className="team__eyebrow">The Team</span>
          <h2 className="team__title">People behind the platform.</h2>
          <p className="team__sub">
            Built during a summer internship at MRSAC, Nagpur — by three engineering students
            and guided by an experienced geospatial scientist.
          </p>
        </div>

        {/* Guide card — full width, horizontal */}
        <div className="guide-card">
          <div className="guide-card__photo-wrap">
            <img src={GUIDE.photo} alt={GUIDE.name} className="guide-card__photo" />
            <div className="guide-card__photo-ring" />
          </div>
          <div className="guide-card__info">
            <span className="guide-card__badge">{GUIDE.badge}</span>
            <h3 className="guide-card__name">{GUIDE.name}</h3>
            <p className="guide-card__role">
              {GUIDE.role} <span className="guide-card__org">· {GUIDE.org}</span>
            </p>
            <p className="guide-card__bio">{GUIDE.bio}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="team__divider">
          <span>Intern Team</span>
        </div>

        {/* Team member cards */}
        <Row className="g-4 justify-content-center">
          {TEAM.map((member) => (
            <Col key={member.name} sm={6} lg={4}>
              <div
                className="member-card"
                style={{ '--member-color': member.color }}
              >
                {/* Top glow line */}
                <div className="member-card__top-line" />

                {/* Photo */}
                <div className="member-card__photo-wrap">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="member-card__photo"
                  />
                  <div className="member-card__photo-glow" />
                </div>

                {/* Info */}
                <div className="member-card__info">
                  <h3 className="member-card__name">{member.name}</h3>
                  <p className="member-card__role" style={{ color: member.color }}>
                    {member.role}
                  </p>
                </div>

                {/* Skill tags */}
                <div className="member-card__skills">
                  {member.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  )
}

export default Team