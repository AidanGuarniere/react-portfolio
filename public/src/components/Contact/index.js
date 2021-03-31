function Contact() {
  return (
    <section>
        <h1>Contact</h1>
      <form
        action="mailto:aidanguarniere@gmail.com"
        method="post"
        encType="text/plain"
      >
        Name:
        <input type="text" name="name" placeholder="Please enter your name here"></input>
        E-mail:
        <input type="email" name="mail" placeholder="Please enter your email adress here"></input>
        Message:
        <textarea type="text" name="message" placeholder="Please enter your message here"></textarea>
        <input type="submit" value="Send"></input>
        <input type="reset" value="Reset"></input>
      </form>
    </section>
  );
}

export default Contact;
