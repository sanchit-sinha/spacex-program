import { useState , useEffect } from 'react'
import Header from './components/Header'
import Programs from './components/Programs'

function App() {
  const [link , setLink] = useState({url : 'https://api.spacexdata.com/v3/launches?limit=100'})
  const [programs , setPrograms] = useState([])
  const [resetstatus , setResetstatus] = useState(false)
  const APIlink = "https://api.spacexdata.com/v3/launches?limit=100"
  var launch_filter = false
  var land_filter = false
  var year_value = ""
  
  // fetch programs from json
  const fetchPrograms = async (Url) => {
    const res = await fetch(Url)
    const data = await res.json()

    // console.log(data)
    return data
  }

  //  to show something as the page loads
  useEffect(() => {
    const data = localStorage.getItem("newAPI_Url");
    var newAPI = link.url
    if(data){
      newAPI = JSON.parse(data).url
      setLink(JSON.parse(data));
    }

    const getPrograms = async () => {
      const programsfromserver = await fetchPrograms(newAPI)
      setPrograms(programsfromserver)
    }

    getPrograms()
  } , [])

  useEffect(() => {
    localStorage.setItem("newAPI_Url", JSON.stringify(link))
  });

  // set the filter options as per the URL
  var newLink = link.url
  var filterLaunch_success = "&launch_success=true"
  var filterLand_success = "&land_success=true"
  var filterYear = "&launch_year="

  var index_filterLaunch_success = newLink.indexOf(filterLaunch_success)
  var index_filterLand_success = newLink.indexOf(filterLand_success)
  var index_filterYear = newLink.indexOf(filterYear)

  if(index_filterLaunch_success !== -1) launch_filter = true
  if(index_filterLand_success !== -1) land_filter = true
  if(index_filterYear !== -1){
    var year_ele
    for(year_ele = index_filterYear + 1 ; year_ele < newLink.length ; year_ele++){
      if(newLink[year_ele] === '&' || newLink[year_ele] === '/') break;
      if(newLink[year_ele] >= '0' && newLink[year_ele] <= '9'){
        year_value = year_value + newLink[year_ele]      
      }
    }
  }

  //FUNCTIONS 

  //changing the link on selecting filter
  const toggleFilter = async(status , text) => {
    var substring = text.data
    var Url = link.url
    var newUrl

    if(status === false){
      newUrl = Url.replace(substring,'')
      setLink({...link , url:newUrl})
    }
    else{
      newUrl = Url + substring
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

    const programsfromserver = await fetchPrograms(newUrl)
    setPrograms(programsfromserver)
  }

  // resetting filters
  const resetFilters = () => {
    setResetstatus(true)
  }
  if(resetstatus){
    setResetstatus(false)
    launch_filter = false
    land_filter = false
    year_value = ""
    var assignLink = APIlink
    setLink({...link , url:assignLink})
    var Programs_from_server =  fetchPrograms(assignLink)
    setPrograms(Programs_from_server)
  }
  
  // console.log("link.url : " , link.url)
  // console.log(newLink);
  // console.log("launch filter " , launch_filter)
  // console.log("land filter" , land_filter)
  // console.log("year value " , year_value)
  
  return (
    <div className="container">
      {/* <p>{link.url}</p> */}
      <Header onReset={resetFilters} onToggle = {toggleFilter} launch_filter = {launch_filter} land_filter = {land_filter} year_value = {year_value} changeYear = {updateYear} />
      {programs.length > 0 ? <Programs programs = {programs}/> : 'No Data To Show'}
    </div>
  );
}

export default App;