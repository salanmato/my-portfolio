import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {
    return (
        <div className='container'>
            <div>
                <h1><span>FRONT-END
                    DEVELOPER</span>,
                    PROJETO DE CINÉFILO E PAI DE PET</h1>
                <div className='container-links'>
                    <p><Link to="/about" className='link'>sobre Alan</Link></p>
                    <p><Link to="/library" className='link'>Conheça minha biblioteca de projetos</Link></p>

                </div>
            </div>

            <div className='img-space'></div>
        </div>
    );
};

export default Home;