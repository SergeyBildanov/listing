import './App.css'
import Listing from './Listing'
import elsaData from './assets/elseData';
function App() {

  return (
    <Listing items={elsaData}/>
  )
}

export default App;
