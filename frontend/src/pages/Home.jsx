import React from 'react'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import AddClientModal from '../components/AddClientModal'
import AddProjectModal from '../components/AddProjectModal'
const Home = () => {
  return (
    <>
        <div className="d-flex mb-2 gap-3">
            <AddClientModal/>
            <AddProjectModal/>
        </div>
        <Projects/>
        <Clients/>
    </>
  )
}

export default Home