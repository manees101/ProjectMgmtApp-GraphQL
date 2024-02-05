import React from 'react'
import {gql,useQuery} from "@apollo/client"
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'
import Spinner from './Spinner'
const Clients = () => {
   const {loading,error,data}=useQuery(GET_CLIENTS)
   console.log(data)
   if(loading)
   {

    return <Spinner/>
   }
   if(error)
   {
    console.log(error)
    return <p>Something went wrong</p>
   }
  return <>
  {!loading&&!error&&(
    <table className='table table-hover'>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone #</th>
            <th></th>  
            </tr>
        </thead>
        <tbody>
        {data?.clients?.map((client)=>(<ClientRow key={client._id} client={client}>
    </ClientRow>))}
        </tbody>
       </table>)}
  </> 
  
}

export default Clients