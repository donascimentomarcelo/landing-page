import { useEffect, useState } from "react";
import avatar from "./profile.webp";
import "./App.scss";

const profileLinks = {
  github: "https://github.com/donascimentomarcelo",
  linkedin: "https://www.linkedin.com/in/santanna-developer",
  whatsapp: "https://wa.me/5521982525286",
};

const content = {
  pt: {
    skip: "Pular para o conteúdo",
    nav: {
      expertise: "Especialidades",
      experience: "Experiência",
      contact: "Contato",
    },
    languageLabel: "Mudar idioma para inglês",
    availability: "Aberto a conexões e desafios relevantes",
    eyebrow: "Engenharia backend para sistemas que não podem falhar",
    title: "Senior Backend Software Engineer",
    intro:
      "Projeto e evoluo plataformas resilientes e escaláveis com Java, Spring Boot, arquiteturas distribuídas e cloud — conectando decisões técnicas a resultados de negócio.",
    experience: "10+ anos de experiência",
    domains: "Banking · Healthcare · Logistics",
    primaryCta: "Conheça minha trajetória",
    secondaryCta: "Conectar no LinkedIn",
    portraitAlt: "Marcelo Sant'Anna, Senior Backend Software Engineer",
    codeLabel: "engineering-profile.yml",
    codeLines: [
      ["focus", "distributed systems"],
      ["approach", "reliability by design"],
      ["delivery", "from architecture to production"],
    ],
    expertiseLabel: "Especialidades & impacto",
    expertiseTitle: "Resultados.",
    expertiseIntro:
      "Quatro pilares que conectam conhecimento técnico, contexto de negócio e resultados produzidos ao longo da minha trajetória.",
    evidenceLabel: "Na prática",
    expertise: [
      {
        number: "01",
        title: "Backend & APIs",
        description:
          "Serviços de alta criticidade, APIs REST seguras e integrações corporativas com foco em clareza e manutenção.",
        evidence:
          "APIs PIX e TED, incluindo uma arquitetura com capacidade-alvo de até 1 milhão de requisições por minuto.",
        skills: ["Java", "Spring Boot", "Spring Security", "JPA", "REST APIs"],
      },
      {
        number: "02",
        title: "Sistemas distribuídos",
        description:
          "Arquiteturas orientadas a eventos, comunicação assíncrona, idempotência, resiliência e consistência distribuída.",
        evidence:
          "35% menos latência e 40% mais capacidade em picos após otimização de fluxos críticos e processamento assíncrono.",
        skills: ["Kafka", "Azure Service Bus", "Redis", "Microservices", "Keycloak"],
      },
      {
        number: "03",
        title: "Cloud & Platform",
        description:
          "Infraestrutura reproduzível, pipelines confiáveis e ambientes preparados para escalar com segurança.",
        evidence:
          "Aproximadamente 50% mais rapidez no provisionamento de ambientes com automação baseada em Terraform.",
        skills: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes / AKS"],
      },
      {
        number: "04",
        title: "Qualidade & Observabilidade",
        description:
          "Testes e telemetria como parte da arquitetura para reduzir risco e acelerar decisões em produção.",
        evidence:
          "Testes de carga com k6, cenários BDD e telemetria com Application Insights para elevar a confiança em produção.",
        skills: ["JUnit", "Mockito", "Cucumber", "k6", "Application Insights"],
      },
    ],
    experienceLabel: "Experiência profissional",
    experienceTitle: "Minha trajetória.",
    experienceIntro:
      "Mais de uma década construindo software em saúde, setor público, logística e serviços financeiros — com responsabilidades crescentes em arquitetura, entrega e mentoria.",
    experiences: [
      {
        company: "Programmers Informática",
        role: "Senior Backend Software Engineer",
        period: "abr 2021 — atual",
        context: "Remoto · Projetos de alta criticidade nos EUA · Healthcare e serviços financeiros",
        progression: "Promovido a Senior Backend Software Engineer em jan 2024",
        description:
          "Responsável por desenho e entrega para clientes dos EUA em projetos de healthcare e serviços financeiros de alta criticidade, incluindo pagamentos instantâneos, orquestração financeira e integrações distribuídas.",
        highlights: [
          "APIs PIX e TED com requisitos rigorosos de latência e disponibilidade.",
          "Fluxos orientados a eventos com Kafka e Azure Service Bus.",
          "Mentoria, code reviews, refinamentos técnicos e testes de performance com k6.",
        ],
        skills: ["Java 17/21", "Spring Boot", "Kafka", "Azure", "AKS", "Terraform"],
      },
      {
        company: "Radix",
        role: "Backend Software Engineer",
        period: "out 2019 — mar 2021",
        context: "Consultoria para Ipiranga · Logística e distribuição",
        description:
          "Desenvolvimento de serviços de gestão logística e cálculo de frete, traduzindo regras complexas de rotas, combustível, motoristas e custos operacionais.",
        highlights: [
          "Contribuição para uma redução estimada de 15–20% nos custos de frete.",
          "Serviços testáveis com integração a Oracle Database.",
        ],
        skills: ["Java 11", "Spring Boot", "REST APIs", "Oracle", "JUnit", "Mockito"],
      },
      {
        company: "CTIS Tecnologia",
        role: "Full Stack Software Engineer",
        period: "jun 2018 — set 2019",
        context: "Consultoria para o Exército Brasileiro · EsAO",
        description:
          "Construção de uma plataforma acadêmica para gestão de militares, turmas e avaliações, conectando backend Java a uma experiência web em Angular.",
        highlights: [
          "Automação da alocação de alunos em salas com múltiplos critérios.",
          "Eliminação de retrabalho manual e redução significativa de erros operacionais.",
        ],
        skills: ["Java 8", "Spring Boot", "Angular", "PostgreSQL"],
      },
      {
        company: "MV Sistemas",
        role: "Backend Software Engineer",
        period: "jun 2015 — fev 2018",
        context: "Consultoria para Rede D’Or · Healthcare",
        description:
          "Desenvolvimento de uma API de integração hospitalar para centralizar dados clínicos distribuídos entre diferentes sistemas.",
        highlights: [
          "Unificação de informações de prontuários e fluxos clínicos.",
          "Aproximadamente 30% mais eficiência no acesso às informações clínicas.",
        ],
        skills: ["Java 6", "Spring", "REST", "Hibernate / JPA", "Oracle", "Maven"],
      },
    ],
    educationLabel: "Formação",
    education: [
      { year: "2025", institution: "Full Cycle", degree: "MBA em Arquitetura de Software" },
      { year: "2020", institution: "Infnet", degree: "Pós-graduação em Engenharia de Software em Java" },
      { year: "2015", institution: "Unisuam", degree: "Bacharelado em Tecnologia da Informação" },
    ],
    contactLabel: "Vamos conversar",
    contactTitle: "Engenharia sólida começa com uma boa conversa.",
    contactText:
      "Se você está construindo sistemas críticos, modernizando uma plataforma ou fortalecendo sua engenharia backend, vamos trocar ideias.",
    contactCta: "Falar pelo LinkedIn",
    whatsappCta: "Falar pelo WhatsApp",
    githubCta: "Explorar meu GitHub",
    footer: "Projetado e construído por Marcelo Sant'Anna.",
    backToTop: "Voltar ao topo",
  },
  en: {
    skip: "Skip to content",
    nav: {
      expertise: "Expertise",
      experience: "Experience",
      contact: "Contact",
    },
    languageLabel: "Switch language to Portuguese",
    availability: "Open to meaningful connections and challenges",
    eyebrow: "Backend engineering for systems that cannot fail",
    title: "Senior Backend Software Engineer",
    intro:
      "I design and evolve resilient, scalable platforms with Java, Spring Boot, distributed architectures, and cloud — connecting technical decisions to business outcomes.",
    experience: "10+ years of experience",
    domains: "Banking · Healthcare · Logistics",
    primaryCta: "Explore my journey",
    secondaryCta: "Connect on LinkedIn",
    portraitAlt: "Marcelo Sant'Anna, Senior Backend Software Engineer",
    codeLabel: "engineering-profile.yml",
    codeLines: [
      ["focus", "distributed systems"],
      ["approach", "reliability by design"],
      ["delivery", "from architecture to production"],
    ],
    expertiseLabel: "Expertise & impact",
    expertiseTitle: "Results.",
    expertiseIntro:
      "Four pillars connecting technical knowledge, business context, and outcomes delivered throughout my career.",
    evidenceLabel: "In practice",
    expertise: [
      {
        number: "01",
        title: "Backend & APIs",
        description:
          "Mission-critical services, secure REST APIs, and enterprise integrations designed for clarity and maintainability.",
        evidence:
          "PIX and TED APIs, including an architecture targeting capacity of up to one million requests per minute.",
        skills: ["Java", "Spring Boot", "Spring Security", "JPA", "REST APIs"],
      },
      {
        number: "02",
        title: "Distributed systems",
        description:
          "Event-driven architectures, asynchronous communication, idempotency, resilience, and distributed consistency.",
        evidence:
          "35% lower latency and 40% higher peak-load capacity after optimizing critical flows and asynchronous processing.",
        skills: ["Kafka", "Azure Service Bus", "Redis", "Microservices", "Keycloak"],
      },
      {
        number: "03",
        title: "Cloud & Platform",
        description:
          "Reproducible infrastructure, reliable pipelines, and secure environments designed to scale.",
        evidence:
          "Approximately 50% faster environment provisioning through Terraform-based automation.",
        skills: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes / AKS"],
      },
      {
        number: "04",
        title: "Quality & Observability",
        description:
          "Testing and telemetry built into the architecture to reduce risk and speed up production decisions.",
        evidence:
          "k6 load tests, BDD scenarios, and Application Insights telemetry to increase confidence in production.",
        skills: ["JUnit", "Mockito", "Cucumber", "k6", "Application Insights"],
      },
    ],
    experienceLabel: "Professional experience",
    experienceTitle: "My journey.",
    experienceIntro:
      "Over a decade building software across healthcare, the public sector, logistics, and financial services — with growing responsibility for architecture, delivery, and mentoring.",
    experiences: [
      {
        company: "Programmers Informática",
        role: "Senior Backend Software Engineer",
        period: "Apr 2021 — present",
        context: "Remote · Mission-critical US projects · Healthcare and financial services",
        progression: "Promoted to Senior Backend Software Engineer in Jan 2024",
        description:
          "Responsible for design and delivery for US clients across mission-critical healthcare and financial-services projects, including instant payments, financial orchestration, and distributed integrations.",
        highlights: [
          "PIX and TED APIs under strict latency and availability requirements.",
          "Event-driven flows using Kafka and Azure Service Bus.",
          "Mentoring, code reviews, technical refinements, and k6 performance testing.",
        ],
        skills: ["Java 17/21", "Spring Boot", "Kafka", "Azure", "AKS", "Terraform"],
      },
      {
        company: "Radix",
        role: "Backend Software Engineer",
        period: "Oct 2019 — Mar 2021",
        context: "Consulting for Ipiranga · Logistics and distribution",
        description:
          "Developed logistics management and freight calculation services, translating complex rules for routes, fuel, drivers, and operating costs.",
        highlights: [
          "Contributed to an estimated 15–20% reduction in freight costs.",
          "Testable services integrated with Oracle Database.",
        ],
        skills: ["Java 11", "Spring Boot", "REST APIs", "Oracle", "JUnit", "Mockito"],
      },
      {
        company: "CTIS Tecnologia",
        role: "Full Stack Software Engineer",
        period: "Jun 2018 — Sep 2019",
        context: "Consulting for the Brazilian Army · EsAO",
        description:
          "Built an academic platform for managing military students, classes, and assessments, connecting a Java backend to an Angular web experience.",
        highlights: [
          "Automated student allocation to exam rooms using multiple criteria.",
          "Eliminated manual rework and significantly reduced operational errors.",
        ],
        skills: ["Java 8", "Spring Boot", "Angular", "PostgreSQL"],
      },
      {
        company: "MV Sistemas",
        role: "Backend Software Engineer",
        period: "Jun 2015 — Feb 2018",
        context: "Consulting for Rede D’Or · Healthcare",
        description:
          "Developed a hospital integration API to centralize clinical data distributed across multiple systems.",
        highlights: [
          "Unified medical record information and clinical workflows.",
          "Approximately 30% more efficient access to clinical information.",
        ],
        skills: ["Java 6", "Spring", "REST", "Hibernate / JPA", "Oracle", "Maven"],
      },
    ],
    educationLabel: "Education",
    education: [
      { year: "2025", institution: "Full Cycle", degree: "MBA in Software Architecture" },
      { year: "2020", institution: "Infnet", degree: "Postgraduate degree in Java Software Engineering" },
      { year: "2015", institution: "Unisuam", degree: "Bachelor's degree in Information Technology" },
    ],
    contactLabel: "Let's talk",
    contactTitle: "Solid engineering starts with a good conversation.",
    contactText:
      "If you are building critical systems, modernizing a platform, or strengthening backend engineering, let's exchange ideas.",
    contactCta: "Message me on LinkedIn",
    whatsappCta: "Message me on WhatsApp",
    githubCta: "Explore my GitHub",
    footer: "Designed and built by Marcelo Sant'Anna.",
    backToTop: "Back to top",
  },
};

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m3 9.5 9-4.5 9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 12v4.5c2.8 2 7.2 2 10 0V12M21 10v6" />
    </svg>
  );
}

