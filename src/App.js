import React from 'react'
import avatar from './profile.png';
import './App.scss';
import Header from './layout/Header/Header';
import Container from './layout/Container/Container';
import Avatar from './layout/Avatar/Avatar';
import SocialNetwork from './layout/SocialNetwork/SocialNetwork';
import Description from './layout/Description/Description';
import Skill from './layout/Skill/Skill';
import Ide from './layout/Ide/Ide';
import Footer from './layout/Footer/Footer';

function App() {

  const [language, setLanguage] = React.useState('PT-br')

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date("1994/10/01");

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const descriptionPt = [
    { title: '"Olá! Bem vindo à minha página!!! ' },
    { title: `Meu nome é Marcelo e tenho ${getAge()} anos.` },
    { title: 'Sou formado em Tecnologia da Informação (Análise e Desenvolvimento de Sistemas) ' },
    { title: 'e sou formado na MIT de em Engenharia de Software com tecnologia Java.' },
    { title: 'Abaixo está minha lista de habilidades."' },
  ];

  const descriptionEn = [
    { title: '"Hi! Welcome to my page!!! ' },
    { title: `This is Marcelo, and I am ${getAge()}` },
    { title: 'I am trained in systems analysis and development' },
    { title: 'and also in Software Engineer MIT with Java.' },
    { title: 'Bellow is my skills list."' },
  ];

  const socialNetwork = [
    {
      title: 'Github',
      url: 'https://github.com/donascimentomarcelo'
    },
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/marcelo-nascimento-0b734a189/'
    },
    {
      title: 'Whatsapp',
      url: 'https://api.whatsapp.com/send?phone=5521982525286'
    }
  ];

  const skillsFrontend = [
    '"HTML5"',
    '"CSS3"',
    '"SCSS"',
    '"Javascript"',
    '"Typescript"',
    '"AngularJs"',
    '"Angular +2"',
    '"ReactJs"',
    '"Redux"',
  ]

  const skillsBackend = [
    '"Java/Spring MVC/Spring Boot"',
    '"PHP/Laravel"',
    '"NodeJS"',
  ]

  const skillsDatabase = [
    '"Mysql"',
    '"Oracle"',
    '"PostgreSql"',
    '"MongoDB "',
    '"SQLServer "',
  ]

  const skillsMobile = [
    '"Ionic +3"',
    '"React Native"',
  ]

  const skillsDevOps = [
    '"Microservices"',
    '"APIs"',
    '"Jenkins"',
    '"Docker"',
    '"Kubernetes"',
    '"CI/CD"',
    '"AWS"',
    '"Git"',
  ]

  const changeLanguage = () => {
    const currentLanguage = language === 'PT-br' ? 'EN-us' : 'PT-br'
    setLanguage(currentLanguage)
  }

  const filterByLanguagePtBr = (param1, param2) => language === 'PT-br' ? param1 : param2;

  return (
    <div className="app">
      <Header
        language={filterByLanguagePtBr('PT-br', 'EN-us')}
        handleClickLanguage={() => changeLanguage()}
      />
      <Container>
        <Avatar avatar={avatar} />
        <SocialNetwork
          name="Marcelo Sant'Anna"
          occupation={filterByLanguagePtBr('Desenvolvedor Fullstack', 'Fullstack Developer')}
          data={socialNetwork} />
        <Ide>
          <Description
            title='description'
            description={filterByLanguagePtBr(descriptionPt, descriptionEn)} />
          <Skill
            type='frontend'
            skills={skillsFrontend} />
          <Skill
            type='backend'
            skills={skillsBackend} />
          <Skill
            type='database'
            skills={skillsDatabase} />
          <Skill
            type='mobile'
            skills={skillsMobile} />
          <Skill
            type='devops'
            skills={skillsDevOps} />
        </Ide>
      </Container>
      <Footer
        contact={socialNetwork} />
    </div>
  );
}

export default App;
