import { useState , useEffect } from 'react'
import Header from './components/Header'
import Programs from './components/Programs'


function App() {
  const [link , setLink] = useState({url : 'https://api.spacexdata.com/v3/launches?limit=100'})
  const [programs , setPrograms] = useState([])
  
  // fetch programs from json
  const fetchPrograms = async (Url) => {
    const res = await fetch(Url)
    const data = await res.json()

    // console.log(data)
    return data
  }

  //  to show something as the page loads
  useEffect(() => {
    const getPrograms = async () => {
      const programsfromserver = await fetchPrograms(link.url)
      setPrograms(programsfromserver)
    }

    getPrograms()
  } , [])


  //changing the link on selecting filter
  const toggleFilter = async(status , text) => {
    var substring = text.data
    var Url = link.url
    var newUrl

    if(status === false){
      newUrl = Url.replace(substring,'')
      // console.log("remove" , newUrl)
      setLink({...link , url:newUrl})
    }
    else{
      newUrl = Url + substring
      // console.log("add" , newUrl)
      setLink({...link , url:newUrl})
    }
    const programsfromserver = await fetchPrograms(newUrl)
    setPrograms(programsfromserver)
  }

  //changing the link on specifying year
  const updateYear= async(text , year) => {
    var yr = String(year)
    var substring = text.data
    var Url = link.url
    var newUrl
    var i
    var already_present
    var index

    if(yr === ""){
      index = Url.indexOf(substring)
      if(index !== -1){
        // already filtered on different year
        already_present = "&"
        for(i = index + 1 ; i < Url.length ; i++){
          if(Url[i] === '&' || Url[i] === '/') break;
          already_present = already_present + Url[i]
        }

        Url = Url.replace(already_present,'')
      }
      newUrl = Url
      setLink({...link , url:newUrl})
    }
    else{
      index = Url.indexOf(substring)
      if(index !== -1){
        // already filtered on different year
        already_present = "&"
        for(i = index + 1 ; i < Url.length ; i++){
          if(Url[i] === '&' || Url[i] === '/') break;
          already_present = already_present + Url[i]
        }

        Url = Url.replace(already_present,'')
      }
      newUrl = Url + substring + yr
      setLink({...link , url:newUrl})
    }

    console.log(newUrl)
    const programsfromserver = await fetchPrograms(newUrl)
    setPrograms(programsfromserver)
  }
  
  return (
    <div className="container">
      <Header onToggle = {toggleFilter} changeYear = {updateYear} />
      {programs.length > 0 ? <Programs programs = {programs}/> : 'No Data To Show'}
    </div>
  );
}

export default App;
