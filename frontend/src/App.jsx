import './App.css'
import JobCard from './components/JobCard'

function App() {

  return (
      <>
        <JobCard job={{name : "VFX Artist", description : "VFX Artist Description", skills : "Houdini, Nuke"}} />
        <JobCard job={{name : "Developer", description : "Developer description", skills : "Python, C++"}} />
      </>
  )
}

export default App