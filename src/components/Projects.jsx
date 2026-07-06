import "../assets/styles/Projects.css";
import wave5 from "../assets/images/wave5.svg";
import preview1 from "../assets/previews/preview1.jpg";
import preview2 from "../assets/previews/preview2.jpg";
import preview3 from "../assets/previews/preview3.jpg";
import preview4 from "../assets/previews/preview4.jpg";
import preview5 from "../assets/previews/preview5.jpg";
import preview6 from "../assets/previews/preview6.jpg";
import preview7 from "../assets/previews/preview7.jpg";
import projectIcon1 from "../assets/icons/project1.png";
import projectIcon2 from "../assets/icons/project2.png";
import projectIcon3 from "../assets/icons/project3.png";
import projectIcon4 from "../assets/icons/project4.png";
import projectIcon5 from "../assets/icons/project5.png";
import projectIcon6 from "../assets/icons/project6.png";
import projectIcon7 from "../assets/icons/project7.png";
const projects = [
  {
    id: 1,
    drinkName: "Bamboo Grove",
    subtitle: "Ecommerce Demo",
    category: "Frontend",
    description:
      "A clean, responsive ecommerce demo storefront built with vanilla web technologies. Smooth browsing, product listings, and a polished shopping experience.",
    tools: ["Node.js"],
    languages: ["HTML", "CSS", "JavaScript", "Git", "SoraAI"],
    link: "https://polanch.github.io/BambooGrove/home.html",
    icon: <img src={projectIcon1} alt="Bamboo Grove icon" width="32" height="32" />,
    thumbnail: preview1,
  },
  {
    id: 2,
    drinkName: "CICS Online Portal",
    subtitle: "Full Stack Web App",
    category: "Full Stack",
    description:
      "An institutional online portal for CICS at CSU Aparri. Handles student records, scheduling, and administrative workflows in a unified system.",
    tools: ["Laravel", "Node.js", "Tailwind", "MySQL"],
    languages: ["HTML", "CSS", "PHP", "JavaScript"],
    link: "https://cicsportal.csuaparri.net/",
    icon: <img src={projectIcon2} alt="CICS Portal icon" width="32" height="32" />,
    thumbnail: preview2,
  },
  {
    id: 3,
    drinkName: "SmartPay",
    subtitle: "Admin Demo",
    category: "Full Stack",
    description:
      "A payment administration dashboard with transaction management, reporting, and user controls. Built for clarity and operational efficiency.",
    tools: ["Laravel", "MySQL", "Dockerfile"],
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/paulchristianmacaleng-blip/Project101",
    icon: <img src={projectIcon3} alt="SmartPay icon" width="32" height="32" />,
    thumbnail: preview3,
  },
  {
    id: 4,
    drinkName: "Yame Tshirt Shop",
    subtitle: "Shop Demo",
    category: "Full Stack",
    description:
      "A full-featured t-shirt shop demo with product catalog, cart, and order management. End-to-end from storefront to backend.",
    tools: ["Laravel", "MySQL"],
    languages: ["HTML", "PHP", "CSS", "JavaScript"],
    link: "https://github.com/Polanch/Shop-demo",
    icon: <img src={projectIcon4} alt="Yame Shop icon" width="32" height="32" />,
    thumbnail: preview4,
  },
  {
    id: 5,
    drinkName: "Contacts Application",
    subtitle: "Frontend Demo",
    category: "Frontend",
    description:
      "A React-powered contacts manager with create, read, update, and delete functionality. Fast, minimal, and keyboard-friendly.",
    tools: ["React", "Node.js"],
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://polanch.github.io/ContactsApplication/",
    icon: <img src={projectIcon5} alt="Contacts App icon" width="32" height="32" />,
    thumbnail: preview5,
  },{
    id: 6,
    drinkName: "Daily Eggspress",
    subtitle: "Blogsite Demo",
    category: "Ongoing",
    description:
      "An ongoing project of mine to create a blog website using Laravel framework",
    tools: ["Laravel", "MySQL", "Node.js", "Git"],
    languages: ["HTML", "CSS", "JavaScript","PHP"],
    link: "https://github.com/Polanch/DailyEggspress",
    icon: <img src={projectIcon6} alt="Daily Eggspress icon" width="32" height="32" />,
    thumbnail: preview6,
  },{
    id: 7,
    drinkName: "TitoBrews App",
    subtitle: "POS System Demo",
    category: "Legacy",
    description:
      "I made this mockup of a POS system for a coffee shop as a personal project to practice my skills in C++ and mySQL. It features a simple interface for managing orders, inventory, and sales reports.",
    tools: ["Photoshop", "Apache", "Canva"],
    languages: ["C++", "PHP", "Javascript"],
    link: "https://drive.google.com/file/d/1W_plrGf13Oaaah7BrU3MriGK9O6MvooY/view?usp=sharing",
    icon: <img src={projectIcon7} alt="TitoBrews icon" width="32" height="32" />,
    thumbnail: preview7,
  },
];

