import "../assets/styles/Education.css";

import CSULogo from "../assets/images/CSU-logo.png";
import AMALogo from "../assets/images/AMA-logo.png";
import SPSALogo from "../assets/images/SPSA-logo.png";
import EduLogo from "../assets/icons/education.png";
import LeftSplash from "../assets/icons/left-splash.png";
import RightSplash from "../assets/icons/right-splash.png";
import wave2 from "../assets/images/wave2.svg";
const educationData = [
  {
    id: 1,
    period: "2025 – Present",
    degree: "Master of Science in Information Technology",
    school: "Cagayan State University",
    location: "Aparri, Cagayan",
    description: "Advancing expertise in IT research, systems design, and emerging technologies.",
    logo: CSULogo,
    logoAlt: "Cagayan State University logo",
    current: true,
  },
  {
    id: 2,
    period: "2021 – 2025",
    degree: "Bachelor of Science in Information Technology",
    school: "AMA Philippines",
    location: "Tuguegarao City",
    description: "Focused on software development, UI/UX design, and database systems.",
    logo: AMALogo,
    logoAlt: "AMA Philippines logo",
    current: false,
  },
  {
    id: 3,
    period: "2016 – 2020",
    degree: "Junior High School Diploma",
    school: "St. Paul School of Aparri",
    location: "Aparri, Cagayan",
    description: "Completed the SPSA K-12 Program with GAS Certification and Senior High School Diploma.",
    logo: SPSALogo,
    logoAlt: "St. Paul School of Aparri logo",
    current: false,
  },
];

function Education() {
  return (
    <section className="edu-section" id="education">
      <img src={wave2} alt="wave" className="edu-wave" />
      <div className="edu-container">
        <div className="edu-header">
          <span className="edu-header-icon">
            <img className="edu-logo" src={EduLogo} alt="Education icon" />
          </span>
          <span className="edu-title">
            <h1>Educational <br /> Background</h1>
            <img className="edu-deco-left" src={LeftSplash} alt="" aria-hidden="true" />
            <img className="edu-deco-right" src={RightSplash} alt="" aria-hidden="true" />
          </span>
          <p className="edu-subtitle">
            Education has been more than earning grades—it's been about developing the mindset to learn, adapt, and create. With coffee by my side and curiosity leading the way, every challenge became another step toward becoming a better developer and lifelong learner.
          </p>
        </div>
        <div className="edu-timeline">
          {educationData.map((item) => (
            <div className="edu-entry" key={item.id}>

              <div className="edu-spine">
                <div className={`edu-dot${item.current ? " edu-dot--active" : ""}`} />
              </div>

              <div className="edu-card">
                <img
                  className="edu-card-logo"
                  src={item.logo}
                  alt={item.logoAlt}
                />
                <span className="edu-period">{item.period}</span>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-school">{item.school}</p>
                <p className="edu-location">{item.location}</p>
                <p className="edu-description">{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;