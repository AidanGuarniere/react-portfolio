import { useState } from "react"

function Portfolio ({currentTitle}) {
    const [categories] = useState([
        {type: "full-stack"},
        {type: "back-end"},
        {type: "front-end"},
    ])

    const [currentCategory, setCurrentCategory] = useState(categories[0])

    return (
        <section>
            <div>
            <ul>
                    {categories.map((category) => (
                        <li className = 
                            {category.type}
                            key={category.type}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            > {category.type}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )

}

export default Portfolio