const categoryColors = {
  "Full Stack": "tag-fullstack",
  Backend: "tag-backend",
  Frontend: "tag-frontend",
  Ongoing: "tag-ongoing",
  Legacy: "tag-legacy",
  "Machine Learning": "tag-ml",
};

// ── Skills carousel data ──────────────────────────────────────────
const skills = [
  // Languages
  { name: "PHP", rating: 4.7, max: 5, group: "Language", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="16" cy="16" rx="15" ry="9" fill="#777BB3"/><text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">php</text></svg>
  )},
  { name: "Java", rating: 4.2, max: 5, group: "Language", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6c0 0 -2 4 2 6c4 2 2 6 2 6" stroke="#E76F00" strokeWidth="2" strokeLinecap="round"/><path d="M10 20c0 0 8 2 8-2" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 23c0 0 10 3 12-1" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round"/></svg>
  )},
  { name: "HTML", rating: 4.8, max: 5, group: "Language", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l2 20 8 2 8-2 2-20H6z" fill="#E44D26"/><path d="M16 24v-20h8l-1.6 18L16 24z" fill="#F16529"/><path d="M16 13h4.4l.3-3.4H16V6.4h5.7l-.1 1.4-1 10.8L16 20V13z" fill="#fff"/><path d="M16 13v3.6l-3 .8-.2-2.4H16V13H9.7l.5 6 5.8 1.6V20l-4.8-1.3-.3-4H16v-1.7z" fill="#EBEBEB"/></svg>
  )},
  { name: "CSS", rating: 4.2, max: 5, group: "Language", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l2 20 8 2 8-2 2-20H6z" fill="#1572B6"/><path d="M16 24v-20h8l-1.6 18L16 24z" fill="#33A9DC"/><path d="M16 13h-4v-3h8.7l-.3 3-4.4 1.2V16.6l4.1-1.1-.4 4.5-3.7 1V18.4l.5-.1V17l-3.7 1-.2-2.4H16V13z" fill="#fff"/><path d="M16 13v2.6l-3.5.9.2 2.4 3.3-.9v2.6l-3.5-.9-.3-4.7z" fill="#EBEBEB"/></svg>
  )},
  { name: "JavaScript", rating: 3.9, max: 5, group: "Language", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="4" fill="#F7DF1E"/><path d="M18.5 22.5c.4.7 1 1.2 2 1.2 .8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.4-2.3-2.9 0-1.5 1.1-2.6 2.8-2.6 1.2 0 2.1.4 2.7 1.5l-1.5.9c-.3-.6-.6-.8-1.2-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.2 1.2l.5.2c1.6.7 2.5 1.5 2.5 3.1 0 1.8-1.4 2.8-3.3 2.8-1.8 0-3-.9-3.6-2.1L18.5 22.5zM11.5 22.7c.3.5.6.9 1.2.9.6 0 .9-.2.9-1v-6.1h2v6.1c0 2-1.2 2.9-2.9 2.9-1.6 0-2.5-.8-2.9-1.8L11.5 22.7z" fill="#333"/></svg>
  )},
  { name: "C++", rating: 2.1, max: 5, group: "Language", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="13" fill="#00599C"/><text x="16" y="21" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">C++</text></svg>
  )},
  { name: "MySQL", rating: 4.5, max: 5, group: "Language", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4C10 4 6 8 6 12c0 2 2 3 4 4l6 2 6-2c2-1 4-2 4-4 0-4-4-8-10-8z" fill="#00758F"/><path d="M6 12c0 4 4 8 10 8s10-4 10-8" stroke="#F29111" strokeWidth="1.5"/><ellipse cx="16" cy="12" rx="10" ry="4" fill="#F29111"/></svg>
  )},
  // Frameworks
  { name: "Laravel", rating: 4.2, max: 5, group: "Framework", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 8l-8-4-4 8-8-4-4 8 8 4 4 8 4-8 8 4 4-8-4-8z" fill="#FF2D20" opacity=".15"/><path d="M20 4L8 20l4 8 16-8L20 4z" fill="#FF2D20"/><path d="M8 20l4 8" stroke="#fff" strokeWidth="1.5"/></svg>
  )},
  { name: "React", rating: 4.1, max: 5, group: "Framework", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="16" cy="16" rx="4" ry="4" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="14" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/><ellipse cx="16" cy="16" rx="14" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/></svg>
  )},
  { name: "Spring", rating: 3.9, max: 5, group: "Framework", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6C20 4 10 6 8 16c-1 4 0 8 4 10 6 3 14-2 14-10 0-6-4-10-8-10" stroke="#6DB33F" strokeWidth="2" strokeLinecap="round"/><circle cx="24" cy="8" r="2" fill="#6DB33F"/></svg>
  )},
  // Others
  { name: "Node.js", rating: 4.3, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4L4 11v10l12 7 12-7V11L16 4z" fill="#339933" opacity=".2"/><path d="M16 4L4 11v10l12 7 12-7V11L16 4z" stroke="#339933" strokeWidth="1.5"/><text x="16" y="20" textAnchor="middle" fontSize="6" fill="#339933" fontWeight="bold">node</text></svg>
  )},
  { name: "Tailwind", rating: 3.7, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 16c1-4 4-6 8-5-1 3-3 5-8 5zm8-5c1-4 4-6 8-5-1 3-3 5-8 5z" fill="#06B6D4"/><path d="M8 22c1-4 4-6 8-5-1 3-3 5-8 5zm8-5c1-4 4-6 8-5-1 3-3 5-8 5z" fill="#06B6D4" opacity=".6"/></svg>
  )},
  { name: "Maven", rating: 3.5, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="20" height="20" rx="3" fill="#C71A36" opacity=".15"/><text x="16" y="21" textAnchor="middle" fontSize="9" fill="#C71A36" fontWeight="bold">mvn</text></svg>
  )},
  { name: "Vite", rating: 4.0, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 6L16 28 10 16l18-10z" fill="#646CFF" opacity=".8"/><path d="M4 6l12 6-6 4L4 6z" fill="#FFBD2E"/></svg>
  )},
  { name: "Copilot", rating: 4.5, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#24A0EE" opacity=".2"/><circle cx="16" cy="16" r="5" fill="#24A0EE"/><circle cx="12" cy="13" r="2" fill="#fff"/><circle cx="20" cy="13" r="2" fill="#fff"/></svg>
  )},
  { name: "PostgreSQL", rating: 4.3, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="16" cy="10" rx="8" ry="4" fill="#336791"/><path d="M8 10v12c0 2 4 4 8 4s8-2 8-4V10" stroke="#336791" strokeWidth="1.5" fill="none"/></svg>
  )},
  { name: "Figma", rating: 3.5, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="4" width="8" height="8" rx="4" fill="#F24E1E"/><rect x="10" y="12" width="8" height="8" fill="#A259FF"/><path d="M10 20h8v4a4 4 0 0 1-8 0V20z" fill="#0ACF83"/><rect x="18" y="12" width="4" height="4" rx="2" fill="#1ABCFE"/></svg>
  )},
  { name: "Canva", rating: 3.8, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" fill="#7D2AE8" opacity=".15"/><circle cx="16" cy="16" r="6" fill="#7D2AE8"/><circle cx="16" cy="16" r="2.5" fill="#fff"/></svg>
  )},
  { name: "Adobe", rating: 4.4, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 26L16 6l10 20H6z" fill="#FF0000" opacity=".15"/><path d="M6 26L16 6l10 20" stroke="#FF0000" strokeWidth="1.5" strokeLinejoin="round" fill="none"/><line x1="10" y1="20" x2="22" y2="20" stroke="#FF0000" strokeWidth="1.5"/></svg>
  )},
  { name: "Git", rating: 4.2, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 15l-11-11-2 2 3 3-9 9-3-3-2 2 11 11 2-2-3-3 9-9 3 3 2-2z" fill="#F05032" opacity=".2"/><path d="M28 15l-11-11-2 2 3 3-9 9-3-3-2 2 11 11 2-2-3-3 9-9 3 3 2-2z" stroke="#F05032" strokeWidth="1.2" strokeLinejoin="round"/><circle cx="8" cy="24" r="2.5" fill="#F05032"/><circle cx="24" cy="8" r="2.5" fill="#F05032"/><circle cx="16" cy="16" r="2.5" fill="#F05032"/></svg>
  )},
  { name: "Bruno", rating: 4.2, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" fill="#EF6C00" opacity=".15"/><path d="M10 20 Q16 8 22 20" stroke="#EF6C00" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M10 20 Q16 24 22 20" stroke="#EF6C00" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".6"/><circle cx="16" cy="14" r="2" fill="#EF6C00"/></svg>
  )},
  { name: "Postman", rating: 4.2, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" fill="#FF6C37" opacity=".15"/><circle cx="16" cy="16" r="12" stroke="#FF6C37" strokeWidth="1.2"/><path d="M10 16 Q14 10 20 14 Q24 17 20 22 Q16 26 12 22 Q9 19 10 16z" fill="#FF6C37" opacity=".3"/><line x1="14" y1="18" x2="22" y2="10" stroke="#FF6C37" strokeWidth="1.5" strokeLinecap="round"/><circle cx="22" cy="10" r="2" fill="#FF6C37"/></svg>
  )},{ name: "SonarQube", rating: 3.8, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" fill="#4E9BCD" opacity=".15"/><path d="M9 19c2-6 5-9 9-9" stroke="#4E9BCD" strokeWidth="2" strokeLinecap="round" fill="none"/><circle cx="20" cy="9" r="2.5" fill="#4E9BCD"/></svg>
  )},
  { name: "Vercel", rating: 4.3, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" fill="#000" opacity=".08"/><polygon points="16,8 26,24 6,24" fill="#000" opacity=".75"/></svg>
  )},
  { name: "Render", rating: 4.0, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" fill="#46E3B7" opacity=".15"/><path d="M11 22 L11 13 Q11 9 16 9 Q21 9 21 14 Q21 18 16 18 L11 18" stroke="#46E3B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
  )},
  { name: "Cloudflare", rating: 4.1, max: 5, group: "Other", icon: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="12" fill="#F6821F" opacity=".12"/><path d="M22 18.5c.7 0 1.3-.5 1.3-1.2 0-.6-.4-1.1-1-1.2.1-.2.1-.4.1-.6 0-1.7-1.4-3-3.1-3-.4 0-.8.1-1.2.3C17.6 11.8 16.4 11 15 11c-2 0-3.6 1.6-3.6 3.5 0 .1 0 .3.1.4-.9.2-1.5 1-1.5 1.9 0 1 .8 1.7 1.8 1.7H22z" fill="#F6821F" opacity=".8"/></svg>
  )},
];

