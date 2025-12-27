import React from "react";
import avatar from "./profile.png";
import "./App.scss";
import Header from "./layout/Header/Header";
import Container from "./layout/Container/Container";
import Avatar from "./layout/Avatar/Avatar";
import SocialNetwork from "./layout/SocialNetwork/SocialNetwork";
import Description from "./layout/Description/Description";
import Skill from "./layout/Skill/Skill";
import Ide from "./layout/Ide/Ide";
import Footer from "./layout/Footer/Footer";

function App() {
  const [language, setLanguage] = React.useState("PT-br");

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date("1994/10/01");

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const getYearsOfExperience = () => {
    const currentYear = new Date().getFullYear();
    const startingYear = 2015;
    return currentYear - startingYear;
  };

  const descriptionPt = [
    { title: '"Olá! Seja bem-vindo à minha página.' },
    {
      title: `Meu nome é Marcelo Sant’Anna, tenho ${getAge()} anos e atuo como Desenvolvedor Full Stack Sênior.`,
    },
    {
      title: `Possuo mais de ${getYearsOfExperience()} anos de experiência no desenvolvimento de sistemas escaláveis e de alta criticidade.`,
    },
    {
      title:
        "Atuo principalmente com Java e Spring Boot no backend, e Angular e React no frontend.",
    },
    {
      title:
        "Tenho forte experiência em sistemas financeiros, integrações complexas, cloud computing e arquitetura moderna.",
    },
    { title: 'Abaixo estão minhas principais habilidades técnicas."' },
  ];

  const descriptionEn = [
    { title: '"Hi! Welcome to my page.' },
    {
      title: `My name is Marcelo Sant’Anna, I’m ${getAge()} years old and a Senior Full Stack Software Engineer.`,
    },
    {
      title: `I have over ${getYearsOfExperience()} years of experience building scalable and mission-critical systems.`,
    },
    {
      title:
        "My main expertise is backend development with Java and Spring Boot, combined with Angular and React on the frontend.",
    },
    {
      title:
        "I have strong experience with financial systems, complex integrations, cloud computing, and modern software architecture.",
    },
    { title: 'Below you can find my main technical skills."' },
  ];

  const socialNetwork = [
    {
      title: "Github",
      url: "https://github.com/donascimentomarcelo",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/marcelo-nascimento-0b734a189/",
    },
    {
      title: "Whatsapp",
      url: "https://api.whatsapp.com/send?phone=5521982525286",
    },
  ];

  const backendSkills = [
    '"Java 17+ | Spring Boot"',
    '"Spring Security | Spring Data JPA"',
    '"REST APIs | Microservices"',
    '"PHP | Laravel"',
    '"NodeJs | NestJs"',
  ];

  const devopsSkills = [
    '"Docker"',
    '"CI/CD"',
    '"Jenkins"',
    '"Git"',
    '"GitLab CI | Azure DevOps"',
  ];

  const architectureSkills = [
    '"Clean Architecture"',
    '"Hexagonal Architecture"',
    '"SOLID Principles"',
    '"Domain-Driven Design (DDD)"',
    '"API Design"',
  ];

  const databaseSkills = [
    '"PostgreSQL"',
    '"MySQL"',
    '"Oracle"',
    '"SQL Server"',
    '"MongoDB"',
    '"Redis"',
  ];

  const cloudSkills = ['"AWS"', '"Azure"', '"Kubernetes"', '"Terraform"'];

  const frontendSkills = [
    '"HTML5 | CSS3 | SCSS | Javascript | TypeScript"',
    '"Angular"',
    '"React"',
  ];

  const testingSkills = [
    '"Unit Testing"',
    '"Integration Testing"',
    '"Load Testing (K6)"',
    '"Code Review"',
  ];

  const mobileSkills = ['"React Native"'];

  const changeLanguage = () => {
    const currentLanguage = language === "PT-br" ? "EN-us" : "PT-br";
    setLanguage(currentLanguage);
  };

  const filterByLanguagePtBr = (param1, param2) =>
    language === "PT-br" ? param1 : param2;

  return (
    <div className="app">
      <Header
        language={filterByLanguagePtBr("PT-br", "EN-us")}
        handleClickLanguage={() => changeLanguage()}
      />
      <Container>
        <Avatar avatar={avatar} />
        <SocialNetwork
          name="Marcelo Sant'Anna"
          occupation={filterByLanguagePtBr(
            "Desenvolvedor Java Sênior",
            "Senior Java Engineer"
          )}
          data={socialNetwork}
        />
        <Ide>
          <Description
            title="description"
            description={filterByLanguagePtBr(descriptionPt, descriptionEn)}
          />
          <Skill type="architecture" skills={architectureSkills} />
          <Skill type="backend" skills={backendSkills} />
          <Skill type="cloud" skills={cloudSkills} />
          <Skill type="devops" skills={devopsSkills} />
          <Skill type="database" skills={databaseSkills} />
          <Skill type="frontend" skills={frontendSkills} />
          <Skill type="testing" skills={testingSkills} />
          <Skill type="mobile" skills={mobileSkills} />
        </Ide>
      </Container>
      <Footer contact={socialNetwork} />
    </div>
  );
}

export default App;
