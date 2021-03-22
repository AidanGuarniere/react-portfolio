import resume from "../../assets/aidan-guarniere-resume.pdf"
function Resume({currentTitle}) {
    return(
        <section>
            <h1>Resume</h1>
            <p>Resume Placeholder</p>
            <embed src={resume} height="1000px" width="500px"></embed>
            <a href={resume} download="aidan-guarniere-resume.pdf">Download a copy of my resume here!</a>

        </section>
    )
}

export default Resume