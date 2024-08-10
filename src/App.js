import './App.css';
import Frisstcompo from './components/fristclasscompo';
import {Secondtcompo} from './components/fristclasscompo';
import {Firstfunctionalcompo} from './components/firstfunctionalcompo';
import {Toinone} from './components/firstfunctionalcompo'


function App() {
  return (
    <div className="App">
      <h1>Hello Day-1</h1>
      <Frisstcompo age ="21">
       <h1>udkjhfjkfhskjhfkdjhfkjs</h1>
       <img width="100px" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" />
       <Toinone/>

        
      </Frisstcompo>
      <Secondtcompo/>
      <Firstfunctionalcompo/>
      <Toinone name="moosa"><Frisstcompo/>
      <img width="100px" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" />

      </Toinone>
    </div>
  )
}

export default App;
