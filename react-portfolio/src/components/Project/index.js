import { useEffect } from "react";

function Project({ currentCategory }) {
  return (
    <section>
      {currentCategory.type === "full-stack" ? (
        <p>FULL STACK</p>
      ) :currentCategory.type === "back-end" ? (
        <p>BACK END</p>
      ) : (
        <p>FRONT END</p>
      )}
    </section>
  );
}

export default Project