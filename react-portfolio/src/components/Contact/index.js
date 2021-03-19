function Contact(currentTitle) {
    return (
        <section>
            <h1>{currentTitle.name}</h1>
            <h3 className="input-field">Name:</h3>
            <input></input>
            <h3 className="input-field">Email Adress:</h3>
            <input></input>
            <h3 className="input-field">Message:</h3>
            <input></input>
        </section>
    )
}

export default Contact