import Empregos from "./Empregos";
import Educacao from "./Educacao"
import { Link } from 'react-router-dom';
import './index.css'
import returnArrowSVG from './../../images/return-arrow.svg'

const About = () => {
  return (
    <div>
      <Link to="/"><img className="returnArrow" src={returnArrowSVG} alt="seta apontando para a esquerda"></img></Link>

      <div className="about-container">
        <h1 className="title">SOBRE</h1>
        <p className="aboutme-text">
          O mais importante aqui é que o nome do meu cachorro é Chuck Norris Valdívia. Uni duas coisas que gosto muito: o Palmeiras e o cinema.
          Meus hobbies são assistir jogos do Palmeiras, passar 5 minutos para escolher entre um filme coreano de 3 horas e um do Guy Ritchie, e jogar vídeo-game.
          Sim, eu sorteio a maioria dos filmes que assisto. Escuto música para trabalhar e isso implica que estou sempre ouvindo algo novo. 
          Adoro desenvolver soluções, desde as mais simples até algo mais complexo, desde que resolva o problema.
          Sempre estou em busca de aprender algo novo, ás vezes não estou buscando mas aprendo algo.
        </p>

        <Empregos></Empregos>

        <Educacao></Educacao>

        <h2>CONTATO</h2>
        <Link to="https://www.linkedin.com/in/salanmato/" className='link'>linkedin</Link>

      </div>
    </div>
  );
};

export default About;