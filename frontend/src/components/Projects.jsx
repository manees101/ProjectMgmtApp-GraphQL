import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQueries'
import Spinner from './Spinner'
import ProjectCard from './ProjectCard'
const Projects = () => {
    const {loading,error,data}=useQuery(GET_PROJECTS)
    if(error)
    {
        return <p>Something went wrong. Please reload the page</p>
    }
    if(loading)
    {
        return <Spinner/>
    }
    console.log(data)
  return (
    <>
    {data?.projects?.length ? (
        <div className='row'>
           {
            data.projects.map((project)=><ProjectCard key={project._id} project={project}/>)
           }
        </div>
    ) :(<p>No Projects</p>)}
    </>
    
  )
}

export default Projects