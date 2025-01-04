import Header from './Header.jsx'
import Home from './Home.jsx'
import Transition from "./Transition.jsx"

function App() {
  
  return(
    <>
      <div className="popUp">
        <h1 className="errorMsg">Screen size is too small! 
          <br></br>
          Enlarge the screen to see the content 😊</h1>
      </div>
      <Header/>
      <Home/>
      <Transition/>
    </>
  );
}

export default App
