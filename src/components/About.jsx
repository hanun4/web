import { PROFILE } from '../data/profile.js'
import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <header className="section-head">
          <span className="section-head__index reveal--fade">03</span>
          <h2 className="section-head__title reveal--mask">关于 · About</h2>
          <span className="section-head__rule reveal--line" />
          <span className="section-head__en reveal--fade">PROFILE</span>
        </header>

        <div className="about__grid">
          {/* 左：头像与身份卡 */}
          <div className="about__portrait reveal--fade">
            <img src={PROFILE.avatar} alt={PROFILE.name} loading="lazy" />
            <span className="about__id">ID · HQS—2025</span>
          </div>

          {/* 右：介绍、数据、技能、经历 */}
          <div className="about__detail">
            <div className="reveal-stagger">
              <h3 className="about__name">{PROFILE.name}</h3>
              <p className="about__role">{PROFILE.role} · {PROFILE.roleEn}</p>
            </div>

            <div className="about__intro reveal--fade">
              {PROFILE.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="about__stats reveal--fade">
              {PROFILE.stats.map((s) => (
                <div className="about__stat" key={s.label}>
                  <div className="v">{s.value}</div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>

            {/* 技能栈 */}
            <div className="about__skills reveal--fade">
              <h3>技能栈 · Stack</h3>
              {PROFILE.skills.map((g) => (
                <div className="skill-group" key={g.group}>
                  <div className="skill-group__label">{g.group}</div>
                  <div className="skill-tags">
                    {g.items.map((it) => (
                      <span className="skill-tag" key={it}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 经历时间线 */}
            <div className="about__exp reveal--fade">
              <h3>经历 · Experience</h3>
              <div className="timeline">
                {PROFILE.experience.map((e) => (
                  <div className="tl-item" key={e.year}>
                    <div className="tl-item__year">{e.year}</div>
                    <div className="tl-item__role">{e.role}</div>
                    <div className="tl-item__org">{e.org}</div>
                    <p className="tl-item__desc">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
