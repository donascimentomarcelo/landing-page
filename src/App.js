import avatar from './profile.png';
import './App.css';
import Header from './layout/Header/Header';
import Container from './layout/Container/Container';
import Avatar from './layout/Avatar/Avatar';
import SocialNetwork from './layout/SocialNetwork/SocialNetwork';
import Description from './layout/Description/Description';
import Skill from './layout/Skill/Skill';
import Ide from './layout/Ide/Ide';

function App() {

  const socialNetwork = [
    {
      title: 'Github',
      url: 'https://github.com/donascimentomarcelo'
    },
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/marcelo-nascimento-0b734a189/'
    }
  ];

  const skillsFrontend = [
    '"HTML5/CSS3/SCSS",',
    '"Javascript",',
    '"AngularJs",',
    '"Angular +2",',
    '"ReactJs",',
    '"React Native",',
    '"Ionic",',
  ]

  const skillsBackend = [
    '"Java/Spring MVC/Spring Boot",',
    '"PHP/Laravel",',
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
            data={socialNetwork} />
        <Ide>
          <Description />
          <Skill
            type='frontend' 
            skills={skillsFrontend}/>
          <Skill
            type='backend' 
            skills={skillsBackend}/>
        </Ide>
      </Container>
    </div>
  );
}

export default App;
