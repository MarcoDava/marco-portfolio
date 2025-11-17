


export default function Project(props) {
  return (
    <div className="project-container" style={{ position: "relative" }}>
        
        <a href={props.projectLink}>
            <img className="project-image" src={props.image} alt="project-pic" />
            <h3 className="project-title">{props.projectTitle}</h3>
            <p className="project-summary">{props.projectSummary}</p>
            <span className="project-link">View Project</span>
        </a>
    </div>
  )
}
