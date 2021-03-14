import './App.css';
import {useState} from 'react'
import Nav from './components/Nav'

function App() {
  // define titles
  const [titles] = useState([
    {name: "about Me"},
    {name: "portfolio"},
    {name: "contact"},
    {name: "resume"}, 

  ])

  const [currentTitle, setCurrentTitle] = useState(titles[0]);


  return (
    <main>
      <Nav
        titles={titles}
        setCurrentTitle = {setCurrentTitle}
        currentTitle={currentTitle}
      ></Nav>
    </main>
  );
}

export default App;
