import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { GET_PROJECT } from '../queries/projectQueries'
import { useQuery } from '@apollo/client'
import Spinner from '../components/Spinner'
import ClientInfo from '../components/ClientInfo'
import DeleteProjectBtn from '../components/DeleteProjectBtn'
import EditProjectForm from '../components/EditProjectForm'
const Project = () => {
const {id}=useParams()
const {loading,error,data}=useQuery(GET_PROJECT,{
    variables:{id}
})
if(loading)
{
    return <Spinner/>
}
if(error)
{
    return <p>Something went wrong. Please reload the page</p>
}
  return !loading&&!error&&(
    <div className='card w-75 mx-auto p-5'>
        <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto mb-3">
            Back
        </Link>
        <h1>
            {data.project.name}
        </h1>
        <p>{data.project.description}</p>
        <h5 className='mt-3'> Project Status</h5>
        <p className='lead'>{data.project.status}</p>
        <ClientInfo client={data.project.client}/>
        <EditProjectForm project={data.project}/>
        <DeleteProjectBtn projectId={id}/>

    </div>
  )
}

export default Project