import "../assets/styles/Experience.css";

import AccentureLogo from "../assets/images/Accenture-logo.png";
import ELLogo from "../assets/images/El-logo.png";
import CSULogo from "../assets/images/CSU-logo.png";
import EkspertoLogo from "../assets/images/Eksperto-logo.png";
import CagayanECLogo from "../assets/images/CagayanEC-logo.png";
import WorkLogo from "../assets/icons/menu4.png";
import wave4 from "../assets/images/wave4.svg";
import LeftSplash from "../assets/icons/left-splash2.png";
import RightSplash from "../assets/icons/right-splash2.png";

const experienceData = [
  {
    id: 1,
    period: "April 2026 – Present",
    role: "ASE Trainee - AmplifAI Batch 6",
    company: "Accenture",
    location: "Mandaluyong City, PH",
    bullets: [
      "Trained for 2 months under the Spring Framework and completed the Codility Assessment and Java Bootcamp.",
      "Trained an additional month in Front-End Development using the React framework and JavaScript.",
      "Passed with a final grade that satisfies the P2/Mettl assesment score"
    ],
    logo: AccentureLogo,
    logoAlt: "Accenture logo",
    current: true,
  },
  {
    id: 2,
    period: "Apr 2025 – Feb 2026",
    role: "Junior IT Support Staff",
    company: "EL Instrumentation and Industrial Automation Technical Services Inc.",
    location: "Lipa City, PH",
    bullets: [
      "Set up and repaired computer workstations used in the instrumentation labs, ensuring all peripheral devices were functioning properly.",
    ],
    logo: ELLogo,
    logoAlt: "EL Instrumentation logo",
    current: false,
  },
  {
    id: 3,
    period: "Jan 2024 – June 2024",
    role: "Junior Developer Intern",
    company: "Eksperto Team, Startup Company",
    location: "Cagayan, PH",
    bullets: [
      "Trained to use the Laravel Framework and integrated as a member of a team project.",
      "Worked within an Agile SDLC structure across multiple development cycles.",
      "Designed a prototype of the admin page using Laravel, Node.js, and Tailwind CSS.",
    ],
    logo: EkspertoLogo,
    logoAlt: "Eksperto Team logo",
    current: false,
  },
  {
    id: 4,
    period: "Jun 2023 – Dec 2023",
    role: "IT Part-Time Faculty Staff",
    company: "Cagayan State University, Aparri Campus",
    location: "Cagayan, PH",
    bullets: [
      "Became a member of the CICS family and worked as staff during university events.",
      "Designed and published the front-end of the organization's website (cicsportal.csuaparri.net).",
    ],
    logo: CSULogo,
    logoAlt: "Cagayan State University logo",
    current: false,
  },
  {
    id: 5,
    period: "Jun 2019 – Feb 2020",
    role: "Student Office Assistant – OJT",
    company: "Cagayan II Electric Cooperative, Inc.",
    location: "Cagayan, PH",
    bullets: [
      "Acted as frontline customer service for handling complaints and uncooperative consumers.",
    ],
    logo: CagayanECLogo,
    logoAlt: "Cagayan II Electric Cooperative logo",
    current: false,
  },
];

function Experience() {
  return (
    <section className="exp-section" id="experience">
      <div className="exp-container">
        <img className="exp-wave" src={wave4} alt="" aria-hidden="true" />
        {/* Header — decos live here, same as Education */}
        <div className="exp-header">
          <span className="exp-header-icon">
            <img className="work-logo" src={WorkLogo} alt="Work icon" />
          </span>
          <div className="exp-title">
            <h1>Work <br/> Experience</h1>
            <img className="exp-deco-left" src={LeftSplash} alt="" aria-hidden="true" />
            <img className="exp-deco-right" src={RightSplash} alt="" aria-hidden="true" />
          </div>
          <p className="exp-subtitle">
            Through hands-on experience in software development and modern web technologies, I've collaborated on real-world projects that strengthened my technical foundation while reinforcing the importance of teamwork, adaptability, and delivering solutions that meet both business and user needs.
          </p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          {experienceData.map((item) => (
            <div className="exp-entry" key={item.id}>

              <div className="exp-spine">
                <div className={`exp-dot${item.current ? " exp-dot--active" : ""}`} />
              </div>

              <div className="exp-card">
                <img
                  className="exp-card-logo"
                  src={item.logo}
                  alt={item.logoAlt}
                />
                <span className="exp-period">{item.period}</span>
                <h3 className="exp-role">{item.role}</h3>
                <p className="exp-company">{item.company}</p>
                {item.location && (
                  <p className="exp-location">{item.location}</p>
                )}
                <ul className="exp-bullets">
                  {item.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;