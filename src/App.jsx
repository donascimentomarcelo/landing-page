import { useEffect, useState } from "react";
import avatar from "./profile.webp";
import "./App.scss";

const profileLinks = {
  github: "https://github.com/donascimentomarcelo",
  linkedin: "https://www.linkedin.com/in/santanna-developer",
};

const projects = [
  {
    name: "python-app-backstage",
    url: "https://github.com/donascimentomarcelo/python-app-backstage",
    kind: "featured",
    tags: ["Backstage", "Python", "Platform Engineering"],
  },
  {
    name: "hexagonal-architecture-spring-boot",
    url: "https://github.com/donascimentomarcelo/hexagonal-architecture-spring-boot",
    kind: "featured",
    tags: ["Java", "Spring Boot", "Hexagonal Architecture"],
  },
  {
    name: "mba-terraform",
    url: "https://github.com/donascimentomarcelo/mba-terraform",
    kind: "featured",
    tags: ["Terraform", "Azure", "IaC"],
  },
  {
    name: "DevOpsTerraform",
    url: "https://github.com/donascimentomarcelo/DevOpsTerraform",
    kind: "featured",
    tags: ["Terraform", "CI/CD", "DevOps"],
  },
  {
    name: "cucumber-poc",
    url: "https://github.com/donascimentomarcelo/cucumber-poc",
    kind: "lab",
    tags: ["Cucumber", "BDD", "Testing"],
  },
  {
    name: "mba-observabilidade",
    url: "https://github.com/donascimentomarcelo/mba-observabilidade",
    kind: "lab",
    tags: ["Observability", "Spring Boot", "Monitoring"],
  },
];

