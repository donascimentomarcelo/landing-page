import avatar from './profile.png';
import './App.css';
import Header from './layout/Header/Header';
import Container from './layout/Container/Container';
import Avatar from './layout/Avatar/Avatar';
import SocialNetwork from './layout/SocialNetwork/SocialNetwork';
import Description from './layout/Description/Description';
import Skill from './layout/Skill/Skill';
import Ide from './layout/Ide/Ide';
import Footer from './layout/Footer/Footer';

function App() {

  const description = [
    { title: '"Olá! '},
    { title: 'Bem vindo a minha página!!! '},
    { title: 'Meu nome é Marcelo e tenho 26 anos. '},
    { title: 'Sou formado em Tecnologia da Informação (Análise e Desenvolvimento de Sistemas) '},
    { title: 'e sou formado na MIT de em Engenharia de Software com tecnologia Java."'},
  ]

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
    '"HTML5",',
    '"CSS3",',
    '"SCSS",',
    '"Javascript",',
    '"AngularJs",',
    '"Angular +2",',
    '"ReactJs",',
    '"Redux",',
  ]

  const skillsBackend = [
    '"Java/Spring MVC/Spring Boot",',
    '"PHP/Laravel",',
  ]

  const skillsDatabase = [
    '"Mysql",',
    '"Oracle",',
    '"PostgreSql",',
    '"MongoDB ",',
  ]

  const skillsMobile = [
    '"Ionic +3",',
    '"React Native",',
  ]

  const skillsDevOps = [
    '"Microserviços",',
    '"APIs",',
    '"Jenkins",',
    '"Docker",',
    '"Git",',
  ]

  return (
    <div className="app">
      <Header />
      <Container>
        <Avatar avatar={avatar} />
          <SocialNetwork
            name="Marcelo Sant'Anna"
            occupation='Desenvolvedor Fullstack'
            data={socialNetwork} />
        <Ide>
          <Description
            title='descricao' 
            description={description}/>
          <Skill
            type='frontend' 
            skills={skillsFrontend}/>
          <Skill
            type='backend' 
            skills={skillsBackend}/>
          <Skill
            type='bancoDeDados' 
            skills={skillsDatabase}/>
          <Skill
            type='Mobile' 
            skills={skillsMobile}/>
          <Skill
            type='DevOps' 
            skills={skillsDevOps}/>
        </Ide>
      </Container>
      <Footer
        contact={socialNetwork}/>
    </div>
  );
}

export default App;
