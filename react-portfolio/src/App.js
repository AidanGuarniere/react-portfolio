import './App.css';
import {useState} from 'react'
import Nav from './components/Nav'
import About from './components/About'

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
    <div>
      <Nav
        titles={titles}
        setCurrentTitle = {setCurrentTitle}
        currentTitle={currentTitle}
      ></Nav>
    <main>
      {currentTitle.name === "about Me" ? (
      <About
        currentTitle={currentTitle}
      ></About>
      ) :currentTitle.name === "portfolio" ?(
        <div>
          portfolio
        </div>
      ) :currentTitle.name === "contact" ?(
        <div>
          contact
        </div>
      ) :currentTitle.name === "resume" ?(
        <div>
          resume
        </div>
      ) : (
        <div>
          You're not supposed to be in here!
        </div>
      )

      }
    </main>
    </div>
  );
}

export default App;
