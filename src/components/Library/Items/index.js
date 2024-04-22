import { projectsList } from "./projectsList"
import './index.css'
import { Link } from "react-router-dom";


const Items = ({ arrFilters }) => {
    console.log(arrFilters)
    let projects = []

    projectsList.map(project => {
        if (arrFilters.some(filter => project.tags.includes(filter))) {
            projects.push(project)
        }
    })


    return (
        <div className="items-container">
            {projects.map((project, key) => {
                return (
                    <Link to={{ pathname: `/library/${project.title}` }} state={{ project: project }} className="project-link">
                        <div key={key} className="project-container">

                            <h1 className="item-title">{project.title}</h1>
                            <h3 className="item-status">{project.status}</h3>
                            <h4 className="item-description">{project.description}</h4>
                            <p className="item-tags">{project.tags.join(' - ')}</p>

                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Items