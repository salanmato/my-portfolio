import './index.css'
import { Link, useLocation } from 'react-router-dom';
import returnArrowSVG from '../../../../images/return-arrow.svg'

const Item = () => {
    const location = useLocation()
    const project = location.state.project
    console.log(location.state.project)

    return (
        <div>
            <Link to="/library"><img className="returnArrow" src={returnArrowSVG} alt="seta apontando para a esquerda"></img></Link>
            <div className="project-page">
                <h1 className='project-title'>{project.title}</h1>
                <p className='project-tags'>{project.tags.join(' - ')}</p>
                <h6 className='project-status'>{project.status}</h6>
                <h4 className='project-description'>{project.description}</h4>
                {project.links.github && <p  ><a className='project-links' href={project.links.github}>Github</a></p>}
                {project.links.site && <p > <a href={project.links.site} className='project-links'>Site do Projeto</a></p>}
                {project.image && <img src={`${process.env.PUBLIC_URL}/images/${project.image}.jpg`} className='project-img' />}

                
            </div>
        </div>
    )
}

export default Item