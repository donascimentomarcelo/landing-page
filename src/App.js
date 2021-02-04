import avatar from './profile.png';
import './App.css';
import Header from './layout/Header/Header';
import Container from './layout/Container/Container';
import Avatar from './layout/Avatar/Avatar';
import SocialNetwork from './layout/SocialNetwork/SocialNetwork';

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

  return (
    <div className="app">
      <Header />
      <Container>
        <Avatar avatar={avatar} />
        <SocialNetwork
          data={socialNetwork} />
      </Container>
    </div>
  );
}

export default App;
