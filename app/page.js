"use client";

import { useEffect, useState } from "react";
import { profile, aiProjects, appProjects, clientWork, experience, education, skills, ui } from "./data";

function Project({ p, t, open, onToggle }) {
  const [cover, ...rest] = p.images;
  return (
    <article className="project" id={p.slug}>
      <div className="project-main">
        <div className="project-text">
          <span className="badge">{t(p.badge)}</span>
          <h3>{t(p.title)}</h3>
          <p className="tagline">{t(p.tagline)}</p>
          <ul className="results">
            {p.results.map((r, i) => <li key={i}>{t(r)}</li>)}
          </ul>
          <div className="tags">{p.tags.map((x) => <span key={x}>{x}</span>)}</div>
          <div className="actions">
            <button className="btn" onClick={onToggle} aria-expanded={open}>{open ? t(ui.less) : t(ui.more)}</button>
            {p.links.map((l) => <a key={l.href} className="btn ghost" href={l.href} target="_blank" rel="noopener">{l.label} ↗</a>)}
          </div>
        </div>
        <figure className={`cover${cover.phone ? " phone" : ""}`}>
          <img src={cover.src} alt={t(cover.cap)} loading="lazy" />
          <figcaption>{t(cover.cap)}</figcaption>
        </figure>
      </div>
      {open && (
        <div className="details">
          <div className="detail-text">
            <h4>{t(ui.problem)}</h4>
            <p>{t(p.problem)}</p>
            <h4>{t(ui.built)}</h4>
            <ul>{t(p.points).map((x, i) => <li key={i}>{x}</li>)}</ul>
          </div>
          {rest.length > 0 && (
            <div className={`gallery${rest.every((r) => r.phone) ? " phones" : ""}`}>
              {rest.map((r) => (
                <figure key={r.src} className={r.phone ? "phone" : ""}>
                  <a href={r.src} target="_blank" rel="noopener"><img src={r.src} alt={t(r.cap)} loading="lazy" /></a>
                  <figcaption>{t(r.cap)}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ko" || saved === "en") setLang(saved);
      else if (navigator.language?.startsWith("ko")) setLang("ko");
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const t = (o) => (o && typeof o === "object" ? o[lang] ?? o.en : o);
  t.lang = lang;
  const toggle = (slug) => setOpen((s) => ({ ...s, [slug]: !s[slug] }));
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <>
      <header className="topbar">
        <a href="#top" className="logo">AS</a>
        <nav>
          <a href="#ai">{t(ui.nav.ai)}</a>
          <a href="#apps">{t(ui.nav.apps)}</a>
          <a href="#experience">{t(ui.nav.exp)}</a>
          <a href="#contact">{t(ui.nav.contact)}</a>
        </nav>
        <div className="lang" role="group" aria-label="Language">
          <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          <button aria-pressed={lang === "ko"} onClick={() => setLang("ko")}>한국어</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="eyebrow">{t(profile.location)}</p>
            <h1>{t(profile.name)}</h1>
            <p className="role">{t(profile.role)}</p>
            <p className="intro">{t(profile.intro)}</p>
            <p className="avail">{t(profile.availability)}</p>
            <div className="actions">
              <a className="btn" href="/Askar_Shamshidinov_CV.pdf" target="_blank" rel="noopener">{t(ui.cv)}</a>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
          <ul className="facts">
            {profile.facts.map((f) => (
              <li key={f.n}><strong>{f.n}</strong><span>{t(f)}</span></li>
            ))}
          </ul>
        </section>

        <section id="ai" className="section">
          <h2>{t(ui.aiTitle)}</h2>
          <p className="sub">{t(ui.aiSub)}</p>
          {aiProjects.map((p) => <Project key={p.slug} p={p} t={t} open={!!open[p.slug]} onToggle={() => toggle(p.slug)} />)}
        </section>

        <section id="apps" className="section">
          <h2>{t(ui.appsTitle)}</h2>
          <p className="sub">{t(ui.appsSub)}</p>
          {appProjects.map((p) => <Project key={p.slug} p={p} t={t} open={!!open[p.slug]} onToggle={() => toggle(p.slug)} />)}

          <h3 className="h3-plain">{t(ui.clientTitle)}</h3>
          <p className="sub">{t(ui.clientSub)}</p>
          <div className="client-grid">
            {clientWork.map((c) => (
              <div className="client" key={c.title.en}>
                <h4>{t(c.title)}</h4>
                <p>{t(c.text)}</p>
                <div className="tags">{c.tags.map((x) => <span key={x}>{x}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section two-col">
          <div>
            <h2>{t(ui.expTitle)}</h2>
            <ul className="timeline">
              {experience.map((e) => (
                <li key={e.org}><h4>{t(e.role)} · <span>{e.org}</span></h4><p>{t(e.text)}</p></li>
              ))}
            </ul>
            <h2 className="mt">{t(ui.eduTitle)}</h2>
            <p className="edu"><strong>{t(education.school)}</strong><br />{t(education.degree)}<br /><span>{t(education.courses)}</span></p>
          </div>
          <div>
            <h2>{t(ui.skillsTitle)}</h2>
            <dl className="skills">
              {skills.map((s) => (<div key={s.k.en}><dt>{t(s.k)}</dt><dd>{s.v}</dd></div>))}
            </dl>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>{t(ui.contactTitle)}</h2>
          <p className="sub">{t(ui.contactSub)}</p>
          <div className="contact-row">
            <span className="mono">{profile.email}</span>
            <button className="btn" onClick={copyEmail}>{copied ? t(ui.copied) : t(ui.copy)}</button>
          </div>
          <p className="mono"><a href={profile.github} target="_blank" rel="noopener">github.com/askarbekkk</a></p>
        </section>
      </main>
      <footer>© {t(profile.name)}</footer>
    </>
  );
}
