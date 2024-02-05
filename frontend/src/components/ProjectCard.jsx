import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className="col-md-4 mt-4">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between algin-items-center">
                  <h5 className="card-title">
                    {project.name}
                  </h5>
                  <a href={`/project/${project._id}`} className='btn btn-info'>
                    View
                    </a>    
                </div>
                <p >
                    status: <strong>{project.status}</strong>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard