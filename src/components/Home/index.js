import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {
    return (
        <div className='container'>
            <div>
                <h1><span>FRONT-END
                    DEVELOPER</span>,
                    QUE ADORA ASSISTIR FILMES E DESCUBRIR MÚSICAS NOVAS</h1>
                <div className='container-links'>
                    <p><Link to="/about" className='link'>sobre Alan</Link></p>
                    <p><Link to="/library" className='link'>Conheça minha biblioteca de projetos</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Home;