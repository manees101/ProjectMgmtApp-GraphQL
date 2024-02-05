import {BrowserRouter,Route,Routes} from "react-router-dom"
import NotFound from "./pages/NotFound"
import './App.css'
import Header from './components/Header'
import {InMemoryCache,ApolloClient,ApolloProvider} from "@apollo/client"
import Home from "./pages/Home"
import Project from "./pages/Project"

const cache=new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming){
            return incoming
          }
        },
        projects:{
          merge(existing,incoming){
            return incoming
          }
        },
      }
    }
  }
})
const client=new ApolloClient({
  uri:"https://project-mgmt-app-graph-ql.vercel.app/graphql",
  cache
})
function App() {


  return (  
    <ApolloProvider client={client}>
    
      <BrowserRouter>
      <Header/>
      <div className='container'>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/project/:id" element={<Project/>}/>
    <Route path="*" element={<NotFound/>}/>

   </Routes>
      </div>
   
      </BrowserRouter>
    
    </ApolloProvider>
  )
}

export default App
