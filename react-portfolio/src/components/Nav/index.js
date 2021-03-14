import React,{useEffect} from 'react'

function Nav({titles, currentTitle, setCurrentTitle}) {

    useEffect(() => {
        document.title = currentTitle.name
    }, [currentTitle])

    return (
        <header>
            <h1> Aidan Guarniere </h1>
            <nav>
                <ul>
                    {titles.map((title) => (
                        <li className = 
                            {title.name}
                            key={title.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentTitle(title)
                                }}
                            > {title.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav
