import React,{useEffect} from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';


function Footer({titles, currentTitle, setCurrentTitle}) {

    useEffect(() => {
        document.title = currentTitle.name
    }, [currentTitle])

    return (
        <footer>
            <h1> Aidan Guarniere </h1>
            <a href = "https://github.com/AidanGuarniere" />
            <a href = "https://www.linkedin.com/in/aidan-guarniere-56299719b/" />
            <a href= "https://google.dev/u/114089403886256497743" />
        </footer>
    )
}

export default Nav