import { useState , useEffect } from 'react'
import Header from './components/Header'
import Programs from './components/Programs'


function App() {
  const [link , setLink] = useState('https://api.spacexdata.com/v3/launches?limit=100')
  const [programs , setPrograms] = useState([])
  
  // fetch programs from json
  const fetchPrograms = async () => {
    const url = link
    const res = await fetch(url)
    const data = await res.json()

    // console.log(data)
    return data
  }

  //  to show something as the page loads
  useEffect(() => {
    const getPrograms = async () => {
      const programsfromserver = await fetchPrograms()
      setPrograms(programsfromserver)
    }

    getPrograms()
  } , [])


  //changing the link on selecting filter
  const toggleFilter = (status , text) => {
    var substring = text.data
    if(status === true){
      var newLink = link + substring
      setLink(newLink)
    }
    else{
      var newLink = link.replace(substring,'')
      setLink(newLink)
    }
  }
  
  return (
    <div className="container">
      <Header onToggle = {toggleFilter}/>
      {programs.length > 0 ? <Programs programs = {programs}/> : 'No Data To Show'}
    </div>
  );
}

export default App;
