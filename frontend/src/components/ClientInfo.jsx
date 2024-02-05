import React from 'react'
import { FaEnvelope,FaPhone,FaIdBadge,FaExclamationTriangle } from 'react-icons/fa'

const ClientInfo = ({client}) => {
    if(!client)
    {
        return <div className='d-flex flex-column gap-3 justify-content-center align-items-center'>
            <FaExclamationTriangle/>
            <p>Client not found</p>
        </div>
    }
  return (
    <>
    <h5 className='mt-5'>
      Client Information
    </h5>
    <ul className="list-group">
        <li className="list-group-item">
            <FaIdBadge className='icon'/> {client?.name} 
        </li>
        <li className="list-group-item">
            <FaEnvelope className='icon'/> {client?.email} 
        </li>
        <li className="list-group-item">
            <FaPhone className='icon'/> {client?.phone} 
        </li>
    </ul>
    </>
  )
}

export default ClientInfo