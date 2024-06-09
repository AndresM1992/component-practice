import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';


function App() {
return(
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className ="App-logo" alt="logo" />
      <p> 
        Estructura Inicial del Proyecto y Limpia
      </p>
      <SecondComponent />
      <MyComponent />
    </header>
  </div>
)
}

export default App;