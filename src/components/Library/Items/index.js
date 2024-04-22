import { projectsList } from "./projectsList"
import './index.css'
import { useState } from "react"
import Item from "./Item"

const Items = ( {arrFilters}) => {
    console.log(arrFilters)
    let projects = []
    const [itemClicked, setItemClicked] = useState(false)
    const [projectClicked, setProjectClicked] = useState(null)

    projectsList.map(project => {
        if(arrFilters.some(filter => project.tags.includes(filter))){
            projects.push(project)
        }
    })

    const buildItem = (e) => {
        console.log(e.target.textContent)
        setItemClicked(true)
        setProjectClicked(e.target.textContent)
    }

    return(
        <div className="items-container">
            {projects.map((project, key) => {
                return(
                    <div key={key} onClick={buildItem} className="project-container">
                        <h1 className="item-title">{project.title}</h1>
                        <h3 className="item-status">{project.status}</h3>
                        <h4 className="item-description">{project.description}</h4>
                        <p className="item-tags">{project.tags.join(' - ')}</p>
                        {itemClicked && project.title === projectClicked && <Item project={project}></Item>}
                    </div>
                )
            })}
        </div>
    )
}

export default Items