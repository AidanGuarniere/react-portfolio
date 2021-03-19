import './App.css';
import {useState} from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'

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
        <Contact
          currentTitle={currentTitle}
        ></Contact>
      ) :currentTitle.name === "resume" ?(
        <Resume
          currentTitle={currentTitle}
        ></Resume>
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
