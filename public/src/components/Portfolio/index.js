import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [categories] = useState([
    { type: "full-stack" },
    { type: "back-end" },
    { type: "front-end" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <section>
      <h1>Portfolio</h1>
      <div>
        <ul>
          {categories.map((category) => (
            <li className={category.type} key={category.type}>
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {" "}
                {category.type}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Project
        currentCategory={currentCategory}
      />
    </section>
  );
}

export default Portfolio;