const content = {
  pt: {
    skip: "Pular para o conteúdo",
    nav: {
      expertise: "Especialidades",
      impact: "Impacto",
      projects: "Projetos",
      principles: "Arquitetura",
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
    primaryCta: "Conheça meus projetos",
    secondaryCta: "Conectar no LinkedIn",
    portraitAlt: "Marcelo Sant'Anna, Senior Backend Software Engineer",
    codeLabel: "engineering-profile.yml",
    codeLines: [
      ["focus", "distributed systems"],
      ["approach", "reliability by design"],
      ["delivery", "from architecture to production"],
    ],
    impactLabel: "Impacto em números",
    impactTitle: "Experiência traduzida em resultados mensuráveis.",
    impactIntro:
      "Atuação em ambientes de alta criticidade, com foco em performance, disponibilidade, segurança e velocidade de entrega.",
    metrics: [
      { value: "1M", suffix: " req/min", label: "capacidade-alvo em arquitetura de APIs PIX" },
      { value: "35%", prefix: "−", label: "de latência em fluxos críticos" },
      { value: "40%", prefix: "+", label: "de capacidade em períodos de pico" },
      { value: "50%", prefix: "~", label: "mais rapidez no provisionamento com Terraform" },
    ],
    expertiseLabel: "Especialidades",
    expertiseTitle: "Profundidade técnica sem perder a visão do todo.",
    expertiseIntro:
      "Atuo do desenho da solução à operação, equilibrando qualidade, pragmatismo e evolução sustentável.",
    expertise: [
      {
        number: "01",
        title: "Backend & APIs",
        description:
          "Serviços de alta criticidade, APIs REST seguras e integrações corporativas com foco em clareza e manutenção.",
        skills: ["Java", "Spring Boot", "Spring Security", "JPA", "REST APIs"],
      },
      {
        number: "02",
        title: "Sistemas distribuídos",
        description:
          "Arquiteturas orientadas a eventos, comunicação assíncrona, idempotência, resiliência e consistência distribuída.",
        skills: ["Kafka", "Azure Service Bus", "Redis", "Microservices", "Keycloak"],
      },
      {
        number: "03",
        title: "Cloud & Platform",
        description:
          "Infraestrutura reproduzível, pipelines confiáveis e ambientes preparados para escalar com segurança.",
        skills: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes / AKS"],
      },
      {
        number: "04",
        title: "Qualidade & Observabilidade",
        description:
          "Testes e telemetria como parte da arquitetura para reduzir risco e acelerar decisões em produção.",
        skills: ["JUnit", "Mockito", "Cucumber", "k6", "Application Insights"],
      },
    ],
    casesLabel: "Cases selecionados",
    casesTitle: "Decisões técnicas com efeito real no produto.",
    cases: [
      {
        context: "Pagamentos em escala",
        title: "Arquitetura preparada para alto throughput",
        description:
          "Desenho de APIs PIX com requisitos rigorosos de segurança, resiliência e observabilidade, orientado a uma capacidade de até 1 milhão de requisições por minuto.",
        stack: "Java · Spring Boot · Mensageria · Cloud",
      },
      {
        context: "Performance e confiabilidade",
        title: "Menos latência, mais capacidade",
        description:
          "Otimização de fluxos críticos e identificação de gargalos, reduzindo a latência em 35% e ampliando em 40% a capacidade durante picos.",
        stack: "Profiling · Cache · Load testing · Observability",
      },
      {
        context: "Cloud enablement",
        title: "Infraestrutura como produto",
        description:
          "Padronização de infraestrutura e automação com Terraform, reduzindo em aproximadamente 50% o tempo necessário para provisionar ambientes.",
        stack: "Terraform · Azure · CI/CD · Kubernetes",
      },
    ],
    projectsLabel: "Open source & laboratórios",
    projectsTitle: "Projetos que demonstram como eu construo.",
    projectsIntro:
      "Implementações práticas de arquitetura, platform engineering, infraestrutura como código, testes e observabilidade.",
    projectDescriptions: {
      "python-app-backstage":
        "Template de software para padronizar a criação e a experiência de serviços Python com Backstage.",
      "hexagonal-architecture-spring-boot":
        "Aplicação Spring Boot organizada por portas e adaptadores, com o domínio protegido de detalhes externos.",
      "mba-terraform":
        "Infraestrutura declarativa em Azure, estruturada para aprendizado, repetibilidade e evolução segura.",
      DevOpsTerraform:
        "Práticas de DevOps e automação de infraestrutura conectando Terraform ao ciclo de entrega.",
      "cucumber-poc":
        "Laboratório de testes de aceitação com cenários BDD legíveis e executáveis.",
      "mba-observabilidade":
        "Laboratório de telemetria para compreender comportamento, saúde e falhas de aplicações.",
    },
    featured: "Destaque",
    lab: "Laboratório",
    repository: "Ver repositório",
    principlesLabel: "Princípios de arquitetura",
    principlesTitle: "Tecnologia é consequência do contexto.",
    principlesIntro:
      "Boas arquiteturas tornam decisões explícitas, protegem o domínio e criam espaço para o sistema evoluir.",
    principles: [
      { title: "Entender antes de desenhar", text: "Requisitos, restrições, riscos e atributos de qualidade vêm antes da stack." },
      { title: "Projetar para falhas", text: "Timeouts, retries, idempotência e observabilidade são decisões de design." },
      { title: "Reduzir acoplamento", text: "DDD, arquitetura hexagonal e contratos claros preservam a capacidade de mudança." },
      { title: "Operar o que construímos", text: "Entrega só termina quando o software é observável, seguro e sustentável em produção." },
    ],
    contactLabel: "Vamos conversar",
    contactTitle: "Engenharia sólida começa com uma boa conversa.",
    contactText:
      "Se você está construindo sistemas críticos, modernizando uma plataforma ou fortalecendo sua engenharia backend, vamos trocar ideias.",
    contactCta: "Falar pelo LinkedIn",
    githubCta: "Explorar meu GitHub",
    footer: "Projetado e construído por Marcelo Sant'Anna.",
    backToTop: "Voltar ao topo",
  },
  en: {
    skip: "Skip to content",
    nav: {
      expertise: "Expertise",
      impact: "Impact",
      projects: "Projects",
      principles: "Architecture",
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
    primaryCta: "Explore my work",
    secondaryCta: "Connect on LinkedIn",
    portraitAlt: "Marcelo Sant'Anna, Senior Backend Software Engineer",
    codeLabel: "engineering-profile.yml",
    codeLines: [
      ["focus", "distributed systems"],
      ["approach", "reliability by design"],
      ["delivery", "from architecture to production"],
    ],
    impactLabel: "Impact by the numbers",
    impactTitle: "Experience translated into measurable outcomes.",
    impactIntro:
      "Engineering for mission-critical environments, focused on performance, availability, security, and delivery speed.",
    metrics: [
      { value: "1M", suffix: " req/min", label: "target capacity for PIX API architecture" },
      { value: "35%", prefix: "−", label: "lower latency across critical flows" },
      { value: "40%", prefix: "+", label: "higher peak-load capacity" },
      { value: "50%", prefix: "~", label: "faster provisioning with Terraform" },
    ],
    expertiseLabel: "Expertise",
    expertiseTitle: "Technical depth with a systems-level perspective.",
    expertiseIntro:
      "I work from solution design to production, balancing quality, pragmatism, and sustainable evolution.",
    expertise: [
      {
        number: "01",
        title: "Backend & APIs",
        description:
          "Mission-critical services, secure REST APIs, and enterprise integrations designed for clarity and maintainability.",
        skills: ["Java", "Spring Boot", "Spring Security", "JPA", "REST APIs"],
      },
      {
        number: "02",
        title: "Distributed systems",
        description:
          "Event-driven architectures, asynchronous communication, idempotency, resilience, and distributed consistency.",
        skills: ["Kafka", "Azure Service Bus", "Redis", "Microservices", "Keycloak"],
      },
      {
        number: "03",
        title: "Cloud & Platform",
        description:
          "Reproducible infrastructure, reliable pipelines, and secure environments designed to scale.",
        skills: ["Azure", "AWS", "Terraform", "Docker", "Kubernetes / AKS"],
      },
      {
        number: "04",
        title: "Quality & Observability",
        description:
          "Testing and telemetry built into the architecture to reduce risk and speed up production decisions.",
        skills: ["JUnit", "Mockito", "Cucumber", "k6", "Application Insights"],
      },
    ],
    casesLabel: "Selected case studies",
    casesTitle: "Technical decisions with tangible product impact.",
    cases: [
      {
        context: "Payments at scale",
        title: "Architecture designed for high throughput",
        description:
          "PIX API design under strict security, resilience, and observability requirements, targeting capacity of up to one million requests per minute.",
        stack: "Java · Spring Boot · Messaging · Cloud",
      },
      {
        context: "Performance and reliability",
        title: "Lower latency, higher capacity",
        description:
          "Critical-flow optimization and bottleneck analysis reduced latency by 35% and increased peak-load capacity by 40%.",
        stack: "Profiling · Cache · Load testing · Observability",
      },
      {
        context: "Cloud enablement",
        title: "Infrastructure as a product",
        description:
          "Infrastructure standardization and Terraform automation reduced environment provisioning time by approximately 50%.",
        stack: "Terraform · Azure · CI/CD · Kubernetes",
      },
    ],
    projectsLabel: "Open source & labs",
    projectsTitle: "Projects that show how I build.",
    projectsIntro:
      "Hands-on implementations covering architecture, platform engineering, infrastructure as code, testing, and observability.",
    projectDescriptions: {
      "python-app-backstage":
        "A software template that standardizes Python service creation and developer experience with Backstage.",
      "hexagonal-architecture-spring-boot":
        "A ports-and-adapters Spring Boot application that keeps the domain isolated from external details.",
      "mba-terraform":
        "Declarative Azure infrastructure structured for learning, repeatability, and safe evolution.",
      DevOpsTerraform:
        "DevOps and infrastructure automation practices connecting Terraform to the delivery lifecycle.",
      "cucumber-poc":
        "An acceptance-testing lab with readable, executable BDD scenarios.",
      "mba-observabilidade":
        "A telemetry lab for understanding application behavior, health, and failures.",
    },
    featured: "Featured",
    lab: "Lab",
    repository: "View repository",
    principlesLabel: "Architecture principles",
    principlesTitle: "Technology follows context.",
    principlesIntro:
      "Good architectures make decisions explicit, protect the domain, and create room for systems to evolve.",
    principles: [
      { title: "Understand before designing", text: "Requirements, constraints, risks, and quality attributes come before the stack." },
      { title: "Design for failure", text: "Timeouts, retries, idempotency, and observability are design decisions." },
      { title: "Reduce coupling", text: "DDD, hexagonal architecture, and clear contracts preserve the ability to change." },
      { title: "Operate what we build", text: "Delivery ends when software is observable, secure, and sustainable in production." },
    ],
    contactLabel: "Let's talk",
    contactTitle: "Solid engineering starts with a good conversation.",
    contactText:
      "If you are building critical systems, modernizing a platform, or strengthening backend engineering, let's exchange ideas.",
    contactCta: "Message me on LinkedIn",
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
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#impact">{t.nav.impact}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#principles">{t.nav.principles}</a>
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
              <a className="button button-primary" href="#projects">
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

        <section className="impact section" id="impact">
          <div className="shell">
            <SectionHeading label={t.impactLabel} title={t.impactTitle} intro={t.impactIntro} />
            <div className="metrics-grid">
              {t.metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <p className="metric-value">
                    {metric.prefix}<strong>{metric.value}</strong>{metric.suffix}
                  </p>
                  <p>{metric.label}</p>
                </article>
              ))}
            </div>
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
                <ul aria-label={`${item.title} skills`}>
                  {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cases section" aria-labelledby="cases-title">
          <div className="shell">
            <SectionHeading label={t.casesLabel} title={t.casesTitle} />
            <div className="cases-list">
              {t.cases.map((item, index) => (
                <article className="case-row" key={item.title}>
                  <div className="case-index">0{index + 1}</div>
                  <div className="case-context">{item.context}</div>
                  <div className="case-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>{item.stack}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section shell" id="projects">
          <SectionHeading label={t.projectsLabel} title={t.projectsTitle} intro={t.projectsIntro} />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                className={`project-card ${project.kind}`}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <div className="project-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-kind">{project.kind === "featured" ? t.featured : t.lab}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{t.projectDescriptions[project.name]}</p>
                <ul aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <span className="project-link">
                  {t.repository}
                  <ExternalLinkIcon />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="principles section" id="principles">
          <div className="shell principles-layout">
            <SectionHeading label={t.principlesLabel} title={t.principlesTitle} intro={t.principlesIntro} />
            <ol className="principles-list">
              {t.principles.map((principle, index) => (
                <li key={principle.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </li>
              ))}
            </ol>
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
