import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {
    return (
        <div className='container'>
            <div>
                <h1>ISTO NÃO É UM <span>PORTFÓLIO</span></h1>
                <div className='container-links'>
                    <p><Link to="/library" className='link'>Conheça minha biblioteca de projetos</Link></p>
                    <p><Link to="/about" className='link'>sobre Alan</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Home;