function StarRating({ rating, max = 5 }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  const empty = max - full - (partial > 0 ? 1 : 0);
  const id = `grad-${rating.toString().replace('.', '-')}`;

  return (
    <div className="star-rating" aria-label={`${rating} out of ${max}`}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={id}>
            <stop offset={`${partial * 100}%`} stopColor="#A97B5F" />
            <stop offset={`${partial * 100}%`} stopColor="#4A2F24" />
          </linearGradient>
        </defs>
      </svg>
      {[...Array(full)].map((_, i) => (
        <svg key={`f${i}`} className="star star-full" viewBox="0 0 16 16"><path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" fill="#A97B5F"/></svg>
      ))}
      {partial > 0 && (
        <svg key="p" className="star" viewBox="0 0 16 16"><path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" fill={`url(#${id})`}/></svg>
      )}
      {[...Array(empty)].map((_, i) => (
        <svg key={`e${i}`} className="star star-empty" viewBox="0 0 16 16"><path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" fill="#4A2F24"/></svg>
      ))}
      <span className="star-label">{rating}</span>
    </div>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-group">{skill.group}</span>
        <StarRating rating={skill.rating} max={skill.max} />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <img src={wave5} alt="Decorative wave" className="wave-image" />
      <div className="projects-header">
        <p className="projects-eyebrow">Est. 2024 · Open Daily</p>
        <h2 className="projects-title">The Project Menu</h2>
        <p className="projects-subtitle">Carefully crafted. Every build served fresh.</p>
        <div className="header-divider">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="card-thumbnail">
              <img src={project.thumbnail} alt={project.drinkName} />
              <span className={`card-category ${categoryColors[project.category]}`}>
                {project.category}
              </span>
            </div>
            <div className="card-body">
              <div className="card-top">
                <span className="card-icon">{project.icon}</span>
                <div>
                  <h3 className="card-title">{project.drinkName}</h3>
                  <span className="card-subtitle">{project.subtitle}</span>
                </div>
              </div>
              <p className="card-description">{project.description}</p>
              <div className="card-ingredients">
                <p className="ingredients-label">— Ingredients —</p>
                <div className="tags-row">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tag tag-tool">{tool}</span>
                  ))}
                  {project.languages.map((lang) => (
                    <span key={lang} className="tag tag-lang">{lang}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="visit-btn" target="_blank" rel="noreferrer">
                Visit ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* ── Skills Carousel ── */}
      <div className="skills-carousel-wrapper">
        <p className="carousel-eyebrow">✦ Sponsored Skills ✦</p>
        <div className="carousel-track-container">
          <div className="carousel-track">
            {[...skills, ...skills].map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <div className="projects-footer">
        <p>More brews on the way · Check back soon</p>
      </div>
    </section>
  );
}

export default Projects;