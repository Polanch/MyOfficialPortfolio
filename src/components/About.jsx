import { useState, useEffect } from "react";
import "../assets/styles/About.css";
import wave6 from "../assets/images/wave6.svg";
import news1 from "../assets/previews/news1.jpg";
import news2 from "../assets/previews/news2.jpg";
const MAX_WORDS = 500;
const TOTAL_PAGES = 3;

function StampRating({ rating, max = 5, onRate, interactive = false }) {
  return (
    <div className={`stamp-rating ${interactive ? "interactive" : ""}`}>
      {[...Array(max)].map((_, i) => {
        const filled = i < rating;
        return (
          <button
            type="button"
            key={i}
            className={`stamp-star ${filled ? "filled" : ""}`}
            onClick={interactive ? () => onRate(i + 1) : undefined}
            disabled={!interactive}
            aria-label={`${i + 1} star`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function LetterCard({ review }) {
  return (
    <article className="letter-card">
      <div className="letter-header">
        <div className="letter-avatar">
          {review.avatar ? (
            <img src={review.avatar} alt={review.name} />
          ) : (
            <span className="avatar-fallback">{review.name.charAt(0)}</span>
          )}
        </div>
        <div className="letter-meta">
          <h4 className="letter-name">{review.name}</h4>
          <span className="letter-date">{review.date}</span>
        </div>
        <StampRating rating={review.rating} />
      </div>
      <p className="letter-comment">"{review.comment}"</p>
    </article>
  );
}

/* ── PAGE 1: Personal Story ── */
function PageOne() {
  return (
    <div className="page-one-wrapper">
      <div className="front-page-banner page-one-banner">
        <span>PERSONAL EDITION</span>
        <span>OFFICIAL PROFILE WEBSITE</span>
        <span>NO. 001</span>
      </div>
      <div className="about-story">
      <div className="story-main">
        <p className="story-paragraph">
          <span className="drop-cap">P</span>
          olanch is just my nickname. My name is John Lloyd Fugaban Olipani. I am now 24 years old and will be
          turning 25 this October. I was born in the Province of Aparri, Cagayan. I live with my grandparents and currently looking for jobs here in Manila
          to support them.
        </p>
        <p className="story-paragraph">
          My goal once I earn my first big salary, I will treat my grandmother into buying new teeth and ofcourse buy a new computer cause my laptop is on life support.
          I will then bring both of them to Hongkong as that is their life long dream. Me on the other hand, I am bonified otaku so I dream of coming to Japan.
        </p>

        <div className="pull-quote">
          "Live your life at your own pace."
        </div>

        <p className="story-paragraph">
          I don't want to reject  my innerchild. It may come out as being childsish but I think this charm of mine is what keeps me from making fun ideas and creative works.
          It also keeps me from being depressed. Being happy and innocent on the harsh reality of life is being blind, but it has it perks to keep me atleast sane.
        </p>
      </div>

      <aside className="story-sidebar">
        <div className="sidebar-box">
          <h3 className="sidebar-heading">Hobbies & Interests</h3>
          <ul className="sidebar-list">
            <li>I like watching anime</li>
            <li>I love reading manga</li>
            <li>I enjoy playing video games</li>
            <li>I play instruments</li>
            <li>I also like to draw digital art</li>
            <li>I even write light novels</li>
          </ul>
        </div>

        <div className="sidebar-box fun-facts-box">
          <h3 className="sidebar-heading">Fun Facts</h3>
          <ul className="sidebar-list">
            <li>I like cats</li>
            <li>I hate politics but I'm updated</li>
            <li>I rarely scroll social media</li>
          </ul>
        </div>
      </aside>
      </div>
    </div>
  );
}

/* ── PAGE 2: Newspaper Front Page Layout ── */
function PageTwo() {
  return (
    <div className="front-page">

      <div className="front-page-banner">
        <span>THE LIFE EDITION</span>
        <span>OFFICIAL ARCHIVAL WEBSITE</span>
        <span>2 BOARD DIRECTOR PROGRAMME</span>
      </div>

      <div className="front-page-grid">

        {/* Hero photo block */}
        <div className="fp-hero-photo">
          <div className="photo-placeholder">
            <span><img className="photonews" src={news1} alt="News 1" /></span>
          </div>
        </div>

        {/* Top-right small headline */}
        <div className="fp-headline-block fp-accent">
          <span className="fp-kicker">Grade School</span>
          <h4 className="fp-small-headline">My Childhood</h4>
        </div>

        {/* Top-right small headline 2 */}
        <div className="fp-headline-block">
          <span className="fp-kicker">Graduate</span>
          <h4 className="fp-small-headline">Entering Adulthood</h4>
        </div>

        {/* Main headline spanning full width */}
        <div className="fp-main-headline-row">
          <h2 className="fp-main-headline">My Journey as a Developer</h2>
          <p className="fp-byline">This is my story on how I got into Software Development</p>
        </div>

        {/* Column 1 */}
        <div className="fp-column">
          <p className="fp-body-text">
            When I was in grade 4, I was introduced with an old type of phone. I experimented on it and I accessed the internet for the first time
            It was a keyboard phone so you can imagine how cool that was. The screen was barely 2 inch and I can't even see the whole picture of what I was browsing.
          </p>
          <p className="fp-body-text">
            And then my grandmother bought a broadband. I was so excietd and learned how to register a surfing load on it with a hundered pesos. Only to find out that my hard earned allowance I saved, would only last for an hour.
            It said unlimited but it was a lie. I was so mad but I ended up loading another hundred only to browse youtube for merely 30 minutes.
          </p>
        </div>

        {/* Column 2 with embedded photo */}
        <div className="fp-column">
          <div className="fp-inline-photo">
            <div className="photo-placeholder">
              <span><img className="photonews" src={news2} alt="News 2" /></span>
            </div>
          </div>
          <p className="fp-body-text">
            I even made a YouTube channel and uploaded some videos with a friend.
            The good old days. And then a year later I kept learning and learning until I was grade 6 I finally caught glimpse of the language HTML. <br /><br/>
            I wrote my very first website on a notepad++ and I boasted how cool h1 and h2 were. But hey, for a kid, that's already an achievement.
          </p>
        </div>

        {/* Column 3 */}
        <div className="fp-column">
          <p className="fp-body-text">
            Then I entered some robotics competitions at Lyceum and we had a little project that makes a robot move using codes and Arduino.
            <br /> <br />
            When I got into highschool, I basically became the tech-guy that everyone goes to when their device breaks. I even fix refrigerators and televisions, well not really but I tried. 
          </p>
          <p className="fp-body-text">
            Internet even opened more of my curiosity and I got into so much social media that I started dwelving myself into wstern contents more than local.<br/> <br/>
            Then I got addicted to video games and learned english through communicating with online friends.
          </p>
        </div>
        <div className="fp-column">
          <p className="fp-body-text">
            College was a rough hill of my life. Not only covid ruined my career plans, it also didn't give me the full authentic college life I was expecting.
            <br /> <br />
            Instead of wasting my time doing the self-paced modules issued by my school, I did my own resource learning and went straight to Udemy and Cisco academy to learn programming and networking.            
            </p>
          <p className="fp-body-text">
            I wanted to pursue networking but it was so expensive because you need to buy your own equipments. Unline web development, I can already do basics of it and began learning frameworks.  
          </p>
        </div>

        {/* Bottom-left sidebar headline */}
        <div className="fp-headline-block fp-bottom-block">
          <span className="fp-kicker">TOO LONG TO READ</span>
          <h4 className="fp-small-headline">6 Months Tutorial Hell</h4>
          <p className="fp-mini-text">
            I really wanted to get a carreer in software development but the industry was so packed that I could barely land one.
          </p>
        </div>

        {/* Bottom-right sidebar headline */}
        <div className="fp-headline-block fp-bottom-block fp-bottom-block-last">
          <span className="fp-kicker">Please Stay</span>
          <h4 className="fp-small-headline">I Went Places to Places</h4>
          <p className="fp-mini-text">
            I left the province and lived with my other relatives in Manila and I finally have the chance and applied to big companies liek Accenture.
          </p>
        </div>

      </div>
    </div>
  );
}

/* ── PAGE 3: Certificates & Achievements ── */
function PageThree() {
  const otherCerts = [
    { id: 1, label: "Robotics Competition",      issuer: "Regional Award"          },
    { id: 2, label: "Udemy — Web Development",   issuer: "Udemy Certificate"       },
    { id: 3, label: "OJT Completion",             issuer: "On-the-Job Training"     },
    { id: 4, label: "Certificate 4",              issuer: "Issuing Body"            },
    { id: 5, label: "Certificate 5",              issuer: "Issuing Body"            },
    { id: 6, label: "Certificate 6",              issuer: "Issuing Body"            },
  ];

  return (
    <div className="certif-page">

      <div className="front-page-banner">
        <span>ACHIEVEMENTS EDITION</span>
        <span>CERTIFICATIONS &amp; AWARDS</span>
        <span>SPECIAL EDITION</span>
      </div>

      {/* ── Featured: Accenture ── */}
      <div className="certif-featured-row">
        <div className="certif-featured-meta">
          <span className="fp-kicker">FEATURED CERTIFICATE</span>
          <h2 className="certif-featured-title">Accenture</h2>
          <p className="fp-body-text">
            Issued by Accenture Philippines. This certificate will be uploaded once the physical copy is available.
          </p>
        </div>
        <div className="certif-featured-img">
          <span>Accenture Certificate</span>
          <p>— image coming soon —</p>
        </div>
      </div>

      <div className="certif-section-rule">
        <span className="fp-kicker">OTHER CERTIFICATIONS</span>
      </div>

      {/* ── 6 smaller certs ── */}
      <div className="certif-grid">
        {otherCerts.map((cert) => (
          <div key={cert.id} className="certif-card">
            <div className="certif-img-placeholder">
              <span>Image</span>
            </div>
            <div className="certif-card-body">
              <p className="certif-card-label">{cert.label}</p>
              <span className="certif-card-issuer">{cert.issuer}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

const API_URL = import.meta.env.VITE_API_BASE_URL ?? '';

function About() {
  const [page, setPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    rating: 0,
    comment: "",
    avatarPreview: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/reviews`)
      .then((res) => res.json())
      .then((data) => { setReviews(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const wordCount = countWords(form.comment);

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, avatarPreview: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (form.rating === 0) {
      setError("Please leave a star rating.");
      return;
    }
    if (!form.comment.trim()) {
      setError("Please write a comment.");
      return;
    }
    if (wordCount > MAX_WORDS) {
      setError(`Your comment is over the ${MAX_WORDS} word limit.`);
      return;
    }

    const newReview = {
      name: form.name.trim(),
      rating: form.rating,
      comment: form.comment.trim(),
      avatar: form.avatarPreview,
      date: new Date().toISOString().split("T")[0],
    };

    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      if (!res.ok) throw new Error("Failed to submit");
      const saved = await res.json();
      setReviews((prev) => [saved, ...prev]);
      setForm({ name: "", rating: 0, comment: "", avatarPreview: "" });
    } catch {
      setError("Failed to submit. Please try again.");
    }
  };

  const goToPage = (p) => {
    setPage(p);
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageLabels = {
    1: "About Me",
    2: "Gallery",
    3: "Author",
  };

  return (
    <section className="about-section" id="about">
      <img src={wave6} alt="" className="wave-bg" />
      {/* ── Masthead ── */}
      <div className="masthead">
        <p className="masthead-date">
          {pageLabels[page]} · No. 00{page} · {new Date().getFullYear()}
        </p>
        <h1 className="masthead-title">John Lloyd Olipani</h1>
        <p className="masthead-tagline">"All the Code That's Fit to Brew"</p>
        <div className="masthead-rule"></div>
      </div>

      {/* ── Article Pages ── */}
      {page === 1 && <PageOne />}
      {page === 2 && <PageTwo />}
      {page === 3 && <PageThree />}

      {/* ── Pagination ── */}
      <div className="pagination">
        <button
          type="button"
          className="page-nav-btn"
          disabled={page === 1}
          onClick={() => goToPage(page - 1)}
        >
          ← Prev
        </button>

        <div className="page-numbers">
          {[1, 2, 3].map((p) => (
            <button
              type="button"
              key={p}
              className={`page-number ${page === p ? "active" : ""}`}
              onClick={() => goToPage(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="page-nav-btn"
          disabled={page === TOTAL_PAGES}
          onClick={() => goToPage(page + 1)}
        >
          Next →
        </button>
      </div>

      <div className="section-divider">
        <span>✦</span>
        <span>LETTERS TO THE EDITOR</span>
        <span>✦</span>
      </div>

      {/* ── Reviews / Comments ── */}
      <div className="letters-section">
        <p className="letters-intro">
          Visitors are invited to leave a note, rate their visit, and share their thoughts below.
        </p>

        <form className="letter-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="avatar-upload">
              <label htmlFor="avatar-input" className="avatar-upload-label">
                {form.avatarPreview ? (
                  <img src={form.avatarPreview} alt="Preview" className="avatar-preview-img" />
                ) : (
                  <span className="avatar-upload-placeholder">+ Photo</span>
                )}
              </label>
              <input
                id="avatar-input"
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                hidden
              />
            </div>

            <div className="form-fields">
              <input
                type="text"
                placeholder="Your name"
                className="form-input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <StampRating
                rating={form.rating}
                interactive
                onRate={(r) => setForm({ ...form, rating: r })}
              />
            </div>
          </div>

          <textarea
            placeholder="Write your comment... (max 500 words)"
            className="form-textarea"
            rows={4}
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />

          <div className="form-footer">
            <span className={`word-count ${wordCount > MAX_WORDS ? "over-limit" : ""}`}>
              {wordCount} / {MAX_WORDS} words
            </span>
            <button type="submit" className="submit-btn">Submit Letter</button>
          </div>

          {error && <p className="form-error">{error}</p>}
        </form>

        <div className="letters-grid">
          {loading ? (
            <p className="letters-loading">Loading letters...</p>
          ) : reviews.map((review) => (
            <LetterCard key={review.id} review={review} />
          ))}
        </div>
      </div>

    </section>
  );
}

export default About;