function SectionHeading({ label, title, intro }) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("pt");
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = `Marcelo Sant'Anna — ${t.title}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.intro);
  }, [language, t.intro, t.title]);

  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">MS</span>
            <span className="brand-name">Marcelo Sant'Anna</span>
          </a>

          <nav className="main-nav" aria-label="Principal">
            <a href="#experience">{t.nav.experience}</a>
            <a href="#expertise">{t.nav.expertise}</a>
          </nav>

          <div className="header-actions">
            <button
              className="language-switch"
              type="button"
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              title={t.languageLabel}
            >
              <span className={language === "pt" ? "active" : ""} aria-hidden="true">PT</span>
              <span aria-hidden="true">/</span>
              <span className={language === "en" ? "active" : ""} aria-hidden="true">EN</span>
              <span className="sr-only">{t.languageLabel}</span>
            </button>
            <a className="header-contact" href="#contact">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability">
              <span aria-hidden="true" />
              {t.availability}
            </div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="hero-title">
              Marcelo Sant'Anna
              <span>{t.title}</span>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-meta" aria-label="Professional summary">
              <span>{t.experience}</span>
              <span>{t.domains}</span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                {t.primaryCta}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {t.secondaryCta}
                <ExternalLinkIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Professional portrait and engineering profile">
            <div className="portrait-frame">
              <div className="portrait-accent" aria-hidden="true" />
              <img
                src={avatar}
                alt={t.portraitAlt}
                width="800"
                height="799"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="code-card">
              <div className="code-card-header">
                <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
                <span>{t.codeLabel}</span>
              </div>
              <div className="code-card-body">
                {t.codeLines.map(([key, value]) => (
                  <p key={key}>
                    <span>{key}:</span> {value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="experience section shell" id="experience">
          <SectionHeading
            label={t.experienceLabel}
            title={t.experienceTitle}
            intro={t.experienceIntro}
          />
          <div className="experience-list">
            {t.experiences.map((item, index) => (
              <article className="experience-item" key={`${item.company}-${item.period}`}>
                <div className="experience-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="experience-meta">
                  <p className="experience-period">{item.period}</p>
                  <p>{item.context}</p>
                </div>
                <div className="experience-content">
                  <p className="experience-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  {item.progression && <p className="experience-progression">{item.progression}</p>}
                  <p className="experience-description">{item.description}</p>
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <ul className="experience-skills" aria-label={`${item.company} technologies`}>
                    {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise section shell" id="expertise">
          <SectionHeading label={t.expertiseLabel} title={t.expertiseTitle} intro={t.expertiseIntro} />
          <div className="expertise-grid">
            {t.expertise.map((item) => (
              <article className="expertise-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="expertise-evidence">
                  <span>{t.evidenceLabel}</span>
                  <p>{item.evidence}</p>
                </div>
                <ul aria-label={`${item.title} skills`}>
                  {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="education shell" aria-labelledby="education-title">
          <h2 className="education-heading" id="education-title">{t.educationLabel}</h2>
          <div className="education-grid">
            {t.education.map((item) => (
              <article className="education-card" key={`${item.year}-${item.degree}`}>
                <span className="education-year">{item.year}</span>
                <div className="education-icon">
                  <EducationIcon />
                </div>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section shell" id="contact">
          <div className="contact-panel">
            <p className="section-label">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="contact-actions">
              <a className="button button-light" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                {t.contactCta}<ExternalLinkIcon />
              </a>
              <a className="button button-ghost" href={profileLinks.whatsapp} target="_blank" rel="noreferrer">
                {t.whatsappCta}<ExternalLinkIcon />
              </a>
              <a className="button button-ghost" href={profileLinks.github} target="_blank" rel="noreferrer">
                {t.githubCta}<ExternalLinkIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} · {t.footer}</p>
          <a href="#top">{t.backToTop} ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
