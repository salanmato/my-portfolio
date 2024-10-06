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
          O mais importante aqui é que o nome do meu cachorro é Chuck Norris Valdívia e ele tem quase 20 anos de idade. Na escolha do nome uni duas coisas que gosto muito: o Palmeiras e o cinema.<br/>
          Alguns dos meus hobbies são assistir jogos do Palmeiras, passar 5 minutos para escolher entre um filme coreano de 3 horas e um do Guy Ritchie, e jogar vídeo-game.
          Quando não estou entre esses dois tipos de filme, sorteio os filmes que assisto.<br/>Escuto música para trabalhar, e isso implica que estou sempre ouvindo algo novo. 
          Adoro desenvolver soluções, desde as mais simples até algo mais complexo, desde que resolva o problema em questão.<br/>
          Estou sempre em busca de aprender algo novo, algumas das atividades que mais gosto envolvem aprendizado, como: desenhar, pintar, saber regras de esportes que não ter ninguém para comentar sobre, e entender porque existem tantos jogadores coreanos de Tekken de alto nível. 
          Sou do tipo de pessoa que sabe um pouquinho de tudo.
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