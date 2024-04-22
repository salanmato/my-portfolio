import './index.css'

const Item = ({project}) => {
    return(
        <div className="project-page">
        {console.log(project)}
            <h1 className='project-title'>{project.title}</h1>
            <h6>{project.status}</h6>
            <h4>{project.description}</h4>
            <img src={project.image} />
            <p>{project.tags.join(' - ')}</p>
            {project.links.github && <a href={project.links.github}><p>Github: {project.links.github}</p></a>}
            {project.links.site && <a href={project.links.site}><p>Projeto: {project.links.site}</p></a>}

        </div>
    )
}

export default Item